/*
 * Filename: sku-boot.ts
 * FullPath: apps/CWSP-explorer/src/frontend/web/sku-boot.ts
 * FIND:sku
 * Change date: 13.42.00_27.08.2026
 * Reason: One explorer SKU boot for Capacitor, web/PWA, CRX, and Neutralino.
 */

import { bootMinimal } from "boot/BootLoader";
import { applyCwspSku, stashSkuHandoff } from "com/config/ecosystem-skus";

export type ExplorerHostKind = "capacitor" | "web" | "crx" | "neutralino";

/** INVARIANT: Capacitor / dedicated explorer never ships markdown viewer — CWSP-document owns open. */
const ENABLED_VIEWS_EXPLORER = "minimal,explorer,settings,history";
const ENABLED_VIEWS_CRX = "minimal,explorer,viewer,settings,history";

const detectHostKind = (explicit?: ExplorerHostKind): ExplorerHostKind => {
    if (explicit) return explicit;
    try {
        const proto = String(globalThis.location?.protocol || "").toLowerCase();
        if (proto === "chrome-extension:" || proto === "moz-extension:") return "crx";
        const g = globalThis as { Neutralino?: unknown; NL_OS?: unknown; Capacitor?: { isNativePlatform?: () => boolean } };
        if (g.Neutralino || g.NL_OS) return "neutralino";
        if (typeof g.Capacitor?.isNativePlatform === "function" && g.Capacitor.isNativePlatform()) {
            return "capacitor";
        }
    } catch {
        /* fall through */
    }
    return "web";
};

export const stampExplorerSku = (kind: ExplorerHostKind): void => {
    applyCwspSku("explorer");
    const root = document.documentElement;
    root.dataset.cwspSku = "explorer";
    root.dataset.cwspApp = "explorer";
    root.dataset.cwspSurface =
        kind === "crx"
            ? "cw-explorer-crx"
            : kind === "neutralino"
                ? "cw-explorer-neutralino"
                : "cw-explorer";
    root.dataset.cwspEnabledViews = kind === "crx" ? ENABLED_VIEWS_CRX : ENABLED_VIEWS_EXPLORER;
    root.dataset.cwspDefaultView = "explorer";
    if (kind === "capacitor") root.dataset.cwspNativeShell = "capacitor";
    else if (kind === "neutralino") root.dataset.cwspNativeShell = "neutralino";
    else if (kind === "crx") root.dataset.cwspNativeShell = "crx";
    try {
        const host = String(location.hostname || "").toLowerCase();
        const dedicated = host === "explorer.u2re.space" || host === "www.explorer.u2re.space";
        if (!dedicated) {
            const m = String(location.pathname || "").match(/^(\/(?:explorer|files|fm))(?:\/|$)/i);
            if (m) root.dataset.cwspRouterBase = "/explorer";
        }
    } catch {
        /* ignore */
    }
};

export const showExplorerBootFailure = (error: unknown, mount: HTMLElement = document.body): void => {
    const message = error instanceof Error ? error.stack || error.message : String(error);
    console.error("[CWSP-explorer] boot failed", error);
    mount.replaceChildren();
    mount.style.cssText =
        "margin:0;padding:16px;font:14px/1.4 ui-monospace,monospace;background:#111;color:#f66;white-space:pre-wrap;";
    mount.textContent = `[CWSP-explorer] boot failed\n\n${message}`;
};

/**
 * WHY: Capacitor `cws:shareIntent` is ingested by `installCapacitorShareIntentBridge`
 * (open directory, or ask what to do with a file).
 */
export const installExplorerShareIngress = (): void => {
    /* share pipeline lives in capacitor-share-intent + initIngressPWA */
};

export const bootExplorerSku = async (
    container: HTMLElement,
    kind?: ExplorerHostKind
): Promise<void> => {
    const host = detectHostKind(kind);
    stampExplorerSku(host);
    try {
        const q = new URLSearchParams(String(globalThis.location?.search || ""));
        const path = String(q.get("path") || q.get("src") || "").trim();
        if (path) stashSkuHandoff({ dest: "explorer", src: path });
    } catch {
        /* ignore */
    }
    installExplorerShareIngress();
    void import("@fest-lib/lure").then((m) => m.ensureRemoteMountedFs()).catch(() => {});

    if (host === "capacitor") {
        try {
            const { SystemBarType, SystemBars } = await import("@capacitor/core");
            await SystemBars.hide({ bar: SystemBarType.NavigationBar });
        } catch {
            /* web preview */
        }
    }

    if (host === "neutralino") {
        try {
            const neu = (globalThis as { Neutralino?: { init?: () => Promise<void> } }).Neutralino;
            if (typeof neu?.init === "function") await neu.init();
        } catch {
            /* sidecar not ready */
        }
    }

    await bootMinimal(container, "explorer");
};
