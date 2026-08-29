/*
 * FIND:open-policy
 * Wires `<ui-file-manager>`: Capacitor explorer hands files to CWSP-document (URI or cache FileProvider).
 */

/**
 * Wires `<ui-file-manager>` inside the explorer light-DOM shell: viewer/workcenter IPC,
 * speed-dial pin, path persistence, shell messages. Behavior ported from `CWExplorer.ts` with
 * explicit imports and an inject/merge API.
 */

import type { ShellContext } from "shells/types";
import { observe } from "@fest-lib/object";
import { StorageKeys, getString, setString } from "core/storage";
import { ensureDefaultFsBackends, resolveFsBackend } from "fl-ui/explorer/path-router";
import {
    addSpeedDialItem,
    createEmptySpeedDialItem,
    ensureSpeedDialMeta,
    persistSpeedDialItems,
    persistSpeedDialMeta
} from "core/store/StateStorage";
import type { ExplorerFileItem, ExplorerInjectApi } from "./inject";
import { getRegisteredExplorerInject, mergeExplorerInject } from "./inject";
import {
    buildExplorerProcessId,
    buildViewerProcessId,
    isTextLikeFile,
    openExplorerContextMenu,
    requestOpenView,
    guessNextShortcutCell
} from "./utils";
import { sendViewProtocolMessage } from "com/core/UniformViewTransport";
import {
    androidPackageForSku,
    isCwspNativeHost,
    publicHrefForSku,
    publicHrefForView,
    shouldHandoffViewToSibling,
    stashSkuHandoff,
    takeSkuHandoff
} from "com/config/ecosystem-skus";
import { loadSettings } from "com/config/Settings";
import {
    classifyOpenKind,
    looksLikePreviewableBinary,
    peekOpenPolicy,
    rememberOpenPolicyFromSettings,
    resolveOpenPolicy,
    skuForOpenSink,
    sinkToOpenLinkTarget,
    viewIdForOpenSink,
    type OpenChannel,
    type OpenSink
} from "com/config/open-policy";
import { isBookmarksPath } from "fl-ui/explorer/Operative";

export type LocalFileManager = HTMLElement & {
    path: string;
    navigate: (path: string) => void | Promise<void>;
    operative?: {
        runMenuAction?: (item: null, actionId: string) => void | Promise<void>;
    };
};

export type ExplorerWireOptions = {
    shellContext?: ShellContext;
    /** Route/query `params.path` or explicit override. */
    initialPath?: string | null;
    inject?: ExplorerInjectApi;
};

type WorkCenterAttachMode = "active" | "queued" | "headless";

const openFileWithSystem = async (file: File, sourcePath: string, chooser: boolean): Promise<boolean> => {
    const href = String(sourcePath || "").trim();
    try {
        const { launcherOpenUri } = await import("com/routing/native/launcher-bridge");
        if (typeof launcherOpenUri === "function") {
            const uri = /^(file|content|https?):/i.test(href) ? href : href.startsWith("/") ? href : "";
            if (uri && (await launcherOpenUri(uri, { chooser, mimeType: file.type || undefined, title: "Open with" }))) {
                return true;
            }
        }
    } catch {
        /* web / no bridge */
    }
    try {
        const url = URL.createObjectURL(file);
        globalThis.open?.(url, "_blank", "noopener,noreferrer");
        return true;
    } catch {
        return false;
    }
};

const guessMimeFromName = (name: string): string => {
    const n = String(name || "").toLowerCase();
    if (/\.(?:md|markdown|mdown|mkd)(?:$|[?#])/i.test(n)) return "text/markdown";
    if (/\.(?:txt|log|csv)(?:$|[?#])/i.test(n)) return "text/plain";
    if (/\.json(?:$|[?#])/i.test(n)) return "application/json";
    if (/\.pdf(?:$|[?#])/i.test(n)) return "application/pdf";
    if (/\.png(?:$|[?#])/i.test(n)) return "image/png";
    if (/\.jpe?g(?:$|[?#])/i.test(n)) return "image/jpeg";
    if (/\.webp(?:$|[?#])/i.test(n)) return "image/webp";
    if (/\.gif(?:$|[?#])/i.test(n)) return "image/gif";
    return "";
};

const nativeViewUri = async (sourcePath: string): Promise<string> => {
    const p = String(sourcePath || "").trim();
    if (/^(content|file|https?):/i.test(p)) return p;
    try {
        const { resolveNativeStorageUri } = await import("fl-ui/explorer/storage-bridge");
        const uri = await resolveNativeStorageUri(p);
        if (uri) return uri;
    } catch {
        /* web / no bridge */
    }
    if (/^\/(?:sdcard|storage)\//i.test(p)) return `file://${p}`;
    return "";
};

const handoffFileToSku = async (
    sink: OpenSink,
    item: ExplorerFileItem,
    sourcePath: string
): Promise<boolean> => {
    const file = item.file as File | undefined;
    const sku = skuForOpenSink(sink);
    const viewId = viewIdForOpenSink(sink);
    if (!sku || !viewId || !file) return false;
    try {
        const content = isTextLikeFile(file) ? await file.text() : "";
        stashSkuHandoff({ dest: viewId, content, filename: file.name || "", src: sourcePath });
    } catch {
        stashSkuHandoff({ dest: viewId, filename: file.name || "", src: sourcePath });
    }
    if (isCwspNativeHost()) {
        const pkg = androidPackageForSku(sku);
        const mime = String(file.type || "").trim() || guessMimeFromName(file.name) || undefined;
        const uri = await nativeViewUri(sourcePath);
        if (pkg && uri) {
            try {
                const { launcherOpenUri } = await import("com/routing/native/launcher-bridge");
                if (await launcherOpenUri(uri, {
                    packageName: pkg,
                    chooser: false,
                    mimeType: mime,
                    title: "Open"
                })) {
                    return true;
                }
            } catch {
                /* fall through to bytes */
            }
        }
        /* WHY: /user/ OPFS has no content://. Empty launch of Document shows the last saved file. */
        if (pkg && file.size > 0 && file.size <= 8 * 1024 * 1024) {
            try {
                const { launcherOpenFile } = await import("com/routing/native/launcher-bridge");
                if (await launcherOpenFile(file, {
                    packageName: pkg,
                    chooser: false,
                    mimeType: mime,
                    title: "Open"
                })) {
                    return true;
                }
            } catch {
                /* fall through */
            }
        }
        return false;
    }
    const href = publicHrefForSku(sku);
    if (href) {
        try {
            const next = new URL(href, globalThis.location?.href || href);
            if (sourcePath) next.searchParams.set("src", sourcePath);
            if (file.name) next.searchParams.set("filename", file.name);
            globalThis.location.assign(next.toString());
        } catch {
            globalThis.location.assign(href);
        }
        return true;
    }
    requestOpenView({ viewId, target: "window", params: { src: sourcePath, filename: file.name || "" } });
    return true;
};

/** lure uses `view-explorer-path`; runtime storage used `rs-explorer-path`. Read both. */
const EXPLORER_PATH_KEYS = [StorageKeys.EXPLORER_PATH, "view-explorer-path", "rs-explorer-path"] as const;

const readPersistedExplorerPath = (): string => {
    for (const key of EXPLORER_PATH_KEYS) {
        const value = String(getString(key, "") || "").trim();
        if (value) return value;
    }
    return "";
};

const writePersistedExplorerPath = (path: string): void => {
    const value = path || "/user/";
    for (const key of EXPLORER_PATH_KEYS) {
        setString(key, value);
    }
};

function loadLastPath(explorer: LocalFileManager, initialPath: string | null | undefined): void {
    try {
        ensureDefaultFsBackends();
    } catch {
        /* registry optional */
    }
    if (initialPath && initialPath.trim()) {
        explorer.path = initialPath.trim();
        return;
    }
    const handed = takeSkuHandoff("explorer");
    if (handed?.src) {
        explorer.path = handed.src;
        return;
    }
    const persisted = readPersistedExplorerPath();
    const nextPath = !persisted || persisted === "/" ? "/user/" : persisted;
    explorer.path = nextPath;
}

function setupExplorerEvents(
    explorer: LocalFileManager,
    opts: ExplorerWireOptions,
    inject: ExplorerInjectApi | undefined,
    signal: AbortSignal
): void {
    const listenerOpts = { signal } as AddEventListenerOptions;
    const showMessage = (message: string) => opts.shellContext?.showMessage?.(message);

    const openFileInViewer = async (
        item: ExplorerFileItem | undefined,
        fullPath: string | undefined,
        target: "window" | "base" | "immersive" = "window"
    ): Promise<boolean> => {
        const file = item?.file as File | undefined;
        if (!file || !(isTextLikeFile(file) || looksLikePreviewableBinary(file))) return false;
        const sourcePath = String(fullPath || "");
        /* WHY: hub `u2re.space` only. Capacitor explorer has no viewer — use `handoffFileToSku`. */
        if (target === "base" || target === "immersive") {
            requestOpenView({
                viewId: "viewer",
                target: "immersive",
                params: {
                    src: sourcePath,
                    filename: file.name || "",
                    processId: buildViewerProcessId(sourcePath)
                }
            });
            return true;
        }

        const processId = buildViewerProcessId(sourcePath);
        requestOpenView({
            viewId: "viewer",
            target: "window",
            params: {
                processId,
                src: sourcePath,
                filename: file.name || ""
            }
        });

        try {
            const sent = await sendViewProtocolMessage({
                type: "content-view",
                source: "explorer",
                destination: "viewer",
                contentType: file.type || "text/plain",
                attachments: [{ data: file, source: "explorer-viewer-open" }],
                data: {
                    filename: file.name,
                    path: sourcePath,
                    source: sourcePath
                },
                metadata: {
                    processId,
                    openTarget: "window"
                }
            });
            if (!sent) {
                showMessage("Viewer is not ready yet, retrying in background");
            }
        } catch (error) {
            console.warn("[Explorer] Failed to send viewer payload:", error);
        }
        return true;
    };

    const attachToWorkCenter = async (item: ExplorerFileItem | undefined, mode: WorkCenterAttachMode) => {
        const file = item?.file as File | undefined;
        if (!file) {
            showMessage("No file selected");
            return;
        }
        const sourcePath = `${explorer?.path || "/"}${item?.name || file.name}`;
        if (shouldHandoffViewToSibling("workcenter")) {
            try {
                const content = isTextLikeFile(file) ? await file.text() : "";
                stashSkuHandoff({
                    dest: "workcenter",
                    content,
                    filename: file.name || "",
                    src: sourcePath
                });
            } catch {
                stashSkuHandoff({ dest: "workcenter", filename: file.name || "", src: sourcePath });
            }
            const href = publicHrefForView("workcenter");
            if (href) globalThis.location.assign(href);
            return;
        }
        if (mode === "headless") {
            requestOpenView({
                viewId: "workcenter",
                target: "headless",
                params: {
                    queue: "1",
                    mode: "headless",
                    sourcePath
                }
            });
        } else if (mode === "active") {
            requestOpenView({ viewId: "workcenter", target: "window" });
        } else {
            requestOpenView({
                viewId: "workcenter",
                target: "window",
                params: { minimized: "1", queue: "1", sourcePath }
            });
        }

        const sent = await sendViewProtocolMessage({
            type: "content-share",
            source: "explorer",
            destination: "workcenter",
            contentType: file.type || "application/octet-stream",
            attachments: [{ data: file, source: "explorer-workcenter-attach" }],
            data: {
                filename: file.name,
                path: sourcePath,
                source: "explorer-attach",
                queued: mode !== "active"
            },
            metadata: {
                queueState: mode === "active" ? "awaiting" : mode === "queued" ? "pending" : "queued",
                mode,
                sourcePath
            }
        });
        if (sent) {
            showMessage(
                mode === "active"
                    ? `Attached ${file.name} to Work Center`
                    : `Queued ${file.name} for Work Center (${mode})`
            );
        } else {
            showMessage("Work Center queue is unavailable");
        }
    };

    const pinToHome = (item: ExplorerFileItem | undefined) => {
        const file = item?.file as File | undefined;
        const name = String(item?.name || file?.name || "").trim();
        if (!name) {
            showMessage("Nothing to pin");
            return;
        }
        const path = `${explorer?.path || "/"}${name}`;
        const cell = observe(guessNextShortcutCell());
        const shortcut = createEmptySpeedDialItem(cell);
        shortcut.label.value = name;
        shortcut.icon.value = item?.kind === "directory" ? "folder" : "file-text";
        shortcut.action = "open-link";
        addSpeedDialItem(shortcut);
        const meta = ensureSpeedDialMeta(shortcut.id, { action: "open-link" });
        meta.action = "open-link";
        meta.href = path;
        meta.description = `Pinned from Explorer: ${path}`;
        const pinSink = resolveOpenPolicy(
            peekOpenPolicy(),
            "explorer",
            classifyOpenKind(file || { name }),
            "open"
        );
        const pinTarget = sinkToOpenLinkTarget(pinSink);
        if (pinTarget) meta.openLinkTarget = pinTarget;
        persistSpeedDialItems();
        persistSpeedDialMeta();
        showMessage(`Pinned ${name} to Home`);
    };

    const getItemPath = (item?: ExplorerFileItem): string => `${explorer?.path || "/"}${item?.name || ""}`;

    const builtInHandlers: Record<string, (item?: ExplorerFileItem) => Promise<void> | void> = {
        view: async (item) => {
            if (isCwspNativeHost()) {
                await handoffFileToSku("document", item as ExplorerFileItem, getItemPath(item));
                return;
            }
            await openFileInViewer(item, getItemPath(item), "window");
        },
        "view-base": async (item) => {
            if (isCwspNativeHost()) {
                await handoffFileToSku("document", item as ExplorerFileItem, getItemPath(item));
                return;
            }
            await openFileInViewer(item, getItemPath(item), "base");
        },
        "send-transfer": async (item) => {
            if (!item) {
                showMessage("No file selected");
                return;
            }
            if (!item.file && item.kind === "file") {
                const loadPath = getItemPath(item);
                try {
                    const backend = resolveFsBackend(loadPath);
                    if (typeof backend?.readFile === "function") {
                        item.file = await backend.readFile(loadPath);
                    }
                } catch {
                    /* optional */
                }
            }
            if (!item.file) {
                showMessage("Nothing to send");
                return;
            }
            const ok = await handoffFileToSku("transfer", item, getItemPath(item));
            showMessage(ok ? `Sent ${item.name || item.file.name} to Transfer` : "Transfer is unavailable");
        },
        "attach-workcenter": (item) => attachToWorkCenter(item, "active"),
        "attach-workcenter-queued": (item) => attachToWorkCenter(item, "queued"),
        "attach-workcenter-headless": (item) => attachToWorkCenter(item, "headless"),
        "pin-home": (item) => pinToHome(item)
    };

    const mergedHandlers = {
        ...builtInHandlers,
        ...(inject?.contextActionHandlers ?? {})
    };

    const onFileOpen = async (e: Event) => {
        const detail = (e as CustomEvent<{ item?: ExplorerFileItem; path?: string; how?: string }>).detail || {};
        const { item, path } = detail;
        if (item?.kind !== "file") return;
        if (!item.file) {
            const loadPath = path || `${explorer?.path || "/"}${item.name || ""}`;
            try {
                const backend = resolveFsBackend(loadPath);
                if (typeof backend?.readFile === "function") {
                    item.file = await backend.readFile(loadPath);
                }
            } catch {
                /* native /saf /sdcard read optional */
            }
            if (!item.file) {
                try {
                    const { provide } = await import("@fest-lib/lure");
                    item.file = await provide(loadPath);
                } catch {
                    /* provide() may be absent in some hosts */
                }
            }
        }
            if (!item.file) {
            showMessage("Could not read this file");
            return;
        }
        const settings = await loadSettings().catch(() => null);
        rememberOpenPolicyFromSettings(settings);
        const kind = classifyOpenKind(item.file);
        const channel: OpenChannel = detail.how === "dblclick" ? "dblclick" : "open";
        const sink = resolveOpenPolicy(settings?.openPolicy ?? peekOpenPolicy(), "explorer", kind, channel);
        if (sink === "system" || sink === "external") {
            if (await openFileWithSystem(item.file, path || getItemPath(item), sink === "system")) return;
        }
        if (sink === "document" || sink === "transfer") {
            if (await handoffFileToSku(sink, item, path || getItemPath(item))) return;
            showMessage(sink === "document" ? "CWSP-document did not open the file" : "Transfer is unavailable");
            return;
        }
        if (sink === "workcenter") {
            await attachToWorkCenter(item, "active");
            return;
        }
        if (sink === "explorer") {
            showMessage(item.name || "File");
            return;
        }
        if (isCwspNativeHost() && (sink === "ask" || sink === "viewer" || sink === "display")) {
            if (await handoffFileToSku("document", item, path || getItemPath(item))) return;
        }
        const preferViewer =
            !isCwspNativeHost() &&
            (sink === "viewer" ||
                sink === "display" ||
                (sink === "ask" && (isTextLikeFile(item.file) || looksLikePreviewableBinary(item.file))));
        if (preferViewer) {
            const opened = await openFileInViewer(item, path, "window");
            if (!opened) await attachToWorkCenter(item, "active");
            return;
        }
        await attachToWorkCenter(item, "active");
    };
    explorer.addEventListener("open-item", onFileOpen, listenerOpts);
    explorer.addEventListener("open", onFileOpen, listenerOpts);
    explorer.addEventListener("rs-open", onFileOpen, listenerOpts);

    const savePath = () => {
        writePersistedExplorerPath(explorer.path || "/user/");
    };
    explorer.addEventListener("entries-updated", savePath, listenerOpts);
    explorer.addEventListener("rs-navigate", savePath, listenerOpts);

    explorer.addEventListener(
        "context-action",
        async (event: Event) => {
            const detail = (event as CustomEvent<{ action?: string; item?: ExplorerFileItem }>).detail || {};
            const action = String(detail.action || "");
            const item = detail.item;
            if (!action) return;
            const handler = mergedHandlers[action];
            if (!handler) return;
            await handler(item);
        },
        listenerOpts
    );

    explorer.addEventListener(
        "contextmenu",
        (event: MouseEvent) => {
            const pathItems = event.composedPath?.() || [];
            const inFileItem = pathItems.some((node) => {
                const el = node as HTMLElement | null;
                if (!el || typeof el.classList?.contains !== "function") return false;
                return (
                    el.classList.contains("row") ||
                    el.classList.contains("action-btn") ||
                    el.classList.contains("ctx-menu")
                );
            });
            if (inFileItem) {
                return;
            }
            event.preventDefault();
            const path = explorer?.path || "/";
            const extra = inject?.extraBackgroundMenuItems?.({ path }) ?? [];
            const runBookmarkMenu = explorer.operative?.runMenuAction;
            const bookmarkCreateItems =
                isBookmarksPath(path) && typeof runBookmarkMenu === "function"
                    ? [
                          {
                              id: "new-bookmark",
                              label: "New bookmark…",
                              icon: "bookmark-simple",
                              action: () => {
                                  void runBookmarkMenu(null, "new-bookmark");
                              }
                          },
                          {
                              id: "new-folder",
                              label: "New folder…",
                              icon: "folder-plus",
                              action: () => {
                                  void runBookmarkMenu(null, "new-folder");
                              }
                          }
                      ]
                    : [];
            openExplorerContextMenu(event.clientX, event.clientY, [
                ...bookmarkCreateItems,
                {
                    id: "refresh",
                    label: "Refresh",
                    icon: "arrows-clockwise",
                    action: () => {
                        void explorer.navigate(path);
                    }
                },
                {
                    id: "open-new-explorer",
                    label: "New Explorer window",
                    icon: "books",
                    action: () =>
                        requestOpenView({
                            viewId: "explorer",
                            target: "window",
                            params: {
                                path,
                                processId: buildExplorerProcessId(path)
                            }
                        })
                },
                {
                    id: "open-home",
                    label: "Go to Home",
                    icon: "house",
                    action: () => opts.shellContext?.navigate?.("home")
                },
                ...extra
            ], {
                anchor: event.target instanceof Element ? event.target : explorer,
                resolveOverlayMountPoint: opts.shellContext?.resolveOverlayMountPoint
            });
        },
        listenerOpts
    );
}

function setupFallbackExplorerEvents(shellRoot: HTMLElement, opts: ExplorerWireOptions, signal: AbortSignal): void {
    const listenerOpts = { signal } as AddEventListenerOptions;
    const showMessage = (msg: string) => opts.shellContext?.showMessage?.(msg);
    const filesList = shellRoot.querySelector("[data-fallback-files]") as HTMLUListElement | null;
    const pickBtn = shellRoot.querySelector('[data-action="pick-files"]') as HTMLButtonElement | null;
    const workBtn = shellRoot.querySelector('[data-action="open-workcenter"]') as HTMLButtonElement | null;
    if (!pickBtn || !filesList) return;

    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = ".md,.markdown,.txt,.json,.xml,.yaml,.yml,.csv,.log,text/*";
    input.style.display = "none";
    shellRoot.append(input);

    pickBtn.addEventListener("click", () => input.click(), listenerOpts);
    workBtn?.addEventListener("click", () => requestOpenView({ viewId: "workcenter", target: "window" }), listenerOpts);

    input.addEventListener(
        "change",
        async () => {
            const files = Array.from(input.files || []);
            filesList.replaceChildren();
            if (files.length === 0) return;

            for (const file of files) {
                const li = document.createElement("li");
                li.textContent = file.name;
                filesList.append(li);
            }

            const firstTextLike = files.find((file) => isTextLikeFile(file));
            if (firstTextLike && isCwspNativeHost()) {
                await handoffFileToSku("document", {
                    kind: "file",
                    name: firstTextLike.name,
                    file: firstTextLike
                }, firstTextLike.name);
                return;
            }
            if (firstTextLike) {
                requestOpenView({ viewId: "viewer", target: "window" });
                const sent = await sendViewProtocolMessage({
                    type: "content-view",
                    source: "explorer-fallback",
                    destination: "viewer",
                    contentType: firstTextLike.type || "text/plain",
                    attachments: [{ data: firstTextLike, source: "explorer-fallback" }],
                    data: {
                        filename: firstTextLike.name,
                        source: "explorer-fallback"
                    }
                });
                if (!sent) {
                    showMessage("Viewer is not ready yet");
                }
            }
        },
        listenerOpts
    );
}

/**
 * Attach explorer behaviors to `shellRoot` (`.view-explorer`). Returns cleanup and the file manager host if present.
 */
export function wireExplorerSubtree(
    shellRoot: HTMLElement,
    wireOpts: ExplorerWireOptions
): { cleanup: () => void; fileManager: LocalFileManager | null } {
    const injectMerged = mergeExplorerInject(getRegisteredExplorerInject(), wireOpts.inject);
    const ac = new AbortController();
    const { signal } = ac;

    const fm = shellRoot.querySelector("ui-file-manager") as LocalFileManager | null;
    injectMerged?.onWire?.(fm, shellRoot);

    if (fm) {
        loadLastPath(fm, wireOpts.initialPath ?? null);
        setupExplorerEvents(fm, wireOpts, injectMerged, signal);
        return {
            cleanup: () => {
                writePersistedExplorerPath(fm.path || "/user/");
                ac.abort();
            },
            fileManager: fm
        };
    }

    setupFallbackExplorerEvents(shellRoot, wireOpts, signal);
    return {
        cleanup: () => ac.abort(),
        fileManager: null
    };
}
