const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/src.js","../com/app.js","../chunks/rolldown-runtime.js","../chunks/vite-preload-DHlaQ_oz.js","../vendor/jsox.js","../com/app2.js","../com/app3.js","../chunks/shells.js","../chunks/ecosystem-skus.js","../vendor/jsox2.js","../vendor/@capacitor_core.js","../chunks/UniformInterop2.js","../chunks/names.js","../chunks/airpad-cwsp-client-parity.js","../chunks/multi-value-list.js","../chunks/remote-connection-runtime.js","../chunks/open-policy.js","../chunks/SettingsTypes.js","../chunks/process-ingress.js","../chunks/settings-shell-profile.js","../chunks/toast.js","../chunks/preview.js","../chunks/src2.js","../chunks/window.js","../shells/environment-components-flyout-ChromeFlyout.js","../vendor/culori.js","../com/app4.js","../com/app5.js","../com/app6.js","../fest/veela.js","../fest/veela2.js","../com/app7.js","../vendor/dompurify.js","../chunks/tabbed.js","../chunks/environment.js","../chunks/src6.js","../chunks/types.js","../chunks/UniformViewTransport.js","../chunks/UnifiedMessaging.js","../chunks/UniformInterop.js","../chunks/channel-actions.js","../chunks/sku-ingress.js","../com/app8.js","../com/app16.js","../chunks/UnifiedMessaging2.js","../chunks/core.js","../chunks/templates.js","../chunks/sw-unwrap.js","../chunks/Clipboard.js","../chunks/log-sanitizer.js","../chunks/utils.js","../chunks/CustomInstructions.js","../vendor/@toon-format_toon.js","../chunks/Runtime.js","../chunks/RuntimeSettings.js","../shells/boot-history-base.js","../chunks/ecosystem-skus2.js","../chunks/packet-wire-hash.js","../chunks/cws-bridge.js","../vendor/@capacitor_core2.js","../chunks/capacitor-permissions.js","../chunks/admin-doors.js","../chunks/capacitor-permissions3.js","../chunks/hub-socket-boot.js","../chunks/src5.js","../chunks/frontend-debug-capture.js","../chunks/src4.js","../chunks/transfer-history-runtime.js","../fest/veela3.js","../chunks/src3.js","../fest/veela4.js","../chunks/launcher-state.js","../chunks/capacitor-share-intent.js","../chunks/capacitor-clipboard-asset.js","../vendor/@fest-lib_lure.js","../chunks/ViewTransferRouting.js","../chunks/workcenter-command-wire.js"])))=>i.map(i=>d[i]);
import { r as __exportAll } from "../chunks/rolldown-runtime.js";
import { a as applyCwspSku, c as inferCwspSkuFromLocation, d as isViewLocalToSurface, l as isCwspNativeHost, n as SKU_HUB_PATHS, v as stashSkuHandoff } from "../chunks/ecosystem-skus.js";
import { d as normalizeDestination, f as normalizeViewId, l as getDestinationAliases, n as BROADCAST_CHANNELS, o as ROUTE_HASHES, p as viewBroadcastChannelName, r as COMPONENTS, u as matchesDestination } from "../chunks/names.js";
import { t as __vitePreload } from "../chunks/vite-preload-DHlaQ_oz.js";
import { d as sendProtocolMessage, i as enqueuePendingMessage, l as replayQueuedMessagesForDestination } from "../chunks/UnifiedMessaging.js";
import { i as registerHandler, n as initializeComponent, r as registerComponent, s as unregisterHandler } from "../chunks/UnifiedMessaging2.js";
import { n as toUnifiedInteropMessage } from "../chunks/UniformInterop2.js";
import { a as invokeCwsNative, i as initCwsNativeBridge, s as isCapacitorCwsNativeShell } from "../vendor/@capacitor_core.js";
import { C as sanitizeFleetRouteTarget, D as shouldPreferWanGatewayForAirpad, E as shouldFleetDeskGatewayProbeFallbacks, K as splitConnectHostList, M as CWSP_DEFAULT_HTTPS_PORTS, N as CWSP_DEFAULT_HTTP_PORTS, T as shouldConnectViaFleetGateway, _ as isOnHomeFleetLanPageHost, d as isFleetDeskWireNodeId, f as isFleetGatewayWireNodeId, g as isOffHomeFleetNetwork, h as isHomeFleetLanHost, m as isGuestPrivateLanIpv4, p as isGatewayHttpsOrigin, r as DEFAULT_DESK_WIRE_NODE_ID, u as isAssociableFleetWireNodeId, v as normalizeWireNodeIdForWire, w as sanitizeFleetSelfWireNodeId } from "../chunks/airpad-cwsp-client-parity.js";
import { a as shouldAnnotateCoordinatorPayload, c as loadSettings, d as DEFAULT_SETTINGS, i as annotateCoordinatorPayload, l as shouldDeferCrxHubSocketBootstrap, n as inferWireDedupeCategory, o as annotatePacketWireTime64, r as packetWireDedupeGuard, s as ensureCapacitorCwspSettingsSeeded, t as annotatePacketWireHash, u as setAirpadCredentialInvalidator } from "../chunks/packet-wire-hash.js";
import { C as isPreferNativeWebsocketEnabled, S as isNeutralinoNodeClipboardHubOwned, T as isShellRemoteClipboardBridgeEnabled, _ as getRemoteRouteTarget, a as getAirPadEndpointUrl, b as isClipboardSenderAllowedForInbound, c as getAirPadPeerInstanceId, d as getAssociatedClientToken, f as getClientAccessToken, g as getRemoteProtocol, h as getRemoteHost, i as getAirPadDirectTargetUrl, l as getAirPadTransportMode, m as getClipboardPushIntervalMs, n as getAccessToken, o as getAirPadHandshakeArchetype, p as getClipboardBroadcastWireTargets, r as getAirPadClientId, s as getAirPadHandshakeConnectionType, t as applyAirpadRuntimeFromAppSettings, u as getAirPadTransportSecret, v as isApplyRemoteClipboardToDeviceEnabled, w as isPushLocalClipboardToLanEnabled, x as isMaintainHubSocketConnectionEnabled, y as isClipboardHubBootstrapEnabled } from "../chunks/remote-connection-runtime.js";
import { a as loadSettings$1, c as JSOX, s as saveSettings } from "../vendor/jsox2.js";
import { X as Q, b as saveUIState, y as makeUIState } from "../com/app.js";
import { i as initializeAppCanvasLayer } from "../vendor/culori.js";
import "../chunks/Clipboard.js";
import { n as scheduleFrame } from "../chunks/Runtime.js";
import { n as isCapacitorNative$2 } from "../chunks/capacitor-permissions.js";
import { loadAsAdopted } from "/fest/style-lib.js";
import { createServiceChannelManager } from "/fest/uniform.js";
import { withTimeout } from "/fest/core.js";
import { makeObjectAssignable, observe, safe, stringRef } from "/fest/object.js";
import { fixOrientToScreen } from "/fest/dom.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region ../CWSP-document/src/frontend/boot/history-base.ts
var KNOWN_PATH_MOUNTS = [
	"cwsp",
	"transfer",
	"markdown",
	"document",
	"viewer",
	"explorer",
	"workcenter",
	"process",
	"ai",
	"kvm"
];
/** Dedicated PWA hosts — app lives at `/`. Hub/LAN keep `/markdown` `/viewer` path mounts. */
var DEDICATED_SKU_HOSTS = [
	"md.u2re.space",
	"www.md.u2re.space",
	"explorer.u2re.space",
	"www.explorer.u2re.space",
	"process.u2re.space",
	"workcenter.u2re.space",
	"ai.u2re.space",
	"cwsp.u2re.space",
	"www.cwsp.u2re.space",
	"transfer.u2re.space"
];
function isDedicatedSkuHost(hostname) {
	try {
		const host = String(hostname ?? globalThis.location?.hostname ?? "").toLowerCase();
		return DEDICATED_SKU_HOSTS.includes(host);
	} catch {
		return false;
	}
}
function isKnownPathMountSegment(segment) {
	return KNOWN_PATH_MOUNTS.includes(String(segment || "").toLowerCase());
}
/**
* On a named SKU host, `/viewer` `/markdown` `/explorer` … are Fastify aliases of `/`, not view routes.
* WHY: minimal path-routing wrote `/viewer?shell=minimal` → 302 `/viewer/` → 302 `/` → bootloop.
*/
function pathForSkuHostView(viewPath) {
	let path = String(viewPath || "/").trim() || "/";
	if (!path.startsWith("/")) path = `/${path}`;
	const sku = inferCwspSkuFromLocation();
	const nativeSku = isCwspNativeHost() && !!sku && sku !== "launcher" && sku !== "crx";
	if (!isDedicatedSkuHost() && !nativeSku) return path;
	const seg = path.replace(/^\/+/, "").split("/")[0]?.toLowerCase() || "";
	if (!seg || !isKnownPathMountSegment(seg)) return path;
	if (sku && sku !== "launcher" && sku !== "crx") return SKU_HUB_PATHS[sku]?.includes(seg) ? "/" : path;
	return "/";
}
/**
* Router base path without trailing slash ("" at domain root, "/cwsp" on IP path mount).
* WHY: absolute `/network` history entries drop the Fastify debugPath prefix and 404 on reload.
*/
function getHistoryBasePath() {
	try {
		const fromData = String(globalThis.document?.documentElement?.dataset?.cwspRouterBase || "").trim();
		if (fromData) return (fromData.startsWith("/") ? fromData : `/${fromData}`).replace(/\/+$/, "") || "";
		const baseHref = globalThis.document?.querySelector?.("base")?.getAttribute("href");
		if (baseHref && baseHref !== "/" && !baseHref.startsWith(".")) {
			const origin = globalThis.location?.origin || "http://localhost";
			return new URL(baseHref, origin).pathname.replace(/\/+$/, "") || "";
		}
		if (isDedicatedSkuHost()) return "";
		const pathname = String(globalThis.location?.pathname || "/");
		const re = new RegExp(`^/(${KNOWN_PATH_MOUNTS.join("|")})(?:/|$)`, "i");
		const m = pathname.match(re);
		if (m?.[1]) return `/${m[1].toLowerCase()}`;
	} catch {}
	return "";
}
/** Prefix an absolute app path with the history base (`/network` → `/cwsp/network`). */
function withHistoryBase(pathname) {
	const base = getHistoryBasePath();
	let path = String(pathname || "/").trim() || "/";
	if (!path.startsWith("/")) path = `/${path}`;
	if (!base) return path;
	if (path === base || path.startsWith(`${base}/`)) return path;
	const pathSeg = path.replace(/^\/+/, "").split("/")[0]?.toLowerCase() || "";
	const baseSeg = base.replace(/^\/+/, "").split("/")[0]?.toLowerCase() || "";
	if (baseSeg && pathSeg && isKnownPathMountSegment(baseSeg) && isKnownPathMountSegment(pathSeg) && pathSeg !== baseSeg) return path;
	if (path === "/") return `${base}/`;
	return `${base}${path}`;
}
/** Strip history base from a location pathname before view matching. */
function stripHistoryBase(pathname) {
	const base = getHistoryBasePath();
	let path = String(pathname || "/");
	if (!path.startsWith("/")) path = `/${path}`;
	if (!base) return path;
	if (path === base || path === `${base}/`) return "/";
	if (path.startsWith(`${base}/`)) {
		const rest = path.slice(base.length);
		return rest.startsWith("/") ? rest : `/${rest}`;
	}
	return path;
}
/** Persist detected mount on `<html>` so later navigations stay scoped. */
function ensureHistoryBaseDataset() {
	const base = getHistoryBasePath();
	try {
		const el = globalThis.document?.documentElement;
		if (el && base) el.dataset.cwspRouterBase = base;
	} catch {}
	return base;
}
//#endregion
//#region ../CWSP-document/src/frontend/boot/shell-preference.ts
var LS_BOOT_SHELL_LAST_ACTIVE = "rs-boot-shell-last-active";
function normalizeBootShellId(shell) {
	if (shell === "faint") return "tabbed";
	if (shell === "base" || shell === "minimal" || shell === "window" || shell === "tabbed" || shell === "environment" || shell === "content" || shell === "immersive") return shell;
	return getDefaultBootShellId();
}
/**
* Canonical default when no explicit shell preference exists: environment launcher.
*/
function getDefaultBootShellId() {
	return "environment";
}
function recordBootShellWindowActivity(shellId) {
	try {
		const payload = {
			shell: normalizeBootShellId(shellId),
			t: Date.now()
		};
		globalThis.localStorage?.setItem(LS_BOOT_SHELL_LAST_ACTIVE, JSON.stringify(payload));
	} catch {}
}
/**
* Track this tab/window as the last-used shell context (focus + pointer).
* Returns a dispose function for unmount.
*/
function initBootShellWindowActivity(shellId) {
	const shell = normalizeBootShellId(shellId);
	const onWinFocus = () => recordBootShellWindowActivity(shell);
	const onPointer = () => recordBootShellWindowActivity(shell);
	const w = globalThis;
	w.addEventListener("focus", onWinFocus);
	w.addEventListener("pointerdown", onPointer, {
		capture: true,
		passive: true
	});
	queueMicrotask(() => recordBootShellWindowActivity(shell));
	return () => {
		w.removeEventListener("focus", onWinFocus);
		w.removeEventListener("pointerdown", onPointer, { capture: true });
	};
}
//#endregion
//#region ../CWSP-document/src/shared/routing/channel/ServiceChannels.ts
/**
* Service Channels for CWSP-shell
* Extends fest/uniform ServiceChannelManager with app-specific configuration
*/
var SERVICE_CHANNEL_CONFIG = {
	workcenter: {
		broadcastName: BROADCAST_CHANNELS.WORK_CENTER,
		routeHash: ROUTE_HASHES.WORKCENTER,
		component: COMPONENTS.WORK_CENTER,
		description: "AI work center for processing files and content"
	},
	settings: {
		broadcastName: BROADCAST_CHANNELS.SETTINGS,
		routeHash: ROUTE_HASHES.SETTINGS,
		component: COMPONENTS.SETTINGS,
		description: "Application settings and configuration"
	},
	airpad: {
		broadcastName: BROADCAST_CHANNELS.SERVICE_AIRPAD,
		routeHash: ROUTE_HASHES.AIRPAD,
		component: COMPONENTS.AIRPAD,
		description: "AirPad remote trackpad/keyboard + clipboard"
	},
	network: {
		broadcastName: BROADCAST_CHANNELS.SERVICE_NETWORK,
		routeHash: ROUTE_HASHES.NETWORK,
		component: COMPONENTS.NETWORK,
		description: "CWSP network status, probes, and endpoint routing"
	},
	viewer: {
		broadcastName: BROADCAST_CHANNELS.MARKDOWN_VIEWER,
		routeHash: ROUTE_HASHES.MARKDOWN_VIEWER,
		component: COMPONENTS.MARKDOWN_VIEWER,
		description: "Content viewer for markdown and files"
	},
	explorer: {
		broadcastName: BROADCAST_CHANNELS.FILE_EXPLORER,
		routeHash: ROUTE_HASHES.FILE_EXPLORER,
		component: COMPONENTS.FILE_EXPLORER,
		description: "File explorer and browser"
	},
	print: {
		broadcastName: BROADCAST_CHANNELS.PRINT_CHANNEL,
		routeHash: ROUTE_HASHES.PRINT,
		component: COMPONENTS.BASIC_PRINT,
		description: "Print preview and export"
	},
	history: {
		broadcastName: BROADCAST_CHANNELS.HISTORY_CHANNEL,
		routeHash: ROUTE_HASHES.HISTORY,
		component: COMPONENTS.HISTORY,
		description: "Action history and undo/redo"
	},
	editor: {
		broadcastName: "rs-editor",
		routeHash: ROUTE_HASHES.MARKDOWN_EDITOR,
		component: COMPONENTS.MARKDOWN_EDITOR,
		description: "Content editor"
	},
	home: {
		broadcastName: "rs-home",
		routeHash: "#home",
		component: "home",
		description: "Home/landing view"
	}
};
var appServiceChannelManager = null;
/**
* Get the app-configured ServiceChannelManager
*/
function getServiceChannels() {
	if (!appServiceChannelManager) appServiceChannelManager = createServiceChannelManager({
		channels: SERVICE_CHANNEL_CONFIG,
		logPrefix: "[ServiceChannels]"
	});
	return appServiceChannelManager;
}
var serviceChannels = getServiceChannels();
//#endregion
//#region ../CWSP-document/src/shared/routing/core/view-message-routing.ts
var VIEW_MESSAGE_FALLBACKS = {
	viewer: [
		"content-view",
		"content-load",
		"markdown-content"
	],
	workcenter: [
		"content-attach",
		"file-attach",
		"share-target-input",
		"content-share"
	],
	explorer: [
		"file-ask",
		"file-save",
		"navigate-path",
		"content-explorer"
	],
	home: ["home-update", "content-share"],
	editor: ["content-load", "content-edit"],
	settings: ["settings-update"],
	history: ["history-update"],
	print: ["content-view"]
};
var inferViewDestination = (viewId) => {
	return normalizeViewId(viewId);
};
var selectMessageTypeForView = (view, incomingType) => {
	const checks = [incomingType, ...VIEW_MESSAGE_FALLBACKS[view.id] || []];
	for (const type of checks) {
		if (!type) continue;
		if (!view.canHandleMessage || view.canHandleMessage(type)) return type;
	}
	return null;
};
var mapUnifiedMessageToView = (view, message) => {
	const selectedType = selectMessageTypeForView(view, message.type);
	if (!selectedType) return null;
	const id = typeof message.id === "string" && message.id.trim() ? message.id : void 0;
	return {
		...id ? { id } : {},
		type: selectedType,
		data: message.data,
		metadata: message.metadata
	};
};
//#endregion
//#region ../CWSP-document/src/shared/routing/core/view-api.ts
/**
* View-scoped POST API + BroadcastChannel bridge.
* - Production: service worker intercepts POST /{view} and fans out to clients.
* - Dev (no SW): Vite middleware returns devRelay JSON; this module posts to rs-view-* locally.
*/
function subscribeViewChannel(viewId, handler) {
	if (typeof BroadcastChannel === "undefined") return () => {};
	const bc = new BroadcastChannel(viewBroadcastChannelName(normalizeViewId(viewId)));
	bc.addEventListener("message", handler);
	return () => {
		bc.removeEventListener("message", handler);
		bc.close();
	};
}
/**
* Ask active shell/router to open a view using query-like envelope semantics.
* Window shell listens to this event and can map request to a process frame.
*/
function requestOpenView(request) {
	const viewId = String(request?.viewId || "").trim().toLowerCase();
	if (!viewId) return;
	const rawTarget = request?.target || "window";
	const target = rawTarget === "base" ? "immersive" : rawTarget;
	globalThis?.dispatchEvent?.(new CustomEvent("cw:view-open-request", { detail: {
		viewId,
		target,
		params: request?.params || {},
		pid: request?.pid || null,
		body: request?.body,
		contentType: request?.contentType,
		channel: request?.channel,
		attachments: request?.attachments,
		windowType: request?.windowType,
		newTask: request?.newTask
	} }));
}
//#endregion
//#region ../CWSP-document/src/shared/routing/core/view-inbound-timing.ts
function getViewHTMLElement(view) {
	try {
		if (typeof HTMLElement !== "undefined" && view instanceof HTMLElement) return view;
	} catch {}
	return null;
}
function payloadRecordContainsRenderableFiles(payload) {
	if (!payload || typeof payload !== "object") return false;
	const rec = payload;
	const hasFileLike = (v) => typeof File !== "undefined" && v instanceof File || typeof Blob !== "undefined" && v instanceof Blob;
	if (hasFileLike(rec.file) || hasFileLike(rec.blob)) return true;
	const files = rec.files;
	if (Array.isArray(files) && files.some((x) => hasFileLike(x))) return true;
	const attachments = rec.attachments;
	if (Array.isArray(attachments)) for (const a of attachments) {
		if (!a || typeof a !== "object") continue;
		const data = a.data;
		if (hasFileLike(data)) return true;
	}
	return false;
}
function payloadContainsRenderableFilesDeep(payload) {
	if (!payload || typeof payload !== "object") return false;
	const rec = payload;
	if (payloadRecordContainsRenderableFiles(rec)) return true;
	const nested = rec.data;
	if (nested && typeof nested === "object" && payloadRecordContainsRenderableFiles(nested)) return true;
	const topAtt = rec.attachments;
	if (Array.isArray(topAtt)) for (const a of topAtt) {
		if (!a || typeof a !== "object") continue;
		const data = a.data;
		if (typeof File !== "undefined" && data instanceof File || typeof Blob !== "undefined" && data instanceof Blob) return true;
	}
	return false;
}
var FILE_INGRESS_TYPES = /* @__PURE__ */ new Set([
	"content-share",
	"share-target-input",
	"share-target-result",
	"content-attach",
	"file-attach"
]);
/** Narrow heuristic: ingress that carries blobs/files benefits from delayed delivery. */
function shouldDeferIngressForRenderableFiles(message, mappedType) {
	if (!FILE_INGRESS_TYPES.has(String(mappedType || "").toLowerCase())) return false;
	return payloadContainsRenderableFilesDeep(message);
}
/** Lightweight control handlers — skipping timing fences keeps sliders/toggles responsive. */
var SKIP_UNIFIED_INGRESS_TIMING = /* @__PURE__ */ new Set([
	"settings-update",
	"history-update",
	"home-update"
]);
/**
* Most unified ingress paths should settle the host before calling `handleMessage`.
* WHY: Applies to viewer, Work Center attachments, explorer saves, staged mail, … not launch-queue-only.
*/
function shouldDeferUnifiedIngressUntilStable(_message, mappedType) {
	return !SKIP_UNIFIED_INGRESS_TIMING.has(String(mappedType || "").toLowerCase());
}
/** One frame + microtask — enough when the viewer host and sinks already exist (common for launch-queue bursts). */
async function quickPaintFence() {
	await new Promise((resolve) => requestAnimationFrame(() => resolve()));
	await new Promise((resolve) => queueMicrotask(resolve));
}
/**
* Softer barrier when the DOM still needs layout (first paint / route change): double RAF without an extra idle delay.
*/
async function stepPaintFenceModerate() {
	await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
	await new Promise((resolve) => queueMicrotask(resolve));
}
var MO_CONNECTED_MS = 220;
var MO_SINK_MS = 280;
/** Cap how long we wait on enter transitions so a burst of opens still reaches the latest file quickly. */
var ANIM_CAP_DEFAULT_MS = 160;
var ANIM_CAP_HOT_PATH_MS = 90;
/** Minimal shell (no HTMLElement view host): one frame before mutating viewer state — was too slow with full fence. */
async function settleIngressPaintForMinimalShell() {
	await quickPaintFence();
}
async function waitUntilViewConnectedToDocument(view, timeoutMs = MO_CONNECTED_MS) {
	const el = getViewHTMLElement(view);
	if (!el) return;
	if (el.isConnected) return;
	const rootEl = typeof document !== "undefined" && document.documentElement instanceof HTMLElement ? document.documentElement : null;
	if (!rootEl) return;
	await new Promise((resolve) => {
		let done = false;
		const finish = () => {
			if (done) return;
			done = true;
			try {
				mo.disconnect();
			} catch {}
			clearTimeout(tid);
			resolve();
		};
		const mo = new MutationObserver(() => {
			if (el.isConnected) finish();
		});
		mo.observe(rootEl, {
			childList: true,
			subtree: true
		});
		const tid = setTimeout(finish, timeoutMs);
	});
}
var RENDER_SINK_SELECTORS = ["[data-render-target]", "[data-raw-target]"];
function shallowSinkPresent(host) {
	for (const sel of RENDER_SINK_SELECTORS) try {
		if (host.querySelector(sel)) return true;
		if (host.shadowRoot?.querySelector(sel)) return true;
	} catch {}
	return false;
}
function needsRenderableSinkWait(mappedType, message) {
	const mt = String(mappedType || "").toLowerCase();
	if (mt === "content-load" || mt === "markdown-content" || mt === "content-view") return true;
	return shouldDeferIngressForRenderableFiles(message, mappedType);
}
async function waitForRenderableSinkMounted(view, timeoutMs = MO_SINK_MS) {
	const el = getViewHTMLElement(view);
	if (!el) return;
	if (shallowSinkPresent(el)) return;
	await new Promise((resolve) => {
		let done = false;
		const observers = [];
		const finish = () => {
			if (done) return;
			done = true;
			for (const ob of observers) try {
				ob.disconnect();
			} catch {}
			clearTimeout(tid);
			resolve();
		};
		const onMut = () => {
			if (shallowSinkPresent(el)) finish();
		};
		const watch = (root) => {
			const mo = new MutationObserver(onMut);
			mo.observe(root, {
				childList: true,
				subtree: true
			});
			observers.push(mo);
		};
		watch(el);
		if (el.shadowRoot) watch(el.shadowRoot);
		const tid = setTimeout(finish, timeoutMs);
		onMut();
	});
}
async function waitRunningSubtreeAnimations(view, hangMs = ANIM_CAP_DEFAULT_MS) {
	const el = getViewHTMLElement(view);
	if (!el?.isConnected) return;
	try {
		const getAnims = typeof el.getAnimations === "function" ? el.getAnimations.bind(el) : null;
		const anims = getAnims ? getAnims({ subtree: true }).filter((a) => a.playState === "running") : [];
		if (anims.length === 0) return;
		await Promise.race([Promise.all(anims.map((a) => typeof a?.finished?.then === "function" ? a.finished.catch(() => void 0) : Promise.resolve())), new Promise((resolve) => setTimeout(resolve, hangMs))]);
	} catch {}
}
/** Full settle pipeline before `handleMessage` on HTMLElement-backed hosts. */
async function settleIngressTargetBeforeDelivery(view, message, mappedType) {
	const el = getViewHTMLElement(view);
	const needSink = needsRenderableSinkWait(mappedType, message);
	if (Boolean(el?.isConnected && (!needSink || shallowSinkPresent(el)))) {
		await quickPaintFence();
		await waitRunningSubtreeAnimations(view, ANIM_CAP_HOT_PATH_MS);
		return;
	}
	await stepPaintFenceModerate();
	await waitUntilViewConnectedToDocument(view, MO_CONNECTED_MS);
	if (needSink) await waitForRenderableSinkMounted(view, MO_SINK_MS);
	await waitRunningSubtreeAnimations(view, ANIM_CAP_DEFAULT_MS);
	await quickPaintFence();
}
var ingressDeliveryChains = /* @__PURE__ */ new WeakMap();
/** Serialize ingress bursts per concrete View identity (HTMLElement instance). */
function scheduleSerialViewIngressDelivery(view, task) {
	const next = (ingressDeliveryChains.get(view) ?? Promise.resolve()).then(() => task()).catch((err) => {
		console.warn("[ViewIngress] delivery failed:", view?.id, err);
	});
	ingressDeliveryChains.set(view, next);
	return next;
}
//#endregion
//#region ../../modules/projects/subsystem/src/core/view-ingress-validation.ts
var MAX_DIRECT_FILE_BYTES = 50331648;
/** Types that must carry at least one substantive body carrier (file, blob, text, or url). */
var TYPES_REQUIRING_BODY = new Set([
	"content-load",
	"content-view",
	"markdown-content",
	"content-share",
	"content-attach",
	"file-attach"
].map((s) => s.toLowerCase()));
function asDataRecord(message) {
	const d = message.data;
	return d && typeof d === "object" && !Array.isArray(d) ? d : {};
}
function hasFileLike(v) {
	return typeof File !== "undefined" && v instanceof File || typeof Blob !== "undefined" && v instanceof Blob;
}
function carrierPresent(data) {
	if (hasFileLike(data.file) || hasFileLike(data.blob)) return true;
	const files = data.files;
	if (Array.isArray(files) && files.some((x) => hasFileLike(x))) return true;
	if (Number(data.fileCount) > 0) return true;
	if (String(data.path ?? data.into ?? "").trim().length > 0) return true;
	if (String(data.text ?? data.content ?? "").trim().length > 0) return true;
	return String(data.url ?? "").trim().length > 0;
}
/**
* Drop structurally empty envelopes before shell settle / handleMessage (noise from replays).
*/
function validateIngressBeforeViewHandle(message, mappedType) {
	const mt = String(mappedType || "").toLowerCase();
	if (!TYPES_REQUIRING_BODY.has(mt)) return { ok: true };
	const data = asDataRecord(message);
	if (!carrierPresent(data)) return {
		ok: false,
		reason: "missing-body-carrier"
	};
	const f = data.file;
	if (typeof File !== "undefined" && f instanceof File && f.size > MAX_DIRECT_FILE_BYTES) return {
		ok: false,
		reason: `file-too-large>${MAX_DIRECT_FILE_BYTES}`
	};
	if (Array.isArray(data.files)) {
		for (const x of data.files) if (typeof File !== "undefined" && x instanceof File && x.size > MAX_DIRECT_FILE_BYTES) return {
			ok: false,
			reason: `files-array-too-large>${MAX_DIRECT_FILE_BYTES}`
		};
	}
	return { ok: true };
}
/**
* After `File#text()` / network read: refuse obvious binary garbage mis-tagged as markdown.
* WHY: avoids blanking the viewer with mojibake or PDF bytes when MIME/name were wrong.
*/
function textIngressLooksCorrupt(text) {
	if (!text || text.length === 0) return false;
	const cap = Math.min(text.length, 16384);
	let nul = 0;
	let control = 0;
	for (let i = 0; i < cap; i++) {
		const c = text.charCodeAt(i);
		if (c === 0) nul++;
		if (c < 32 && c !== 9 && c !== 10 && c !== 13) control++;
	}
	if (nul > 2) return true;
	if (control / cap > .02 && text.length < 65536) return true;
	const head = text.slice(0, 512).trimStart();
	if (head.startsWith("%PDF")) return true;
	if (head.startsWith("PK")) return true;
	return false;
}
/**
* Pick authoritative file for staged transfers: optional hint match, then text-like, then markdown extension.
*/
function pickAuthoritativeTransferFiles(files, opts) {
	const list = files.filter((f) => f instanceof File);
	if (list.length === 0) return null;
	const hint = (opts.hintFilename || "").trim().toLowerCase();
	if (hint) {
		const byHint = list.find((f) => String(f.name || "").trim().toLowerCase() === hint);
		if (byHint) return byHint;
		const partial = list.find((f) => String(f.name || "").trim().toLowerCase().endsWith(hint));
		if (partial) return partial;
	}
	const texty = list.find((f) => opts.isTextLike(f));
	if (texty) return texty;
	return list.find((f) => /\.(md|markdown|mdown|mkdn|mkd)(?:$|\?)/i.test(f.name || "")) ?? list[0] ?? null;
}
function validateReadableFileForIngress(file) {
	if (!(file instanceof File)) return {
		ok: false,
		reason: "not-a-file"
	};
	if (file.size > MAX_DIRECT_FILE_BYTES) return {
		ok: false,
		reason: "file-too-large"
	};
	return { ok: true };
}
//#endregion
//#region ../CWSP-document/src/shared/routing/pwa/sw-cache.ts
var originHint = () => {
	try {
		const origin = globalThis.location?.origin;
		if (origin) return origin;
	} catch {}
	return "https://localhost";
};
var toCacheRequestInfo = (requestLike) => {
	if (!requestLike) return void 0;
	return requestLike instanceof URL ? requestLike.toString() : requestLike;
};
var cacheKeyString = (request) => {
	if (typeof request === "string") return request;
	if (request instanceof Request) return request.url;
	return "";
};
/**
* Cache#match rejects blob:/data:/non-GET. chrome-extension: is valid in MV3.
* Relative paths (`/share-target-data`) resolve against the worker origin.
*/
var isCacheApiKey = (request) => {
	if (request instanceof Request && String(request.method || "GET").toUpperCase() !== "GET") return false;
	const raw = cacheKeyString(request);
	if (!raw) return false;
	try {
		const protocol = new URL(raw, originHint()).protocol;
		return protocol === "http:" || protocol === "https:" || protocol === "chrome-extension:" || protocol === "moz-extension:";
	} catch {
		return raw.startsWith("/");
	}
};
var asMatchKey = (request) => {
	if (typeof request === "string") return request;
	if (typeof Request !== "undefined" && request instanceof Request) return request;
};
var cachesApi = () => {
	try {
		return globalThis.caches || null;
	} catch {
		return null;
	}
};
var safeCacheOpen = async (name) => {
	const store = cachesApi();
	if (!store || typeof store.open !== "function") return null;
	try {
		return await store.open(name);
	} catch {
		return null;
	}
};
var safeCacheMatch = async (cache, requestLike) => {
	const request = toCacheRequestInfo(requestLike);
	if (!cache || !request) return void 0;
	const key = asMatchKey(request);
	if (!key || !isCacheApiKey(key)) return void 0;
	const match = cache.match;
	if (typeof match !== "function") return void 0;
	try {
		return await match.call(cache, key) ?? void 0;
	} catch (error) {
		console.warn("[SW] Cache.match failed:", request, error);
		return;
	}
};
var safeCachePut = async (cache, requestLike, response) => {
	const request = toCacheRequestInfo(requestLike);
	if (!cache || !request || typeof cache.put !== "function") return false;
	const key = asMatchKey(request);
	if (!key || !isCacheApiKey(key)) return false;
	try {
		await cache.put(key, response);
		return true;
	} catch (error) {
		console.warn("[SW] Cache.put failed:", request, error);
		return false;
	}
};
var safeCacheDelete = async (cache, requestLike) => {
	const request = toCacheRequestInfo(requestLike);
	if (!cache || !request || typeof cache.delete !== "function") return false;
	try {
		return await cache.delete(request);
	} catch {
		return false;
	}
};
//#endregion
//#region ../CWSP-document/src/shared/routing/channel/ShareTargetGateway.ts
var SHARE_CACHE_NAME = "share-target-data";
var SHARE_CACHE_KEY = "/share-target-data";
var SHARE_FILES_MANIFEST_KEY = "/share-target-files";
var SHARE_FILE_PREFIX = "/share-target-file/";
/** Persist the last share-target payload so the app can recover it after navigation or cold start. */
var storeShareTargetPayloadToCache = async (payload) => {
	const files = Array.isArray(payload.files) ? payload.files : [];
	const meta = payload.meta ?? {};
	try {
		const cache = await safeCacheOpen(SHARE_CACHE_NAME);
		if (!cache) return false;
		const timestamp = Number(meta?.timestamp) || Date.now();
		await safeCachePut(cache, SHARE_CACHE_KEY, new Response(JSON.stringify({
			...meta,
			title: meta?.title,
			text: meta?.text,
			url: meta?.url,
			sharedUrl: meta?.sharedUrl,
			source: meta?.source || "share-target",
			route: meta?.route || meta?.source || "share-target",
			timestamp,
			fileCount: files.length,
			imageCount: files.filter((f) => (f?.type || "").toLowerCase().startsWith("image/")).length
		}), { headers: { "Content-Type": "application/json" } }));
		const fileManifest = [];
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const key = `${SHARE_FILE_PREFIX}${timestamp}-${i}`;
			const headers = new Headers();
			headers.set("Content-Type", file.type || "application/octet-stream");
			headers.set("X-File-Name", encodeURIComponent(file.name || `file-${i}`));
			headers.set("X-File-Size", String(file.size || 0));
			headers.set("X-File-LastModified", String(file.lastModified ?? 0));
			await safeCachePut(cache, key, new Response(file, { headers }));
			fileManifest.push({
				key,
				name: file.name || `file-${i}`,
				type: file.type || "application/octet-stream",
				size: file.size || 0,
				lastModified: file.lastModified ?? void 0
			});
		}
		await safeCachePut(cache, SHARE_FILES_MANIFEST_KEY, new Response(JSON.stringify({
			files: fileManifest,
			timestamp
		}), { headers: { "Content-Type": "application/json" } }));
		return true;
	} catch (error) {
		console.warn("[ShareTargetGateway] Failed to store payload to cache:", error);
		return false;
	}
};
/**
* Rehydrate the cached share-target payload and optionally clear the consumed
* cache entries so they are not replayed on the next app load.
*/
var consumeCachedShareTargetPayload = async (opts = {}) => {
	const clear = opts.clear !== false;
	try {
		const cache = await safeCacheOpen(SHARE_CACHE_NAME);
		if (!cache) return null;
		const metaResp = await safeCacheMatch(cache, SHARE_CACHE_KEY);
		const manifestResp = await safeCacheMatch(cache, SHARE_FILES_MANIFEST_KEY);
		if (!metaResp && !manifestResp) return null;
		const meta = metaResp ? await metaResp.json().catch(() => null) : null;
		const manifest = manifestResp ? await manifestResp.json().catch(() => null) : null;
		const fileMeta = Array.isArray(manifest?.files) ? manifest.files : [];
		const files = [];
		for (const fm of fileMeta) {
			const fileKey = typeof fm?.key === "string" ? fm.key.trim() : String(fm?.key ?? "").trim();
			if (!fileKey) continue;
			const response = await safeCacheMatch(cache, fileKey);
			if (!response) continue;
			const blob = await response.blob();
			files.push(new File([blob], fm.name || "shared-file", {
				type: fm.type || blob.type || "application/octet-stream",
				lastModified: Number(fm.lastModified) || Date.now()
			}));
		}
		if (clear) {
			await safeCacheDelete(cache, SHARE_CACHE_KEY);
			await safeCacheDelete(cache, SHARE_FILES_MANIFEST_KEY);
			for (const fm of fileMeta) if (fm?.key) await safeCacheDelete(cache, fm.key);
		}
		return {
			meta: meta || {},
			files,
			fileMeta
		};
	} catch (error) {
		console.warn("[ShareTargetGateway] Failed to consume cached payload:", error);
		return null;
	}
};
/**
* Convert the staged cache payload back into a share/launch transfer object that
* the foreground pipeline can route without caring whether the ingress was
* share-target, launch-queue, or another staged producer.
*/
var buildShareDataFromCachedPayload = (payload) => {
	const meta = payload?.meta || {};
	const files = Array.isArray(payload?.files) ? payload.files : [];
	const fileMeta = Array.isArray(payload?.fileMeta) ? payload.fileMeta : [];
	const manifestName = typeof fileMeta[0]?.name === "string" && fileMeta[0].name.trim().length > 0 ? fileMeta[0].name.trim() : void 0;
	const rawHint = meta.hint;
	const baseHint = rawHint && typeof rawHint === "object" && !Array.isArray(rawHint) ? { ...rawHint } : {};
	let hintOut = Object.keys(baseHint).length > 0 ? { ...baseHint } : void 0;
	if (manifestName && !files.length) {
		if (!(typeof baseHint.filename === "string" ? String(baseHint.filename).trim() : "")) hintOut = {
			...hintOut || baseHint,
			filename: manifestName
		};
	}
	const out = {
		...meta,
		title: typeof meta.title === "string" ? meta.title : void 0,
		text: typeof meta.text === "string" ? meta.text : void 0,
		url: typeof meta.url === "string" ? meta.url : void 0,
		sharedUrl: typeof meta.sharedUrl === "string" ? meta.sharedUrl : void 0,
		source: typeof meta.source === "string" ? meta.source : "share-target",
		route: typeof meta.route === "string" ? meta.route : typeof meta.source === "string" ? meta.source : "share-target",
		timestamp: Number(meta.timestamp || Date.now()),
		files,
		fileCount: files.length || Number(meta.fileCount || 0),
		imageCount: Number(meta.imageCount || files.filter((file) => (file?.type || "").toLowerCase().startsWith("image/")).length)
	};
	if (hintOut !== void 0) out.hint = hintOut;
	return out;
};
//#endregion
//#region ../CWSP-document/src/shared/routing/core/channel-mixin.ts
/**
* Burst opens (recent list, launch queue replay): supersede older queued work so only the latest
* payload pays settle + paint (serial queue still orders; skipped tasks exit cheaply).
*/
var ingressSupersedeGeneration = /* @__PURE__ */ new WeakMap();
var bumpIngressGeneration = (view) => {
	const next = (ingressSupersedeGeneration.get(view) ?? 0) + 1;
	ingressSupersedeGeneration.set(view, next);
	return next;
};
/** Mirrors {@link dispatchViewTransfer} + BroadcastChannel can deliver the same ingress twice; ReplayGuard only covers the manager path. */
var recentViewIngressByMessageId = /* @__PURE__ */ new Map();
var INGRESS_DEDUP_MS = 600;
/** Attached to routed view messages so views can discard stale async work after `await` (file read, fetch). */
var UNIFIED_INGRESS_STAMP_META = "__ingressStamp";
/** True when newer ingress has bumped the counter vs this delivery's stamp (`handleMessage` should no-op). */
function ingressStampWasSuperseded(view, stamp) {
	if (typeof stamp !== "number" || !Number.isFinite(stamp)) return false;
	return (ingressSupersedeGeneration.get(view) ?? 0) !== stamp;
}
function stampMappedMessageForIngressDelivery(mapped, generation) {
	const prevMeta = mapped.metadata && typeof mapped.metadata === "object" && !Array.isArray(mapped.metadata) ? mapped.metadata : {};
	return {
		...mapped,
		metadata: {
			...prevMeta,
			[UNIFIED_INGRESS_STAMP_META]: generation
		}
	};
}
var pruneViewIngressDedup = (now) => {
	for (const [k, t] of recentViewIngressByMessageId) if (now - t > INGRESS_DEDUP_MS) recentViewIngressByMessageId.delete(k);
};
var deliverUnifiedMessageToView = async (view, message) => {
	const mid = typeof message.id === "string" ? message.id.trim() : "";
	if (mid) {
		const dest = normalizeViewId(inferViewDestination(String(view.id || "")));
		const now = Date.now();
		pruneViewIngressDedup(now);
		const dedupKey = `${dest}::${mid}`;
		const prev = recentViewIngressByMessageId.get(dedupKey);
		if (prev !== void 0 && now - prev < INGRESS_DEDUP_MS) return;
		recentViewIngressByMessageId.set(dedupKey, now);
	}
	const mapped = mapUnifiedMessageToView(view, message);
	if (!mapped) return;
	const ingressCheck = validateIngressBeforeViewHandle(message, mapped.type);
	if (!ingressCheck.ok) {
		console.warn("[ViewIngress] Skipped malformed envelope:", ingressCheck.reason, mapped.type);
		return;
	}
	const generation = bumpIngressGeneration(view);
	await scheduleSerialViewIngressDelivery(view, async () => {
		if (ingressSupersedeGeneration.get(view) !== generation) return;
		if (shouldDeferUnifiedIngressUntilStable(message, mapped.type)) await settleIngressTargetBeforeDelivery(view, message, mapped.type);
		if (ingressSupersedeGeneration.get(view) !== generation) return;
		await view.handleMessage?.(stampMappedMessageForIngressDelivery(mapped, generation));
	});
};
function bindViewReceiveChannel(view, options = {}) {
	if (!view.handleMessage) return () => {};
	const destination = options.destination || inferViewDestination(String(view.id || ""));
	const componentId = options.componentId || `view:${view.id}`;
	const receiveDestinations = getDestinationAliases(destination);
	const handler = {
		canHandle: (message) => matchesDestination(message.destination, destination),
		handle: async (message) => {
			await deliverUnifiedMessageToView(view, message);
		}
	};
	const pendingSeen = /* @__PURE__ */ new Set();
	for (const alias of receiveDestinations) {
		const aliasComponentId = `${componentId}:${alias}`;
		registerComponent(aliasComponentId, alias);
		registerHandler(alias, handler);
		const pending = initializeComponent(aliasComponentId);
		if (pending.length > 0) for (const message of pending) {
			if (pendingSeen.has(message.id)) continue;
			pendingSeen.add(message.id);
			handler.handle(message);
		}
	}
	const viewChannelCleanup = subscribeViewChannel(normalizeViewId(destination), (event) => {
		const payload = event.data;
		if (!payload || typeof payload !== "object") return;
		if (payload.type === "view-transfer" && payload.message && typeof payload.message === "object") {
			deliverUnifiedMessageToView(view, toUnifiedInteropMessage(payload.message));
			return;
		}
		if (payload.type === "view-post") {
			const viewId = normalizeViewId(payload.viewId);
			if (viewId !== normalizeViewId(String(view.id || destination))) return;
			const vm = {
				id: typeof payload.id === "string" ? String(payload.id) : crypto.randomUUID(),
				type: "view-post",
				destination: viewId,
				source: "view-channel",
				data: {
					bodyText: String(payload.bodyText || ""),
					contentType: String(payload.contentType || ""),
					viewId
				},
				metadata: {
					source: "view-channel",
					destination: viewId
				}
			};
			const generation = bumpIngressGeneration(view);
			scheduleSerialViewIngressDelivery(view, async () => {
				if (ingressSupersedeGeneration.get(view) !== generation) return;
				if (shouldDeferUnifiedIngressUntilStable(vm, "view-post")) await settleIngressTargetBeforeDelivery(view, vm, "view-post");
				if (ingressSupersedeGeneration.get(view) !== generation) return;
				await view.handleMessage?.(stampMappedMessageForIngressDelivery({
					type: "view-post",
					data: {
						bodyText: String(payload.bodyText || ""),
						contentType: String(payload.contentType || ""),
						viewId
					},
					metadata: vm.metadata
				}, generation));
			});
		}
	});
	return () => {
		for (const alias of receiveDestinations) unregisterHandler(alias, handler);
		viewChannelCleanup();
	};
}
//#endregion
//#region ../CWSP-document/src/shared/routing/core/implicit-view-bridge.ts
/** Narrow structural check — imperative APIs (`handleMessage`, `addFiles`, …) stay on the element. */
function isImplicitViewMessagingHost(node) {
	if (!node || typeof node !== "object") return false;
	const el = node;
	return typeof el.handleMessage === "function" && typeof el.id === "string" && el.id.trim().length > 0;
}
var STAGED_UNIFIED_SELECTOR = "[data-cw-unified-pending], [data-cw-unified-mail], [data-cw-unified-defer-flush]";
function parseJsonObject(raw) {
	if (!raw?.trim()) return null;
	try {
		const v = JSON.parse(raw);
		return v && typeof v === "object" ? v : null;
	} catch {
		return null;
	}
}
function buildUnifiedMessageFromStaging(rec) {
	const destination = normalizeDestination(String(rec.destination ?? "")) || String(rec.destination ?? "").trim();
	if (!destination) return null;
	return {
		id: typeof rec.id === "string" ? rec.id : crypto.randomUUID(),
		type: String(rec.type || "content-share"),
		source: typeof rec.source === "string" ? rec.source : "dom-staged-unified",
		destination,
		contentType: typeof rec.contentType === "string" ? rec.contentType : void 0,
		data: rec.data ?? rec.payload ?? {},
		metadata: {
			timestamp: Date.now(),
			...typeof rec.metadata === "object" && rec.metadata ? rec.metadata : {}
		}
	};
}
function readDeferFlushDestination(el) {
	const raw = el.getAttribute("data-cw-unified-defer-flush");
	if (!raw?.trim()) return null;
	const trimmed = raw.trim();
	if (trimmed.startsWith("{")) {
		const d = parseJsonObject(trimmed)?.destination;
		return typeof d === "string" ? d : null;
	}
	return trimmed;
}
function consumeDeferFlush(el) {
	const destRaw = readDeferFlushDestination(el);
	if (!destRaw) return;
	const dest = normalizeDestination(destRaw) || normalizeViewId(destRaw);
	replayQueuedMessagesForDestination(dest).catch(() => void 0);
	el.removeAttribute("data-cw-unified-defer-flush");
}
function consumePending(el) {
	const rec = parseJsonObject(el.getAttribute("data-cw-unified-pending"));
	if (!rec) return;
	const msg = buildUnifiedMessageFromStaging(rec);
	if (!msg?.destination) return;
	enqueuePendingMessage(msg.destination, msg);
	el.removeAttribute("data-cw-unified-pending");
}
function consumeMail(el) {
	const rec = parseJsonObject(el.getAttribute("data-cw-unified-mail"));
	if (!rec) return;
	const destination = normalizeDestination(String(rec.destination || "")) || String(rec.destination || "").trim();
	if (!destination) return;
	sendProtocolMessage({
		type: String(rec.type || "dispatch"),
		destination,
		source: typeof rec.source === "string" ? rec.source : "dom-staged-mail",
		data: rec.data ?? rec.payload ?? {},
		contentType: typeof rec.contentType === "string" ? rec.contentType : void 0,
		metadata: typeof rec.metadata === "object" && rec.metadata ? rec.metadata : {},
		purpose: Array.isArray(rec.purpose) ? rec.purpose : typeof rec.purpose === "string" ? [rec.purpose] : ["mail", "deliver"],
		op: typeof rec.op === "string" ? rec.op : "deliver",
		protocol: typeof rec.protocol === "string" ? rec.protocol : void 0
	}).catch(() => void 0);
	el.removeAttribute("data-cw-unified-mail");
}
/**
* Applies staged envelope markers inside `scope` (scope element + subtree via querySelectorAll).
* Intended for MutationObserver added subtrees and shell-injected payloads.
*/
function processStagedUnifiedMarkers(scope) {
	const matched = /* @__PURE__ */ new Set();
	if (scope.matches("[data-cw-unified-pending], [data-cw-unified-mail], [data-cw-unified-defer-flush]")) matched.add(scope);
	for (const n of scope.querySelectorAll(STAGED_UNIFIED_SELECTOR)) matched.add(n);
	for (const el of matched) {
		if (!el.isConnected) continue;
		consumeDeferFlush(el);
		consumePending(el);
		consumeMail(el);
	}
}
function flushDeferredTransportForView(view, explicitDestination) {
	const dest = explicitDestination || inferViewDestination(String(view.id || ""));
	const aliases = getDestinationAliases(dest);
	const targets = /* @__PURE__ */ new Set();
	for (const x of [dest, ...aliases]) {
		const n = normalizeDestination(x) || String(x || "").trim();
		if (n) targets.add(normalizeViewId(n));
	}
	(async () => {
		for (const t of targets) try {
			await replayQueuedMessagesForDestination(t);
		} catch {}
	})();
}
var cleanupByView = /* @__PURE__ */ new WeakMap();
/** Last bound element per canonical destination — avoids duplicate UnifiedMessaging handlers. */
var activeHostByDestination = /* @__PURE__ */ new Map();
function sealCleanup(view, destinationKey, inner) {
	let disposed = false;
	return () => {
		if (disposed) return;
		disposed = true;
		inner();
		cleanupByView.delete(view);
		if (activeHostByDestination.get(destinationKey) === view) activeHostByDestination.delete(destinationKey);
	};
}
/**
* Single receive-channel binding per live view instance; replaces any prior binding for the same destination id.
* Safe to call from {@link ViewRegistry.load} and from DOM discovery.
*/
function attachImplicitViewMessaging(view, options = {}) {
	if (!view.handleMessage) return () => {};
	const existing = cleanupByView.get(view);
	if (existing) return existing;
	const destination = options.destination || inferViewDestination(String(view.id || ""));
	const destinationKey = normalizeViewId(destination);
	const displaced = activeHostByDestination.get(destinationKey);
	if (displaced && displaced !== view) cleanupByView.get(displaced)?.();
	const inner = bindViewReceiveChannel(view, {
		...options,
		destination
	});
	flushDeferredTransportForView(view, destination);
	const cleanup = sealCleanup(view, destinationKey, inner);
	cleanupByView.set(view, cleanup);
	activeHostByDestination.set(destinationKey, view);
	return cleanup;
}
function detachImplicitViewMessaging(view) {
	cleanupByView.get(view)?.();
}
function walkSubtreeNodes(entry, visit) {
	const stack = [entry];
	while (stack.length) {
		const cur = stack.pop();
		if (cur.nodeType === Node.ELEMENT_NODE) {
			const el = cur;
			visit(el);
			const sr = el.shadowRoot;
			if (sr) for (let i = sr.childNodes.length - 1; i >= 0; i--) stack.push(sr.childNodes[i]);
			for (let i = el.childNodes.length - 1; i >= 0; i--) stack.push(el.childNodes[i]);
		}
	}
}
function observeMutationRoot(observer, observed, node) {
	if (observed.has(node)) return;
	observed.add(node);
	observer.observe(node, {
		childList: true,
		subtree: true
	});
}
/**
* Starts observing DOM mutations; binds messaging hosts when connected and tears down when disconnected.
*/
function startImplicitViewMessagingBridge(options = {}) {
	const root = options.root instanceof Document ? options.root.documentElement : options.root ?? document.documentElement;
	if (!root || typeof MutationObserver === "undefined") return () => {};
	const observedRoots = /* @__PURE__ */ new WeakSet();
	let scanConnect = () => {};
	const scanDisconnect = (node) => {
		walkSubtreeNodes(node, (el) => {
			if (!isImplicitViewMessagingHost(el)) return;
			if (!el.isConnected) detachImplicitViewMessaging(el);
		});
	};
	const observer = new MutationObserver((records) => {
		for (const rec of records) {
			rec.addedNodes.forEach(scanConnect);
			rec.removedNodes.forEach(scanDisconnect);
		}
	});
	scanConnect = (node) => {
		if (node.nodeType === Node.ELEMENT_NODE) {
			const host = node;
			if (host.isConnected) processStagedUnifiedMarkers(host);
		}
		walkSubtreeNodes(node, (el) => {
			if (el.shadowRoot) observeMutationRoot(observer, observedRoots, el.shadowRoot);
			if (!el.isConnected || !isImplicitViewMessagingHost(el)) return;
			attachImplicitViewMessaging(el);
		});
	};
	observeMutationRoot(observer, observedRoots, root);
	scanConnect(root);
	return () => {
		observer.disconnect();
		walkSubtreeNodes(root, (el) => {
			if (isImplicitViewMessagingHost(el)) detachImplicitViewMessaging(el);
		});
	};
}
//#endregion
//#region ../CWSP-document/src/shared/routing/core/views.ts
var VIEW_ENABLED_VIEWER = "viewer";
var VIEW_ENABLED_EDITOR = "editor";
var VIEW_ENABLED_WORKCENTER = "workcenter";
var VIEW_ENABLED_EXPLORER = "explorer";
var VIEW_ENABLED_SETTINGS = "settings";
var VIEW_ENABLED_HISTORY = "history";
var VIEW_ENABLED_HOME = "home";
var VIEW_ENABLED_PRINT = "print";
/** CWSP connection / probe diagnostics — primary Capacitor (CWSAndroid) home view. */
var VIEW_ENABLED_NETWORK = "network";
var DEFAULT_VIEW_ID = "viewer";
var VIEW_FLAGS = {
	network: VIEW_ENABLED_NETWORK,
	settings: VIEW_ENABLED_SETTINGS,
	viewer: VIEW_ENABLED_VIEWER,
	editor: VIEW_ENABLED_EDITOR,
	workcenter: VIEW_ENABLED_WORKCENTER,
	explorer: VIEW_ENABLED_EXPLORER,
	history: VIEW_ENABLED_HISTORY,
	home: VIEW_ENABLED_HOME,
	print: VIEW_ENABLED_PRINT
};
/**
* Optional per-build allowlist: `VITE_ENABLED_VIEWS="network,settings"` restricts
* which views are enabled (e.g. the Capacitor CWSAndroid shell: Network + Settings
* only). When unset, all flagged views are enabled. Read from Vite env first,
* then Node env, guarded for non-bundled (tsx) contexts.
*/
var readEnabledViewsAllowlist = () => {
	let raw = "";
	try {
		const search = globalThis?.location?.search;
		if (search) {
			const params = new URLSearchParams(search);
			raw = String(params.get("views") || params.get("enabledViews") || "");
		}
	} catch {}
	if (!raw) try {
		raw = String(globalThis?.localStorage?.getItem?.("rs-enabled-views") ?? "");
	} catch {}
	if (!raw) try {
		raw = String("minimal,explorer,settings,history");
	} catch {}
	if (!raw) try {
		raw = String({}.VITE_ENABLED_VIEWS ?? "");
	} catch {}
	const list = raw.split(/[\s,;]+/).map((entry) => entry.trim().toLowerCase()).filter(Boolean);
	if (!list.length) return null;
	list.push("settings");
	try {
		const search = globalThis?.location?.search;
		if (search && new URLSearchParams(search).get("views")) globalThis?.localStorage?.setItem?.("rs-enabled-views", Array.from(new Set(list)).join(","));
	} catch {}
	return new Set(list);
};
var ENABLED_VIEWS_ALLOWLIST = readEnabledViewsAllowlist();
/**
* Build-time gate: the host bundler (CWSP-shell Vite) replaces `__RS_VIEW_<ID>__`
* with a boolean from `VITE_ENABLED_VIEWS`. `typeof` is safe for undeclared
* globals (returns "undefined") so non-bundled/tsx contexts fall back to enabled.
*/
var BUILD_VIEW_FLAGS = {
	viewer: false,
	editor: false,
	workcenter: false,
	explorer: true,
	settings: true,
	history: true,
	home: false,
	print: false,
	network: false
};
var buildAllows = (viewId) => BUILD_VIEW_FLAGS[String(viewId).toLowerCase()] !== false;
var runtimeAllows = (viewId) => !ENABLED_VIEWS_ALLOWLIST || ENABLED_VIEWS_ALLOWLIST.has(String(viewId).toLowerCase());
var isViewAllowed = (viewId) => buildAllows(viewId) && runtimeAllows(viewId);
var ENABLED_VIEW_IDS = Object.entries(VIEW_FLAGS).filter(([viewId, enabled]) => Boolean(enabled) && isViewAllowed(viewId) && isViewLocalToSurface(viewId)).map(([viewId]) => viewId);
var isEnabledView = (viewId) => {
	return Boolean(VIEW_FLAGS[viewId]) && isViewAllowed(viewId) && isViewLocalToSurface(viewId);
};
var pickEnabledView = (preferred = DEFAULT_VIEW_ID, fallback = DEFAULT_VIEW_ID) => {
	if (isEnabledView(preferred)) return preferred;
	if (isEnabledView(fallback)) return fallback;
	if (ENABLED_VIEW_IDS.length > 0) return ENABLED_VIEW_IDS[0];
	return "viewer";
};
//#endregion
//#region ../CWSP-document/src/shared/routing/core/registry.ts
/**
* View factories usually return custom elements; some legacy modules return a plain
* object implementing `View` (render/lifecycle/id). Accept both for shell compatibility.
*/
function createWebComponentViewAdapter(viewInstance) {
	if (viewInstance instanceof HTMLElement) return viewInstance;
	const legacy = viewInstance;
	if (legacy && typeof legacy.render === "function" && typeof legacy.id === "string") return legacy;
	throw new Error("View factory must return an HTMLElement or a legacy view with render() and id");
}
/** Registry for shell modules plus the single live shell instances cached at runtime. */
var ShellRegistryClass = class {
	shells = /* @__PURE__ */ new Map();
	loadedShells = /* @__PURE__ */ new Map();
	/** COMPAT: `base` resolves to immersive chromeless module (`cw-shell-immersive`). */
	resolveShellRegistrationKey(id) {
		return id === "base" ? "immersive" : id;
	}
	/**
	* Register a shell
	*/
	register(registration) {
		this.shells.set(registration.id, registration);
	}
	/**
	* Get a shell registration
	*/
	get(id) {
		return this.shells.get(this.resolveShellRegistrationKey(id));
	}
	/**
	* Get all registered shells
	*/
	getAll() {
		return Array.from(this.shells.values());
	}
	/**
	* Load and instantiate a shell
	*/
	async load(id, container) {
		const resolved = this.resolveShellRegistrationKey(id);
		const cached = this.loadedShells.get(resolved);
		if (cached) return cached;
		const registration = this.shells.get(resolved);
		if (!registration) throw new Error(`Shell not found: ${resolved}`);
		const module = await registration.loader();
		const factory = module.default || module.createShell;
		if (typeof factory !== "function") throw new Error(`Invalid shell module: ${resolved}`);
		const shell = factory(container);
		this.loadedShells.set(resolved, shell);
		return shell;
	}
	/**
	* Unload a shell
	*/
	unload(id) {
		const resolved = this.resolveShellRegistrationKey(id);
		const shell = this.loadedShells.get(resolved);
		if (shell) {
			shell.unmount();
			this.loadedShells.delete(resolved);
		}
	}
	/**
	* Check if a shell is loaded
	*/
	isLoaded(id) {
		return this.loadedShells.has(this.resolveShellRegistrationKey(id));
	}
	/**
	* Get a loaded shell instance
	*/
	getLoaded(id) {
		return this.loadedShells.get(this.resolveShellRegistrationKey(id));
	}
};
var ShellRegistry = new ShellRegistryClass();
var ViewRegistry = new class ViewRegistryClass {
	/** COMPAT: Modules often default-export a CE class (`CwViewExplorer`) — must be invoked with `new`. */
	static isCustomElementClassCtor(fn) {
		if (typeof fn !== "function") return false;
		try {
			const proto = fn.prototype;
			return proto != null && typeof HTMLElement !== "undefined" && HTMLElement.prototype.isPrototypeOf(proto);
		} catch {
			return false;
		}
	}
	resolveViewFactory(module) {
		const candidates = [
			module?.default,
			module?.createView,
			module?.createAirpadView,
			module?.createWorkCenterView,
			module?.createViewerView,
			module?.createExplorerView,
			module?.createSettingsView,
			module?.createNetworkView,
			module?.createHistoryView,
			module?.createHomeView
		];
		for (const candidate of candidates) {
			if (typeof candidate !== "function") continue;
			if (ViewRegistryClass.isCustomElementClassCtor(candidate)) {
				const Ctor = candidate;
				return ((options) => new Ctor(options));
			}
			return candidate;
		}
		const values = Object.values(module || {});
		for (const value of values) if (typeof value === "function" && value.prototype && typeof value.prototype.render === "function") {
			const ViewClass = value;
			return (options) => new ViewClass(options);
		}
		return null;
	}
	views = /* @__PURE__ */ new Map();
	loadedViews = /* @__PURE__ */ new Map();
	viewReceiveCleanup = /* @__PURE__ */ new Map();
	/**
	* Register a view
	*/
	register(registration) {
		this.views.set(registration.id, registration);
	}
	/**
	* Get a view registration
	*/
	get(id) {
		return this.views.get(id);
	}
	/**
	* Get all registered views
	*/
	getAll() {
		return Array.from(this.views.values());
	}
	/**
	* Load and instantiate a view
	*/
	async load(id, options) {
		const cached = this.loadedViews.get(id);
		if (cached) return cached;
		const registration = this.views.get(id);
		if (!registration) throw new Error(`View not found: ${id}`);
		const module = await registration.loader();
		const factory = this.resolveViewFactory(module);
		if (!factory) throw new Error(`Invalid view module: ${id}`);
		const view = createWebComponentViewAdapter(await factory(options));
		const previousCleanup = this.viewReceiveCleanup.get(id);
		if (previousCleanup) {
			previousCleanup();
			this.viewReceiveCleanup.delete(id);
		}
		this.loadedViews.set(id, view);
		this.viewReceiveCleanup.set(id, attachImplicitViewMessaging(view, {
			destination: String(id),
			componentId: `view:${id}`
		}));
		return view;
	}
	/**
	* Unload a view (clear cache)
	*/
	unload(id) {
		const view = this.loadedViews.get(id);
		if (view?.lifecycle?.onUnmount) view.lifecycle.onUnmount();
		const receiveCleanup = this.viewReceiveCleanup.get(id);
		if (receiveCleanup) {
			receiveCleanup();
			this.viewReceiveCleanup.delete(id);
		}
		this.loadedViews.delete(id);
	}
	/**
	* Check if a view is loaded
	*/
	isLoaded(id) {
		return this.loadedViews.has(id);
	}
	/**
	* Get a loaded view instance
	*/
	getLoaded(id) {
		return this.loadedViews.get(id);
	}
	/**
	* Warm the dynamic import for a view module (no instance, no receive-channel bind).
	* Safe to call from idle prefetch; failures are ignored.
	*/
	prefetchModule(id) {
		const registration = this.views.get(id);
		if (!registration) return;
		registration.loader().catch(() => {});
	}
}();
/** Register the built-in shell modules that the boot/routing layer can request. */
function registerDefaultShells() {
	ShellRegistry.register({
		id: "immersive",
		name: "Immersive",
		description: "Chromeless immersive shell (standalone pages, extensions, embedded); legacy boot id `base` aliases here.",
		loader: () => __vitePreload(() => import("../chunks/src.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), import.meta.url)
	});
	ShellRegistry.register({
		id: "minimal",
		name: "Minimal",
		description: "Minimal toolbar-based navigation",
		loader: () => __vitePreload(() => import("../chunks/preview.js").then((n) => n.t), __vite__mapDeps([21,2,3,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), import.meta.url)
	});
	ShellRegistry.register({
		id: "content",
		name: "Content",
		description: "CRX content shell with overlay-focused layering",
		loader: () => __vitePreload(() => import("../chunks/src2.js"), __vite__mapDeps([22,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), import.meta.url)
	});
	ShellRegistry.register({
		id: "immersive",
		name: "Immersive",
		description: "Chromeless immersive host (extensions / embedded)",
		loader: () => __vitePreload(() => import("../chunks/src.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), import.meta.url)
	});
	ShellRegistry.register({
		id: "window",
		name: "Window",
		description: "Window-capable shell (multi-view)",
		loader: () => __vitePreload(() => import("../chunks/window.js"), __vite__mapDeps([23,24,3,10,2,11,12,13,14,1,4,5,6,25,7,8,9,15,16,17,18,19,20,26,27,28,29,30,31,32,21]), import.meta.url)
	});
	ShellRegistry.register({
		id: "tabbed",
		name: "Tabbed",
		description: "Tabbed window shell",
		loader: () => __vitePreload(() => import("../chunks/tabbed.js"), __vite__mapDeps([33,23,24,3,10,2,11,12,13,14,1,4,5,6,25,7,8,9,15,16,17,18,19,20,26,27,28,29,30,31,32,21]), import.meta.url)
	});
	ShellRegistry.register({
		id: "environment",
		name: "Environment",
		description: "Desktop/launcher shell: wallpaper, Speed Dial, taskbar, ui-window",
		loader: () => __vitePreload(() => import("../chunks/environment.js"), __vite__mapDeps([34,24,3,10,2,11,12,13,14,1,4,5,6,25,7,8,9,15,16,17,18,19,20,26,27,28,29,30,31,32]), import.meta.url)
	});
}
/** Register the built-in views that are enabled by current feature flags. */
function registerDefaultViews() {
	ViewRegistry.register({
		id: "viewer",
		name: "Viewer",
		icon: "eye",
		loader: () => __vitePreload(() => import("../chunks/src6.js"), __vite__mapDeps([35,8,2,3,9,10,11,12,13,14,15,16,17,18,1,4,5,6,28,32,36,37,38,39,40,41,42]), import.meta.url)
	});
	ViewRegistry.register({
		id: "workcenter",
		name: "Work Center",
		icon: "lightning",
		loader: () => __vitePreload(() => import("../com/app16.js").then((n) => n.t), __vite__mapDeps([43,2,8,12,3,38,39,44,45,46,11,47,9,10,13,14,15,16,17,18,1,4,5,6,48,26,27,28,30,25,29,31,32,41,42,49,50,51,52,53,54]), import.meta.url)
	});
	ViewRegistry.register({
		id: "settings",
		name: "Settings",
		icon: "gear",
		loader: () => __vitePreload(() => import("../shells/boot-history-base.js"), __vite__mapDeps([55,8,2,3,38,12,39,46,45,10,11,13,14,56,57,4,58,59,15,9,16,17,18,1,5,6,60,19,26,27,28,30,25,29,31,32,40,42,61,51,50,62,63]), import.meta.url)
	});
	ViewRegistry.register({
		id: "network",
		name: "Network",
		icon: "wifi-high",
		loader: () => __vitePreload(() => import("../chunks/src5.js"), __vite__mapDeps([64,10,2,11,12,13,14,15,9,3,16,8,17,18,1,4,5,6,65,63,57,56,58,39,59]), import.meta.url)
	});
	ViewRegistry.register({
		id: "history",
		name: "History",
		icon: "clock-counter-clockwise",
		loader: () => __vitePreload(() => import("../chunks/src4.js"), __vite__mapDeps([66,1,2,3,4,5,6,40,67]), import.meta.url)
	});
	ViewRegistry.register({
		id: "explorer",
		name: "Explorer",
		icon: "folder",
		loader: () => __vitePreload(() => import("../fest/veela3.js"), __vite__mapDeps([68,8,2,3,9,10,11,12,13,14,15,16,17,18,1,4,5,6,26,27,28,37,38,39,40]), import.meta.url)
	});
	ViewRegistry.register({
		id: "editor",
		name: "Editor",
		icon: "pencil",
		loader: () => __vitePreload(() => import("../chunks/src3.js"), __vite__mapDeps([69,8,2,1,3,4,5,6,36]), import.meta.url)
	});
	ViewRegistry.register({
		id: "home",
		name: "Home",
		icon: "house",
		loader: () => __vitePreload(() => import("../fest/veela4.js"), __vite__mapDeps([70,3,1,2,4,5,6,25,26,27,28,29,31,40,71]), import.meta.url)
	});
	ViewRegistry.register({
		id: "print",
		name: "Print",
		icon: "printer",
		loader: () => __vitePreload(() => import("../chunks/src6.js"), __vite__mapDeps([35,8,2,3,9,10,11,12,13,14,15,16,17,18,1,4,5,6,28,32,36,37,38,39,40,41,42]), import.meta.url)
	});
}
var defaultTheme = {
	id: "auto",
	name: "Auto",
	colorScheme: "auto"
};
var lightTheme = {
	id: "light",
	name: "Light",
	colorScheme: "light"
};
var darkTheme = {
	id: "dark",
	name: "Dark",
	colorScheme: "dark"
};
/**
* Populate both registries during boot before any shell or view is resolved.
*/
function initializeRegistries() {
	registerDefaultShells();
	registerDefaultViews();
}
//#endregion
//#region ../CWSP-document/src/shared/routing/core/layer-manager.ts
/**
* Unified layer hierarchy - ORDER MATTERS!
*
* Layers are declared in this order to ensure:
* 1. Reset/normalize come first (lowest specificity wins)
* 2. Tokens (CSS custom properties) are available early
* 3. Runtime provides base component styles
* 4. Shell styles can override runtime
* 5. View styles can override shell
* 6. Overrides (theme, print, a11y) win last
*/
var LAYER_HIERARCHY = [
	{
		name: "ux-normalize",
		category: "system",
		order: 0,
		description: "Veela normalize layer"
	},
	{
		name: "layer.reset",
		category: "system",
		order: 0,
		description: "CSS reset rules"
	},
	{
		name: "layer.normalize",
		category: "system",
		order: 10,
		description: "Normalize browser defaults"
	},
	{
		name: "tokens",
		category: "system",
		order: 20,
		description: "Legacy tokens layer"
	},
	{
		name: "ux-tokens",
		category: "system",
		order: 20,
		description: "Veela token layer"
	},
	{
		name: "layer.tokens",
		category: "system",
		order: 20,
		description: "CSS custom properties (variables)"
	},
	{
		name: "base",
		category: "system",
		order: 30,
		description: "Legacy base layer"
	},
	{
		name: "ux-base",
		category: "system",
		order: 30,
		description: "Veela base layer"
	},
	{
		name: "layout",
		category: "system",
		order: 40,
		description: "Legacy layout layer"
	},
	{
		name: "ux-layout",
		category: "system",
		order: 40,
		description: "Veela layout layer"
	},
	{
		name: "components",
		category: "system",
		order: 50,
		description: "Legacy components layer"
	},
	{
		name: "ux-components",
		category: "system",
		order: 50,
		description: "Veela components layer"
	},
	{
		name: "utilities",
		category: "system",
		order: 60,
		description: "Legacy utilities layer"
	},
	{
		name: "ux-utilities",
		category: "system",
		order: 60,
		description: "Veela utilities layer"
	},
	{
		name: "ux-theme",
		category: "system",
		order: 70,
		description: "Veela theme layer"
	},
	{
		name: "ux-overrides",
		category: "system",
		order: 80,
		description: "Veela overrides layer"
	},
	{
		name: "layer.properties.shell",
		category: "system",
		order: 30,
		description: "Shell context custom properties"
	},
	{
		name: "layer.properties.views",
		category: "system",
		order: 35,
		description: "View context custom properties"
	},
	{
		name: "layer.runtime.base",
		category: "runtime",
		order: 100,
		description: "Veela runtime base styles"
	},
	{
		name: "layer.runtime.components",
		category: "runtime",
		order: 110,
		description: "Reusable component styles"
	},
	{
		name: "layer.runtime.forms",
		category: "runtime",
		order: 115,
		description: "Form element base styles"
	},
	{
		name: "layer.runtime.utilities",
		category: "runtime",
		order: 120,
		description: "Utility classes"
	},
	{
		name: "layer.runtime.animations",
		category: "runtime",
		order: 130,
		description: "Keyframes and animation definitions"
	},
	{
		name: "layer.boot",
		category: "runtime",
		order: 140,
		description: "Boot/choice screen styles"
	},
	{
		name: "boot.tokens",
		category: "runtime",
		order: 142,
		description: "Boot tokens layer"
	},
	{
		name: "boot.base",
		category: "runtime",
		order: 144,
		description: "Boot base layer"
	},
	{
		name: "boot.components",
		category: "runtime",
		order: 146,
		description: "Boot components layer"
	},
	{
		name: "boot.responsive",
		category: "runtime",
		order: 148,
		description: "Boot responsive adjustments"
	},
	{
		name: "layer.shell.common",
		category: "shell",
		order: 200,
		description: "Shared shell styles"
	},
	{
		name: "shell.tokens",
		category: "shell",
		order: 202,
		description: "Legacy shell tokens"
	},
	{
		name: "shell.base",
		category: "shell",
		order: 204,
		description: "Legacy shell base"
	},
	{
		name: "shell.components",
		category: "shell",
		order: 206,
		description: "Legacy shell components"
	},
	{
		name: "shell.utilities",
		category: "shell",
		order: 208,
		description: "Legacy shell utilities"
	},
	{
		name: "shell.overrides",
		category: "shell",
		order: 209,
		description: "Legacy shell overrides"
	},
	{
		name: "layer.shell.raw",
		category: "shell",
		order: 210,
		description: "Raw shell (minimal)"
	},
	{
		name: "layer.shell.minimal",
		category: "shell",
		order: 220,
		description: "Minimal shell (toolbar navigation)"
	},
	{
		name: "layer.shell.minimal.layout",
		category: "shell",
		order: 222,
		description: "Minimal shell layout rules"
	},
	{
		name: "layer.shell.minimal.components",
		category: "shell",
		order: 224,
		description: "Minimal shell component styles"
	},
	{
		name: "layer.shell.window",
		category: "shell",
		order: 226,
		description: "Window shell (desktop/process frames)"
	},
	{
		name: "layer.shell.faint",
		category: "shell",
		order: 230,
		description: "Faint shell (tabbed sidebar)"
	},
	{
		name: "layer.shell.faint.layout",
		category: "shell",
		order: 232,
		description: "Faint shell layout"
	},
	{
		name: "layer.shell.faint.sidebar",
		category: "shell",
		order: 234,
		description: "Faint shell sidebar"
	},
	{
		name: "layer.shell.faint.toolbar",
		category: "shell",
		order: 236,
		description: "Faint shell toolbar"
	},
	{
		name: "layer.shell.faint.forms",
		category: "shell",
		order: 238,
		description: "Faint shell form components"
	},
	{
		name: "layer.view.common",
		category: "view",
		order: 300,
		description: "Shared view styles"
	},
	{
		name: "layer.view.viewer",
		category: "view",
		order: 310,
		description: "Markdown viewer"
	},
	{
		name: "layer.view.workcenter",
		category: "view",
		order: 320,
		description: "Work center (AI prompts)"
	},
	{
		name: "layer.view.workcenter.keyframes",
		category: "view",
		order: 322,
		description: "Work center animations"
	},
	{
		name: "view.workcenter",
		category: "view",
		order: 324,
		description: "Work center styles (legacy name)"
	},
	{
		name: "view.workcenter.animations",
		category: "view",
		order: 326,
		description: "Work center animations (legacy name)"
	},
	{
		name: "layer.view.settings",
		category: "view",
		order: 330,
		description: "Settings view"
	},
	{
		name: "layer.view.explorer",
		category: "view",
		order: 340,
		description: "File explorer"
	},
	{
		name: "layer.view.history",
		category: "view",
		order: 350,
		description: "History view"
	},
	{
		name: "layer.view.editor",
		category: "view",
		order: 360,
		description: "Editor view"
	},
	{
		name: "layer.view.editor.markdown",
		category: "view",
		order: 362,
		description: "Markdown editor sublayer"
	},
	{
		name: "layer.view.editor.quill",
		category: "view",
		order: 364,
		description: "Quill editor sublayer"
	},
	{
		name: "layer.view.home",
		category: "view",
		order: 380,
		description: "Home/landing view"
	},
	{
		name: "layer.view.print",
		category: "view",
		order: 390,
		description: "Print view"
	},
	{
		name: "view-explorer",
		category: "view",
		order: 392,
		description: "Explorer legacy layered scope"
	},
	{
		name: "view-transitions",
		category: "override",
		order: 850,
		description: "View Transition API named targets and keyframes"
	},
	{
		name: "layer.override.theme",
		category: "override",
		order: 900,
		description: "Theme customizations"
	},
	{
		name: "layer.override.print",
		category: "override",
		order: 910,
		description: "Print media styles"
	},
	{
		name: "layer.override.a11y",
		category: "override",
		order: 920,
		description: "Accessibility enhancements"
	}
];
var _initialized = false;
/**
* Initialize CSS layer order
*
* MUST be called before any other styles are loaded to ensure
* the cascade layer order is established correctly.
*
* This function is idempotent - calling it multiple times is safe.
*
* @example
* ```ts
* // In application entry point
* import { initializeLayers } from './shared/layer-manager';
*
* async function main() {
*     // Initialize layers FIRST
*     initializeLayers();
*
*     // Then load styles
*     await loadStyleSystem('vl-advanced');
*     // ...
* }
* ```
*/
function initializeLayers() {
	if (_initialized) {
		console.debug("[LayerManager] Already initialized");
		return;
	}
	if (typeof document === "undefined") {
		console.warn("[LayerManager] No document available (SSR context?)");
		return;
	}
	const layerNames = [...LAYER_HIERARCHY].sort((a, b) => a.order - b.order).map((l) => l.name);
	const layerRule = `@layer ${layerNames.join(", ")};`;
	const style = document.createElement("style");
	style.id = "css-layer-init";
	style.setAttribute("data-layer-manager", "true");
	style.textContent = layerRule;
	const head = document.head;
	head.insertBefore(style, head.firstChild);
	_initialized = true;
	console.log(`[LayerManager] Initialized ${layerNames.length} layers`);
}
//#endregion
//#region ../CWSP-document/src/shared/store/StateStorage.ts
/**
* Persistent UI/workspace state for the home speed-dial surface.
*
* This module owns the default shortcut catalog, conversion between persisted
* storage records and reactive UI state, and the metadata registry that keeps
* richer shortcut configuration separate from the compact visible item list.
*/
var STORAGE_KEY = "cw::workspace::speed-dial";
var META_STORAGE_KEY = `${STORAGE_KEY}::meta`;
var fallbackClone = (value) => {
	if (typeof structuredClone === "function") return structuredClone(safe(value));
	return JSOX.parse(JSOX.stringify(value));
};
var generateItemId = () => {
	if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
	return `sd-${Date.now().toString(36)}-${Math.floor(Math.random() * 1e3)}`;
};
var EXTERNAL_SHORTCUTS = [];
var DEFAULT_SPEED_DIAL_DATA = [...EXTERNAL_SHORTCUTS];
var splitDefaultEntries = (entries) => {
	const records = [];
	const metaEntries = [];
	entries.forEach((entry) => {
		const { meta, ...record } = entry;
		records.push(record);
		const normalizedMeta = {
			action: entry.action,
			...meta || {}
		};
		metaEntries.push([entry.id, normalizedMeta]);
	});
	return {
		records,
		metaEntries
	};
};
var { records: DEFAULT_SPEED_DIAL_RECORDS, metaEntries: DEFAULT_META_ENTRIES } = splitDefaultEntries(DEFAULT_SPEED_DIAL_DATA);
var legacyMetaBuffer = [];
/** Same Core Rail filter as fl.ui launcher-state — CRX chrome.storage must never rehydrate these. */
var CORE_RAIL_GRID_IDS = /* @__PURE__ */ new Set([
	"shortcut-explorer",
	"shortcut-settings",
	"shortcut-viewer",
	"shortcut-markdown",
	"explorer",
	"settings",
	"viewer",
	"markdown"
]);
var CORE_RAIL_GRID_VIEWS = /* @__PURE__ */ new Set([
	"explorer",
	"settings",
	"viewer",
	"markdown",
	"reader"
]);
var CORE_RAIL_GRID_LABELS = /* @__PURE__ */ new Set([
	"explorer",
	"settings",
	"markdown",
	"viewer"
]);
var isCoreRailPersistedEntry = (entry) => {
	const id = String(entry?.id || "").trim().toLowerCase();
	if (CORE_RAIL_GRID_IDS.has(id)) return true;
	const action = String(entry?.action || entry?.meta?.action || "open-view").trim().toLowerCase();
	if (action && action !== "open-view") return false;
	const view = String(entry?.meta?.view || "").trim().toLowerCase();
	if (view && CORE_RAIL_GRID_VIEWS.has(view)) return true;
	const label = String(entry?.label || "").trim().toLowerCase();
	return Boolean(label) && CORE_RAIL_GRID_LABELS.has(label);
};
var ensureCell = (cell) => {
	if (cell && Array.isArray(cell) && cell.length >= 2) return observe([Number(cell[0]) || 0, Number(cell[1]) || 0]);
	return observe([0, 0]);
};
var createMetaState = (meta = {}) => {
	return makeObjectAssignable(observe({
		action: meta.action || "open-view",
		view: meta.view || "",
		href: meta.href || "",
		description: meta.description || "",
		entityType: meta.entityType || "",
		tags: Array.isArray(meta.tags) ? [...meta.tags] : [],
		...meta
	}));
};
var registryFromEntries = (entries) => {
	const registry = /* @__PURE__ */ new Map();
	for (const [id, meta] of entries) registry.set(id, createMetaState(meta));
	return registry;
};
var normalizeMetaEntries = (raw) => {
	if (!raw) return [];
	if (raw instanceof Map) return Array.from(raw.entries());
	if (Array.isArray(raw)) return raw.map((entry) => {
		if (entry && typeof entry === "object" && "id" in entry) return [entry.id, entry.meta || entry];
		return null;
	}).filter(Boolean);
	if (typeof raw === "object") return Object.entries(raw);
	return [];
};
var packMetaRegistry = (registry) => {
	const payload = {};
	registry?.forEach((meta, id) => {
		payload[id] = fallbackClone(meta ?? {});
	});
	return payload;
};
var createInitialMetaRegistry = () => registryFromEntries(DEFAULT_META_ENTRIES);
var unpackMetaRegistry = (raw) => {
	const entries = normalizeMetaEntries(raw);
	return registryFromEntries(entries.length ? entries : DEFAULT_META_ENTRIES);
};
var unwrapRef = (value, fallback) => {
	if (value && typeof value === "object" && "value" in value) return value.value ?? fallback;
	return value ?? fallback;
};
var serializeItemState = (item) => {
	return {
		id: item.id,
		cell: observe([item.cell?.[0] ?? 0, item.cell?.[1] ?? 0]),
		icon: unwrapRef(item.icon, "sparkle"),
		label: unwrapRef(item.label, "Shortcut"),
		action: item.action
	};
};
var createStatefulItem = (config) => {
	return observe({
		id: config.id || generateItemId(),
		cell: observe(ensureCell(config.cell)),
		icon: stringRef(config.icon || "sparkle"),
		label: stringRef(config.label || "Shortcut"),
		action: config.action || "open-view"
	});
};
var createInitialState = () => observe(DEFAULT_SPEED_DIAL_RECORDS.map(createStatefulItem));
var unpackState = (raw) => {
	const records = (Array.isArray(raw) && raw.length ? raw : DEFAULT_SPEED_DIAL_DATA).filter((entry) => !isCoreRailPersistedEntry(entry)).map((entry) => {
		const { meta, ...record } = entry;
		if (meta) legacyMetaBuffer.push([entry.id, {
			action: entry.action,
			...meta
		}]);
		else legacyMetaBuffer.push([entry.id, { action: entry.action }]);
		return record;
	});
	return observe(records.map(createStatefulItem));
};
var packState = (collection) => collection.filter((item) => {
	const id = String(item?.id || "").trim().toLowerCase();
	if (CORE_RAIL_GRID_IDS.has(id)) return false;
	const label = item?.label && typeof item.label === "object" && "value" in item.label ? String(item.label.value || "").trim().toLowerCase() : String(item?.label || "").trim().toLowerCase();
	if (label && CORE_RAIL_GRID_LABELS.has(label)) {
		const action = String(item?.action || "open-view").trim().toLowerCase();
		if (!action || action === "open-view") return false;
	}
	return true;
}).map(serializeItemState);
var SPEED_DIAL_ITEMS_BOOT = "__CWSP_SPEED_DIAL_ITEMS_V1__";
var SPEED_DIAL_META_BOOT = "__CWSP_SPEED_DIAL_META_V1__";
var bootSpeedDialMeta = () => {
	const g = globalThis;
	if (g[SPEED_DIAL_META_BOOT]) return g[SPEED_DIAL_META_BOOT];
	const state = makeUIState(META_STORAGE_KEY, createInitialMetaRegistry, unpackMetaRegistry, packMetaRegistry);
	g[SPEED_DIAL_META_BOOT] = state;
	return state;
};
var bootSpeedDialItems = () => {
	const g = globalThis;
	if (g[SPEED_DIAL_ITEMS_BOOT]) return g[SPEED_DIAL_ITEMS_BOOT];
	const state = makeUIState(STORAGE_KEY, createInitialState, unpackState, packState);
	g[SPEED_DIAL_ITEMS_BOOT] = state;
	return state;
};
var speedDialMeta = bootSpeedDialMeta();
var speedDialItems = bootSpeedDialItems();
var persistSpeedDialItems = () => {
	try {
		saveUIState(STORAGE_KEY);
		return;
	} catch {}
	speedDialItems?.$save?.();
};
var persistSpeedDialMeta = () => {
	try {
		saveUIState(META_STORAGE_KEY);
		return;
	} catch {}
	speedDialMeta?.$save?.();
};
var getSpeedDialMeta = (id) => {
	if (!id) return null;
	return speedDialMeta?.get?.(id) ?? null;
};
var ensureSpeedDialMeta = (id, defaults = {}) => {
	let meta = speedDialMeta?.get?.(id);
	if (!meta) {
		meta = createMetaState(defaults);
		speedDialMeta?.set?.(id, meta);
		persistSpeedDialMeta();
	}
	if (defaults?.action && meta.action !== defaults.action) meta.action = defaults.action;
	return meta;
};
var syncMetaActionFromItem = (item) => {
	if (!item) return false;
	const desiredAction = item.action || "open-view";
	const meta = ensureSpeedDialMeta(item.id, { action: desiredAction });
	if (meta.action !== desiredAction) {
		meta.action = desiredAction;
		return true;
	}
	return false;
};
var syncMetaActionsForAllItems = () => {
	let changed = false;
	speedDialItems?.forEach?.((item) => {
		if (syncMetaActionFromItem(item)) changed = true;
	});
	if (changed) persistSpeedDialMeta();
};
var flushLegacyMetaBuffer = () => {
	if (!legacyMetaBuffer.length) return;
	legacyMetaBuffer.forEach(([id, meta]) => {
		const target = ensureSpeedDialMeta(id, meta);
		Object.assign(target, meta);
	});
	legacyMetaBuffer.length = 0;
	persistSpeedDialMeta();
};
flushLegacyMetaBuffer();
syncMetaActionsForAllItems();
var ensureExternalShortcuts = () => {
	let changed = false;
	EXTERNAL_SHORTCUTS.forEach((shortcut) => {
		if (!speedDialItems?.find?.((item) => item?.id === shortcut.id)) {
			const item = createStatefulItem(shortcut);
			if (shortcut.label && item.label && typeof item.label === "object" && "value" in item.label) item.label.value = shortcut.label;
			if (shortcut.icon && item.icon && typeof item.icon === "object" && "value" in item.icon) item.icon.value = shortcut.icon;
			speedDialItems.push(observe(item));
			ensureSpeedDialMeta(item.id, shortcut.meta);
			changed = true;
		} else {
			const currentMeta = getSpeedDialMeta(shortcut.id);
			if (shortcut.meta && currentMeta) {
				if (shortcut.meta.href !== currentMeta.href) {
					currentMeta.href = shortcut.meta.href;
					changed = true;
				}
				if (shortcut.meta.description !== currentMeta.description) {
					currentMeta.description = shortcut.meta.description;
					changed = true;
				}
			} else if (shortcut.meta && !currentMeta) {
				ensureSpeedDialMeta(shortcut.id, shortcut.meta);
				changed = true;
			}
		}
	});
	if (changed) {
		persistSpeedDialItems();
		persistSpeedDialMeta();
	}
};
ensureExternalShortcuts();
var createEmptySpeedDialItem = (cell = observe([0, 0])) => {
	const item = createStatefulItem({
		id: generateItemId(),
		cell,
		icon: "sparkle",
		label: "New shortcut",
		action: "open-link"
	});
	ensureSpeedDialMeta(item.id, {
		action: item.action,
		href: "",
		description: ""
	});
	return item;
};
var addSpeedDialItem = (item) => {
	speedDialItems?.push?.(observe(item));
	const metaChanged = syncMetaActionFromItem(item);
	persistSpeedDialItems();
	if (metaChanged) persistSpeedDialMeta();
	return item;
};
makeUIState("cw::workspace::wallpaper", () => observe({
	src: "/assets/wallpaper.jpg",
	opacity: 1,
	blur: 0
}), (raw) => observe(raw || {
	src: "/assets/wallpaper.jpg",
	opacity: 1,
	blur: 0
}), (state) => ({ ...state }));
var gridLayoutState = makeUIState("cw::workspace::grid-layout", () => observe({
	columns: 4,
	rows: 8,
	shape: "square"
}), (raw) => observe(raw || {
	columns: 4,
	rows: 8,
	shape: "square"
}), (state) => ({ ...state }));
var persistGridLayout = () => gridLayoutState?.$save?.();
var applyGridSettings = (settings) => {
	const gridConfig = settings?.grid || gridLayoutState;
	const columns = gridConfig?.columns ?? 4;
	const rows = gridConfig?.rows ?? 8;
	const shape = gridConfig?.shape ?? "square";
	if (gridLayoutState) {
		gridLayoutState.columns = columns;
		gridLayoutState.rows = rows;
		gridLayoutState.shape = shape;
		persistGridLayout();
	}
	if (typeof document === "undefined") return;
	document.querySelectorAll(".speed-dial-grid").forEach((grid) => {
		const el = grid;
		el.dataset.gridColumns = String(columns);
		el.dataset.gridRows = String(rows);
		el.dataset.gridShape = shape;
	});
	document.documentElement.dataset.gridColumns = String(columns);
	document.documentElement.dataset.gridRows = String(rows);
	document.documentElement.dataset.gridShape = shape;
};
if (typeof globalThis !== "undefined" && typeof document !== "undefined") scheduleFrame(() => applyGridSettings());
var COLOR_SOURCES = [
	"auto",
	"wallpaper",
	"material-you",
	"system-wallpaper",
	"speed-dial",
	"custom"
];
var HEX_RE = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;
var normalizeHexColor = (raw) => {
	const t = String(raw ?? "").trim();
	if (!HEX_RE.test(t)) return "";
	if (t.length === 4) return `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`.toLowerCase();
	return t.toLowerCase();
};
var isAppearanceColorSource = (raw) => COLOR_SOURCES.includes(String(raw || ""));
var isCapacitorNative$1 = () => {
	try {
		const c = globalThis.Capacitor;
		if (typeof c?.isNativePlatform === "function" && c.isNativePlatform()) return true;
		const platform = c?.getPlatform?.();
		return platform === "android" || platform === "ios";
	} catch {
		return false;
	}
};
var isNeutralinoDesktop = () => {
	try {
		const g = globalThis;
		return Boolean(g.__CWS_NEUTRALINO_BOOT__ || g.Neutralino || typeof g.NL_OS === "string");
	} catch {
		return false;
	}
};
var isCrxSurface = () => {
	try {
		return Boolean(globalThis.chrome?.runtime?.id);
	} catch {
		return false;
	}
};
var isLauncherSku = () => {
	try {
		if (typeof document !== "undefined" && document.documentElement.dataset.cwspShellRole === "launcher") return true;
		return globalThis.__RS_SHELL_ROLE__ === "launcher";
	} catch {
		return false;
	}
};
var isCwspShellSurface = () => {
	try {
		if (typeof document === "undefined") return false;
		const role = String(document.documentElement.dataset.cwspShellRole || "").toLowerCase();
		const surface = String(document.documentElement.dataset.cwspSurface || "").toLowerCase();
		return role === "shell" || surface === "cwsp-shell" || surface === "environment" || surface === "cw-environment";
	} catch {
		return false;
	}
};
/** Platform default when `colorSource` is empty / `auto`. */
var defaultColorSource = () => {
	if (isCapacitorNative$1() && isLauncherSku()) return "wallpaper";
	if (isCapacitorNative$1()) return "material-you";
	if (isNeutralinoDesktop()) return "system-wallpaper";
	if (isCrxSurface() || isCwspShellSurface()) return "speed-dial";
	return "speed-dial";
};
var resolveColorSource = (saved) => {
	if (isAppearanceColorSource(saved) && saved !== "auto") return saved;
	return defaultColorSource();
};
var rgbToHex = (css) => {
	const m = css.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
	if (!m) return "";
	return `#${[
		m[1],
		m[2],
		m[3]
	].map((n) => Math.max(0, Math.min(255, Math.round(Number(n)))).toString(16).padStart(2, "0")).join("")}`;
};
var registerColorProperty = (name, initialValue = "#5a9ec8") => {
	try {
		CSS?.registerProperty?.({
			name,
			syntax: "<color>",
			inherits: true,
			initialValue
		});
	} catch {}
};
var seedHosts = () => {
	const nodes = /* @__PURE__ */ new Set();
	if (typeof document === "undefined") return [];
	nodes.add(document.documentElement);
	if (document.body) nodes.add(document.body);
	document.querySelectorAll(".env-shell-root, .wf-demo-root, ui-window, [data-shell], .view-settings, [data-view='settings'], .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .cw-network-view, .cw-network-view-host").forEach((el) => nodes.add(el));
	return [...nodes];
};
var SEED_PROPS = [
	"--color-primary",
	"--base-color",
	"--wf-md-primary",
	"--wf-md-seed",
	"--primary",
	"--current"
];
var isValidColor = (color) => {
	try {
		rgbToHex(color);
		return true;
	} catch {
		return false;
	}
};
var applyBaseColorSeed = (hex, source, extras) => {
	if (typeof document === "undefined") return;
	const seed = normalizeHexColor(hex) || "#5a9ec8";
	const secondary = normalizeHexColor(extras?.secondary) || `color-mix(in oklab, ${seed} 72%, gray)`;
	const tertiary = normalizeHexColor(extras?.tertiary) || `color-mix(in oklab, ${seed} 55%, gray)`;
	const concrete = source === "user" ? "custom" : source === "system" ? "material-you" : source;
	document.documentElement.dataset.baseSource = String(concrete);
	document.documentElement.dataset.colorSource = String(concrete);
	if (!isValidColor(seed)) return;
	if (!isValidColor(secondary)) return;
	if (!isValidColor(tertiary)) return;
	registerColorProperty("--color-primary", seed);
	registerColorProperty("--base-color", seed);
	registerColorProperty("--color-secondary", secondary);
	registerColorProperty("--color-tertiary", tertiary);
	registerColorProperty("--secondary", secondary);
	registerColorProperty("--tertiary", tertiary);
	for (const host of seedHosts()) {
		for (const prop of SEED_PROPS) host.style.setProperty(prop, seed);
		host.style.setProperty("--color-secondary", secondary);
		host.style.setProperty("--color-tertiary", tertiary);
		host.style.setProperty("--secondary", secondary);
		host.style.setProperty("--tertiary", tertiary);
	}
	const globalQuery = Q("body, html, .wf-demo-root, ui-window, .view-explorer, [data-view='explorer'], .view-viewer, [data-view='viewer'], .view-settings, [data-view='settings'], .cw-network-view, .cw-network-view-host");
	globalQuery.style.setProperty("--color-primary", seed);
	globalQuery.style.setProperty("--base-color", seed);
	globalQuery.style.setProperty("--color-secondary", secondary);
	globalQuery.style.setProperty("--color-tertiary", tertiary);
	globalQuery.style.setProperty("--secondary", secondary);
	globalQuery.style.setProperty("--tertiary", tertiary);
};
/** CSS `AccentColor` when the engine maps it to a real system accent (not generic link blue). */
var readCssAccentColor = () => {
	if (typeof document === "undefined") return "";
	const probe = document.createElement("div");
	probe.style.cssText = "position:absolute;inset:auto;color:AccentColor;background:AccentColor";
	document.documentElement.appendChild(probe);
	const css = getComputedStyle(probe).color;
	probe.remove();
	const hex = rgbToHex(css);
	if (!hex) return "";
	if (hex === "#0000ee" || hex === "#0000ff" || hex === "#000000" || hex === "#ffffff") return "";
	return hex;
};
var readBridgeColor = async (key) => {
	try {
		const cached = normalizeHexColor(globalThis.__CWS_SHELL_INFO__?.[key]);
		if (cached) return cached;
		const { fetchCwsShellInfo } = await __vitePreload(async () => {
			const { fetchCwsShellInfo } = await import("../vendor/@capacitor_core.js").then((n) => n.n);
			return { fetchCwsShellInfo };
		}, __vite__mapDeps([10,2,11,12,13,14]), import.meta.url);
		return normalizeHexColor((await fetchCwsShellInfo({ force: true }))?.[key]);
	} catch {
		return "";
	}
};
var resolveSystemAccentColor = async () => {
	const fromBridge = await readBridgeColor("accentColor");
	if (fromBridge) return fromBridge;
	return readCssAccentColor();
};
var cachedWallpaperPrimary = () => {
	try {
		const hex = normalizeHexColor(localStorage.getItem("rs-wallpaper-primary"));
		if (hex) return hex;
		const raw = localStorage.getItem("rs-wallpaper-theme");
		if (!raw) return "";
		return normalizeHexColor(JSON.parse(raw)?.primary);
	} catch {
		return "";
	}
};
var extractFromImage = async (src) => {
	try {
		const { applyThemeFromWallpaper } = await __vitePreload(async () => {
			const { applyThemeFromWallpaper } = await import("../vendor/culori.js").then((n) => n.t);
			return { applyThemeFromWallpaper };
		}, __vite__mapDeps([25,2,1,3,4,5,6]), import.meta.url);
		return normalizeHexColor((await applyThemeFromWallpaper(src, { force: false }))?.primary);
	} catch {
		return "";
	}
};
var colorFromLiveWallpaperCanvas = async () => {
	if (typeof document === "undefined") return "";
	const canvas = document.querySelector(".env-shell-wallpaper canvas, [data-app-layer='canvas'] canvas");
	if (!canvas || canvas.width < 2 || canvas.height < 2) return "";
	try {
		const blob = await new Promise((resolve) => {
			canvas.toBlob((b) => resolve(b), "image/jpeg", .7);
		});
		if (blob && blob.size > 0) return extractFromImage(blob);
	} catch {}
	return "";
};
var colorFromAppWallpaper = async () => {
	const cached = cachedWallpaperPrimary();
	if (cached) return cached;
	try {
		const { resolveAppWallpaperUrl } = await __vitePreload(async () => {
			const { resolveAppWallpaperUrl } = await import("../vendor/culori.js").then((n) => n.t);
			return { resolveAppWallpaperUrl };
		}, __vite__mapDeps([25,2,1,3,4,5,6]), import.meta.url);
		const url = await resolveAppWallpaperUrl();
		if (!url) return cached;
		if (/\/assets\/wallpaper\.jpg(?:$|[?#])/i.test(url)) return cached;
		if (url.startsWith("data:") && !/^data:image\//i.test(url)) return cached;
		return extractFromImage(url);
	} catch {}
	return "";
};
var neuReadEnv = async (key) => {
	try {
		const fn = globalThis.Neutralino?.os?.getEnv;
		if (typeof fn !== "function") return "";
		const raw = await fn({ key });
		if (typeof raw === "string") return raw.trim();
		if (raw && typeof raw === "object" && "value" in raw) return String(raw.value || "").trim();
		return "";
	} catch {
		return "";
	}
};
var neuReadBinary = async (path) => {
	try {
		const buf = await globalThis.Neutralino?.filesystem?.readBinaryFile?.(path);
		if (!buf || !(buf instanceof ArrayBuffer) || buf.byteLength < 32) return null;
		return new Blob([buf], { type: "image/jpeg" });
	} catch {
		return null;
	}
};
var colorFromSystemWallpaper = async () => {
	const fromBridge = await readBridgeColor("wallpaperColor");
	if (fromBridge) return fromBridge;
	if (isNeutralinoDesktop()) {
		const appData = await neuReadEnv("APPDATA") || await neuReadEnv("HOME");
		const candidates = [appData ? `${appData.replace(/[\\/]+$/, "")}/Microsoft/Windows/Themes/TranscodedWallpaper` : "", appData ? `${appData.replace(/[\\/]+$/, "")}/.cache/wallpaper` : ""].filter(Boolean);
		for (const path of candidates) {
			const blob = await neuReadBinary(path);
			if (blob) {
				const hex = await extractFromImage(blob);
				if (hex) return hex;
			}
		}
	}
	return cachedWallpaperPrimary();
};
var resolveAppearanceBaseColor = async (appearance) => {
	const input = typeof appearance === "string" || appearance == null ? { color: appearance } : appearance;
	const source = resolveColorSource(input.colorSource);
	const custom = normalizeHexColor(input.color);
	const pick = async (fn, tag) => {
		const hex = normalizeHexColor(await fn());
		return hex ? {
			hex,
			source: tag
		} : null;
	};
	if (source === "custom" && custom) return {
		hex: custom,
		source: "custom"
	};
	if (source === "material-you") return await pick(resolveSystemAccentColor, "material-you") ?? {
		hex: custom || "#5a9ec8",
		source: custom ? "custom" : "material-you"
	};
	if (source === "wallpaper") return await pick(colorFromLiveWallpaperCanvas, "wallpaper") ?? await pick(colorFromAppWallpaper, "wallpaper") ?? await pick(async () => readBridgeColor("wallpaperColor"), "wallpaper") ?? {
		hex: custom || "#5a9ec8",
		source: "wallpaper"
	};
	if (source === "speed-dial") return await pick(colorFromAppWallpaper, "speed-dial") ?? {
		hex: custom || "#5a9ec8",
		source: "speed-dial"
	};
	if (source === "system-wallpaper") return await pick(colorFromSystemWallpaper, "system-wallpaper") ?? {
		hex: custom || "#5a9ec8",
		source: "system-wallpaper"
	};
	return {
		hex: custom || "#5a9ec8",
		source
	};
};
//#endregion
//#region ../../modules/projects/subsystem/src/other/utils/Theme.ts
/**
* WHY: fl.ui Quick Settings cannot import this module (layer cycle). It dispatches
* `u2-theme-change` with `{ source: "quick-settings", theme }`; we persist to IDB and
* re-run {@link applyTheme} so env-shell + minimal shells share one persistence path.
*/
var quickSettingsThemeBridgeBound = false;
var quickSettingsThemeBridgeBusy = false;
var bindQuickSettingsThemePersistence = () => {
	if (quickSettingsThemeBridgeBound || typeof document === "undefined") return;
	quickSettingsThemeBridgeBound = true;
	document.documentElement.addEventListener("u2-theme-change", (ev) => {
		const detail = ev?.detail;
		if (!detail || detail.source !== "quick-settings") return;
		const theme = detail.theme;
		if (theme !== "light" && theme !== "dark") return;
		if (quickSettingsThemeBridgeBusy) return;
		quickSettingsThemeBridgeBusy = true;
		(async () => {
			try {
				const current = await loadSettings$1();
				if (current?.appearance?.theme === theme) {
					syncBrowserChromeTheme(theme, theme);
					return;
				}
				applyTheme(await saveSettings({
					...current,
					appearance: {
						...current.appearance || {},
						theme
					}
				}));
			} catch (e) {
				console.warn("[Theme] Quick Settings persistence failed", e);
				syncBrowserChromeTheme(theme, theme);
			} finally {
				quickSettingsThemeBridgeBusy = false;
			}
		})();
	});
};
/** Convert getComputedStyle background (rgb/rgba or hex) to #rrggbb for meta theme-color / PWA chrome. */
var cssBackgroundToOpaqueHex = (css) => {
	const t = css.trim();
	if (!t || t === "transparent") return null;
	const hexMatch = t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
	if (hexMatch) {
		let h = hexMatch[1];
		if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
		return `#${h.toLowerCase()}`;
	}
	const m = t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i);
	if (!m) return null;
	const alpha = m[4] !== void 0 ? Number(m[4]) : 1;
	if (!Number.isFinite(alpha) || alpha < .98) return null;
	return `#${[
		Math.max(0, Math.min(255, Math.round(Number(m[1])))),
		Math.max(0, Math.min(255, Math.round(Number(m[2])))),
		Math.max(0, Math.min(255, Math.round(Number(m[3]))))
	].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
};
/**
* Sample the top shell chrome (minimal nav or faint toolbar) from mounted shell shadow roots
* so PWA Window Controls Overlay / title bar can match the real toolbar background.
*/
var samplePwaToolbarBackgroundColor = () => {
	if (typeof document === "undefined") return null;
	const hosts = document.querySelectorAll("[data-shell]");
	for (const host of hosts) {
		const sr = host.shadowRoot;
		if (!sr) continue;
		const bar = sr.querySelector(".app-shell__nav, .app-shell__toolbar");
		if (!bar) continue;
		const bg = getComputedStyle(bar).backgroundColor;
		const hex = cssBackgroundToOpaqueHex(bg);
		if (hex) return hex;
	}
	return null;
};
/** Paint `--color-surface` so Capacitor / PWA chrome follows Material You after seed apply. */
var sampleSurfaceBackgroundColor = () => {
	if (typeof document === "undefined") return null;
	const probe = document.createElement("div");
	probe.style.cssText = "position:fixed;left:-8px;top:-8px;inline-size:4px;block-size:4px;pointer-events:none;opacity:0;background:var(--color-surface)";
	try {
		document.documentElement.appendChild(probe);
		return cssBackgroundToOpaqueHex(getComputedStyle(probe).backgroundColor);
	} catch {
		return null;
	} finally {
		probe.remove();
	}
};
var resolveColorScheme = (theme) => {
	if (theme === "dark" || theme === "light") return theme;
	return globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
};
var resolveFontSize = (size) => {
	switch (size) {
		case "small": return "14px";
		case "large": return "18px";
		default: return "16px";
	}
};
/** Keep minimal / immersive shell hosts + inner `.app-shell` in sync when only `applyTheme()` runs (Settings saves / preview) — `shell.setTheme` is not always invoked. */
var syncShellHostVisualScheme = (resolved) => {
	try {
		document.querySelectorAll("[data-shell]").forEach((el) => {
			const h = el;
			h.dataset.theme = resolved;
			h.style.colorScheme = resolved;
			const inner = h.shadowRoot?.querySelector?.(".app-shell");
			if (inner) {
				inner.dataset.theme = resolved;
				inner.style.colorScheme = resolved;
			}
		});
	} catch {}
	try {
		document.querySelectorAll("ui-window, .env-shell-root").forEach((el) => {
			const h = el;
			h.dataset.theme = resolved;
			h.style.colorScheme = resolved;
		});
	} catch {}
};
/** Keep <html> + PWA chrome aligned with resolved light/dark and user preference (auto/light/dark). */
var syncBrowserChromeTheme = (resolved, preference) => {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	const scheme = preference === "dark" ? "dark" : preference === "light" ? "light" : "auto";
	root.setAttribute("data-scheme", scheme);
	root.setAttribute("data-theme", resolved);
	root.style.colorScheme = resolved;
	try {
		const body = document.body;
		if (body) body.style.colorScheme = resolved;
	} catch {}
	try {
		document.querySelectorAll("[data-shell='content']").forEach((el) => {
			el.style.colorScheme = resolved;
		});
	} catch {}
	if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ !== true) {
		const applyMetaThemeColor = () => {
			if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ === true) return;
			if (globalThis?.__CWSP_NATIVE_THEME_COLOR_OWNED__) return;
			if (document.querySelector("ui-window[native-mode]:not([minimized])")) return;
			let meta = document.querySelector("meta[name=\"theme-color\"]");
			if (!meta) {
				meta = document.createElement("meta");
				meta.setAttribute("name", "theme-color");
				document.head?.appendChild(meta);
			}
			const sampled = samplePwaToolbarBackgroundColor() ?? sampleSurfaceBackgroundColor();
			const fallback = resolved === "dark" ? "#1a2420" : "#d5e4dc";
			meta.setAttribute("content", sampled ?? fallback);
		};
		applyMetaThemeColor();
		requestAnimationFrame(applyMetaThemeColor);
	}
	syncShellHostVisualScheme(resolved);
};
var applyTheme = (settings) => {
	if (typeof document === "undefined") return;
	bindQuickSettingsThemePersistence();
	installThemeLifecycleResync();
	if (!settings) return;
	const root = document.documentElement;
	const theme = settings.appearance?.theme || "auto";
	const resolvedScheme = resolveColorScheme(theme);
	syncBrowserChromeTheme(resolvedScheme, theme);
	root.style.fontSize = resolveFontSize(settings.appearance?.fontSize);
	root.dataset.colorSource = resolveColorSource(settings.appearance?.colorSource);
	resolveAppearanceBaseColor(settings.appearance).then(({ hex, source }) => {
		applyBaseColorSeed(hex, source);
		syncBrowserChromeTheme(resolvedScheme, theme);
	});
	if (settings.grid) applyGridSettings(settings);
};
var restampExplorerShellScheme = () => {
	if (typeof document === "undefined") return;
	try {
		document.querySelectorAll(".view-explorer").forEach((el) => {
			const scheme = el.dataset.explorerColorScheme;
			if (scheme !== "light" && scheme !== "dark") return;
			if (el.getAttribute("data-theme") !== scheme) el.setAttribute("data-theme", scheme);
			el.style.setProperty("color-scheme", `${scheme} only`);
		});
	} catch {}
};
var themeResumeAt = 0;
var themeLifecycleBound = false;
var sawBackground = false;
var restampChromeScheme = () => {
	restampExplorerShellScheme();
	try {
		const root = document.documentElement;
		const pinned = root.getAttribute("data-theme");
		if (pinned === "light" || pinned === "dark") {
			root.style.colorScheme = pinned;
			if (document.body) document.body.style.colorScheme = pinned;
		}
		root.offsetHeight;
	} catch {}
};
/**
* Restore chrome after Android recents / Home.
* INVARIANT: never rewrite constructable sheets on cold start — first onResume/focus wiped UI.
*/
var resumeThemeAfterForeground = (force = false) => {
	if (typeof document === "undefined") return;
	if (!force && document.visibilityState === "hidden") return;
	const now = Date.now();
	if (now - themeResumeAt < 240) return;
	themeResumeAt = now;
	restampChromeScheme();
	if (!sawBackground) return;
	(async () => {
		try {
			const { rehydrateAdoptedStyleSheets } = await __vitePreload(async () => {
				const { rehydrateAdoptedStyleSheets } = await import("../com/app.js").then((n) => n.t);
				return { rehydrateAdoptedStyleSheets };
			}, __vite__mapDeps([1,2,3,4,5,6]), import.meta.url);
			rehydrateAdoptedStyleSheets();
		} catch {}
		restampChromeScheme();
		try {
			document.dispatchEvent(new CustomEvent("cwsp:theme-resume"));
		} catch {}
	})();
};
/** Bind visibility / pageshow / Capacitor appState + expose `__CWSP_THEME_RESUME__` for Java onResume. */
var installThemeLifecycleResync = () => {
	if (themeLifecycleBound || typeof document === "undefined") return;
	themeLifecycleBound = true;
	globalThis.__CWSP_THEME_RESUME__ = resumeThemeAfterForeground;
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "hidden") {
			sawBackground = true;
			return;
		}
		resumeThemeAfterForeground();
	});
	document.addEventListener("resume", () => resumeThemeAfterForeground());
	globalThis.addEventListener?.("pageshow", () => resumeThemeAfterForeground());
	try {
		globalThis.Capacitor?.Plugins?.App?.addListener?.("appStateChange", (state) => {
			if (state?.isActive === false) {
				sawBackground = true;
				return;
			}
			if (state?.isActive) resumeThemeAfterForeground();
		});
	} catch {}
};
//#endregion
//#region ../../modules/projects/veela.css/src/scss/core/index.scss?inline
var core_default = "@function --hsv(--src-color <color>) returns <color>{result:hsl(from var(--src-color,black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100)/alpha)}@property --color-primary{syntax:\"<color>\";inherits:true;initial-value:#5a9ec8}@property --base-color{syntax:\"<color>\";inherits:true;initial-value:#5a9ec8}@property --wallpaper-underlying-color{syntax:\"<color>\";inherits:true;initial-value:#16161a}@property --wallpaper-contrast-color{syntax:\"<color>\";inherits:true;initial-value:#f7f7f8}@property --color-secondary{syntax:\"<color>\";inherits:true;initial-value:#6b8cff}@property --color-tertiary{syntax:\"<color>\";inherits:true;initial-value:#8aa0ff}@property --color-error{syntax:\"<color>\";inherits:true;initial-value:#ef4444}@property --color-success{syntax:\"<color>\";inherits:true;initial-value:#4caf50}@property --color-warning{syntax:\"<color>\";inherits:true;initial-value:#ff9800}@property --color-info{syntax:\"<color>\";inherits:true;initial-value:#2196f3}@function --u2-color-mod(--base-color <color>, --index <number> : 550) returns <color>{--i:clamp(0, var(--index), 1000);--pivot:550;--white-distance:clamp(0, calc((var(--pivot) - var(--i)) / var(--pivot)), 1);--black-distance:clamp(0, calc((var(--i) - var(--pivot)) / (1000 - var(--pivot))), 1);--to-white:pow(var(--white-distance), 1.15);--to-black:pow(var(--black-distance), 1.08);--center-left:clamp(0, calc(var(--i) / var(--pivot)), 1);--center-right:clamp(0, calc((1000 - var(--i)) / (1000 - var(--pivot))), 1);--chroma-shape:sqrt(min(var(--center-left), var(--center-right)));--chroma-scale:calc(0.08 + 0.92 * var(--chroma-shape));result:oklch(from var(--base-color) calc(l + (.985 - l) * var(--to-white) + (.16 - l) * var(--to-black)) calc(c * var(--chroma-scale)) h)}@layer tokens, base, layout, components, utilities, theme, overrides, print;@layer tokens{:host,:root,:scope{--color-primary:#5a9ec8;color-scheme:light dark;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab, var(--base-color) 60%, gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized), 940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized), 70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color), 40);--color-secondary:--u2-color-mod(var(--base-color), 420);--color-on-secondary:--u2-color-mod(var(--base-color), 40);--color-tertiary:--u2-color-mod(var(--base-color), 400);--color-on-tertiary:--u2-color-mod(var(--base-color), 40);--color-error:#ef4444;--color-on-error:--u2-color-mod(var(--color-error), 40);--color-success:#4caf50;--color-warning:#ff9800;--color-info:#2196f3;--color-background:--u2-color-mod(var(--base-color), 60);--color-on-background:--u2-color-mod(var(--base-color), 900);--color-surface:--u2-color-mod(var(--base-color), 60);--color-on-surface:--u2-color-mod(var(--base-color), 900);--color-surface-variant:--u2-color-mod(var(--base-color), 160);--color-on-surface-variant:--u2-color-mod(var(--base-color), 700);--color-outline:--u2-color-mod(var(--base-color), 300);--color-outline-variant:--u2-color-mod(var(--base-color), 400);--color-surface-container-lowest:--u2-color-mod(var(--base-color), 40);--color-surface-container-low:--u2-color-mod(var(--base-color), 30);--color-surface-container:--u2-color-mod(var(--base-color), 20);--color-surface-container-high:--u2-color-mod(var(--base-color), 5);--color-surface-container-highest:--u2-color-mod(var(--base-color), 2);--color-primary-container:--u2-color-mod(var(--base-color), 160);--color-on-primary-container:--u2-color-mod(var(--base-color), 900);--color-border:color-mix(in oklab, var(--color-outline-variant) 75%, transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container);--space-2xs:0.125rem;--space-xs:0.25rem;--space-sm:0.5rem;--space-md:0.75rem;--space-lg:1rem;--space-xl:1.25rem;--space-2xl:1.5rem;--padding-xs:var(--space-xs);--padding-sm:var(--space-sm);--padding-md:var(--space-md);--padding-lg:var(--space-lg);--padding-xl:var(--space-xl);--padding-2xl:var(--space-2xl);--padding-3xl:2rem;--padding-4xl:2.5rem;--padding-5xl:3rem;--padding-6xl:4rem;--padding-7xl:5rem;--padding-8xl:6rem;--padding-9xl:8rem;--gap-xs:var(--space-xs);--gap-sm:var(--space-sm);--gap-md:var(--space-md);--gap-lg:var(--space-lg);--gap-xl:var(--space-xl);--gap-2xl:var(--space-2xl);--fl-ui-gap:var(--space-md);--radius-none:0;--radius-xs:0.25rem;--radius-sm:0.25rem;--radius-default:0.25rem;--radius-md:0.5rem;--radius-lg:0.75rem;--radius-xl:1rem;--radius-2xl:1.75rem;--radius-3xl:2rem;--radius-full:9999px;--fl-ui-radius:var(--radius-md);--border-radius:var(--radius-md);--shape-extra-small:var(--radius-xs);--shape-small:var(--radius-md);--shape-medium:var(--radius-lg);--shape-large:var(--radius-xl);--shape-extra-large:var(--radius-2xl);--shape-full:var(--radius-full);--elev-0:none;--elev-1:0 1px 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);--elev-2:0 2px 6px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08);--elev-3:0 6px 16px rgba(0, 0, 0, 0.14), 0 18px 48px rgba(0, 0, 0, 0.1);--shadow-xs:0 1px 2px rgba(0, 0, 0, 0.05);--shadow-sm:0 1px 3px rgba(0, 0, 0, 0.1);--shadow-md:0 4px 6px rgba(0, 0, 0, 0.1);--shadow-lg:0 10px 15px rgba(0, 0, 0, 0.1);--shadow-xl:0 20px 25px rgba(0, 0, 0, 0.1);--shadow-2xl:0 25px 50px rgba(0, 0, 0, 0.1);--shadow-inset:inset 0 2px 4px rgba(0, 0, 0, 0.06);--shadow-inset-strong:inset 0 4px 8px rgba(0, 0, 0, 0.12);--shadow-none:0 0 #0000;--text-xs:0.8rem;--text-sm:0.9rem;--text-base:1rem;--text-lg:1.1rem;--text-xl:1.25rem;--text-2xl:1.6rem;--text-3xl:2rem;--font-xs:var(--text-xs);--font-sm:var(--text-sm);--font-base:var(--text-base);--font-md:var(--text-base);--font-lg:var(--text-lg);--font-xl:var(--text-xl);--font-2xl:var(--text-2xl);--ui-icon-size:1.25rem;--ui-icon-padding:0px;--ui-icon-tile-padding:0.45rem;--ui-window-icon-size:0.95rem;--ui-explorer-icon-size:1.5rem;--ui-explorer-icon-track:2rem;--ui-explorer-action-icon-size:1.15rem;--ui-explorer-row-height:3.25rem;--icon-size-sm:var(--ui-icon-size);--icon-size-md:var(--ui-icon-size);--icon-size-lg:var(--ui-explorer-icon-size);--font-size-xs:0.75rem;--font-size-sm:0.875rem;--font-size-base:1rem;--font-size-lg:1.125rem;--font-size-xl:1.25rem;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-family:\"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;--font-family-base:var(--font-family);--font-family-mono:\"Roboto Mono\", \"SF Mono\", Monaco, Inconsolata, \"Fira Code\", monospace;--font-sans:var(--font-family);--font-mono:var(--font-family-mono);--leading-tight:1.2;--leading-normal:1.5;--leading-relaxed:1.8;--line-height:var(--leading-normal);--ease-emphasized:cubic-bezier(0.2, 0, 0, 1);--ease-expressive:cubic-bezier(0.34, 1.25, 0.64, 1);--duration-fast:140ms;--duration-normal:220ms;--duration-slow:360ms;--transition-fast:var(--duration-fast) var(--ease-emphasized);--transition-normal:var(--duration-normal) var(--ease-emphasized);--transition-slow:var(--duration-slow) var(--ease-emphasized);--motion-fast:var(--transition-fast);--motion-normal:var(--transition-normal);--motion-slow:var(--transition-slow);--ease-out:cubic-bezier(0, 0, 0.2, 1);--ease-in:cubic-bezier(0.4, 0, 1, 1);--ease-in-out:cubic-bezier(0.4, 0, 0.2, 1);--focus-ring:0 0 0 3px color-mix(in oklab, var(--color-primary) 35%, transparent);--z-base:0;--z-dropdown:100;--z-sticky:200;--z-fixed:300;--z-modal-backdrop:400;--z-modal:500;--z-popover:600;--z-tooltip:700;--z-toast:800;--z-max:9999;--view-bg:var(--color-container);--view-fg:var(--color-on-surface);--view-border:var(--color-outline-variant);--view-input-bg:light-dark(\n        --u2-color-mod(var(--base-color, var(--color-primary)), 40),\n        var(--color-surface-container-high)\n    );--view-files-bg:var(--color-surface-container-low);--view-file-bg:var(--color-surface-container-lowest, var(--color-surface-container-low));--view-results-bg:var(--color-surface-container-low);--view-result-bg:var(--color-surface-container-lowest, var(--color-surface-container-low));--color-surface-elevated:var(--color-surface-container);--color-surface-hover:var(--color-surface-container-low);--color-surface-active:var(--color-surface-container-high);--color-on-surface-muted:var(--color-on-surface-variant);--color-background-alt:var(--color-surface-variant);--color-primary-hover:light-dark(\n        --u2-color-mod(var(--base-color, var(--color-primary)), 620),\n        --u2-color-mod(var(--base-color, var(--color-primary)), 480)\n    );--color-primary-active:light-dark(\n        --u2-color-mod(var(--base-color, var(--color-primary)), 700),\n        --u2-color-mod(var(--base-color, var(--color-primary)), 400)\n    );--color-accent:var(--color-secondary);--color-accent-hover:light-dark(\n        --u2-color-mod(var(--base-color, var(--color-primary)), 500),\n        --u2-color-mod(var(--base-color, var(--color-primary)), 600)\n    );--color-on-accent:var(--color-on-secondary);--color-border-hover:var(--color-outline-variant);--color-border-strong:var(--color-outline);--color-border-focus:var(--color-primary);--color-text:var(--color-on-surface);--color-text-secondary:var(--color-on-surface-variant);--color-text-muted:color-mix(in oklab, var(--color-on-surface) 50%, var(--color-surface));--color-text-disabled:color-mix(in oklab, var(--color-on-surface) 38%, var(--color-surface));--color-text-inverse:var(--color-on-primary);--color-link:var(--color-primary);--color-link-hover:var(--color-primary-hover);--color-success-light:--u2-color-mod(var(--color-success), 280);--color-success-dark:--u2-color-mod(var(--color-success), 720);--color-warning-light:--u2-color-mod(var(--color-warning), 280);--color-warning-dark:--u2-color-mod(var(--color-warning), 720);--color-error-light:--u2-color-mod(var(--color-error), 280);--color-error-dark:--u2-color-mod(var(--color-error), 720);--color-info-light:--u2-color-mod(var(--color-info), 280);--color-info-dark:--u2-color-mod(var(--color-info), 720);--color-bg:var(--color-surface, var(--color-surface));--color-bg-alt:var(--color-surface-variant, var(--color-surface-variant));--color-fg:var(--color-on-surface, var(--color-on-surface));--color-fg-muted:var(--color-on-surface-variant, var(--color-on-surface-variant));--touch-min:3rem;--btn-height-sm:2rem;--btn-height-md:var(--touch-min);--btn-height-lg:3.5rem;--btn-padding-x-sm:var(--space-md);--btn-padding-x-md:var(--space-lg);--btn-padding-x-lg:1.5rem;--btn-radius:var(--radius-md);--btn-font-weight:var(--font-weight-medium);--input-height-sm:2rem;--input-height-md:var(--touch-min);--input-height-lg:3.5rem;--state-opacity-hover:0.08;--state-opacity-press:0.12;--state-opacity-focus:0.12;--state-opacity-disabled:0.38;--state-opacity-drag:0.16;--input-padding-x:var(--space-md);--input-radius:var(--radius-md);--input-border-color:var(--color-border, var(--color-border));--input-focus-ring-color:var(--color-primary);--input-focus-ring-width:2px;--card-padding:var(--space-lg);--card-radius:var(--radius-lg);--card-shadow:var(--shadow-sm);--card-border-color:var(--color-border, var(--color-border));--modal-backdrop-bg:light-dark(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.7));--modal-bg:var(--color-surface, var(--color-surface));--modal-radius:var(--radius-xl);--modal-shadow:var(--shadow-xl);--modal-padding:1.5rem;--toast-font-family:var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);--toast-font-size:var(--font-size-base, 1rem);--toast-font-weight:var(--font-weight-medium, 500);--toast-letter-spacing:0.01em;--toast-line-height:1.4;--toast-white-space:nowrap;--toast-pointer-events:auto;--toast-user-select:none;--toast-cursor:default;--toast-opacity:0;--toast-transform:translateY(100%) scale(0.9);--toast-transition:opacity 160ms ease-out, transform 160ms cubic-bezier(0.16, 1, 0.3, 1), background-color 100ms ease;--toast-text:var(--color-on-surface, var(--color-on-surface, light-dark(#ffffff, #000000)));--toast-bg:color-mix(in oklab, var(--color-surface-elevated, var(--color-surface-container-high, var(--color-surface, light-dark(#fafbfc, #1e293b)))) 90%, var(--color-on-surface, var(--color-on-surface, light-dark(#000000, #ffffff))));--toast-radius:var(--radius-lg);--toast-shadow:var(--shadow-lg);--toast-padding:var(--space-lg);--sidebar-width:280px;--sidebar-collapsed-width:64px;--nav-height:56px;--nav-height-compact:48px;--status-height:24px;--status-bg:var(--color-surface-elevated, var(--color-surface-container-high));--status-font-size:var(--text-xs);--shell-bg:var(--sv-surface-2, var(--color-surface));--shell-fg:var(--sv-on-surface, var(--color-on-surface));--shell-nav-bg:var(--sv-surface-2, var(--color-surface-container-high));--shell-nav-fg:var(--sv-on-surface, var(--color-on-surface));--shell-nav-border:var(--sv-outline-variant, var(--color-outline-variant));--shell-btn-hover:var(--sv-surface-2, var(--color-surface-container));--shell-btn-active-bg:color-mix(in oklab, var(--color-primary) 18%, var(--sv-surface-2, var(--color-surface)));--shell-btn-active-fg:var(--sv-on-surface, var(--color-on-surface));--shell-status-bg:var(--sv-surface-1, var(--color-surface-container-low));--shell-status-fg:var(--sv-on-surface, var(--color-on-surface));--faint-nav-bg:var(--color-surface-container-high);--faint-nav-border:var(--color-outline-variant);--faint-sidebar-bg:var(--color-surface-container-high);--env-status-fg:light-dark(#1c1c1e, #f5f5f7);--env-status-fg-muted:color-mix(in oklab, var(--env-status-fg) 78%, transparent);--env-launcher-fg:var(--wallpaper-contrast-color);--env-launcher-fg-shadow:color-mix(in oklab, var(--wallpaper-underlying-color) 88%, transparent);--env-launcher-fg-glow:color-mix(in oklab, var(--wallpaper-underlying-color) 48%, transparent);--error-color:var(--color-error, #f87171);--sv-bg:var(--sv-surface-2, var(--color-surface-container-low, light-dark(#eef1f6, #0f1318)));--sv-fg:var(--sv-on-surface, var(--color-on-surface, light-dark(#12151a, #e8edf2)));--sv-muted:var(--sv-on-surface-variant, var(--color-on-surface-variant, light-dark(#5c6570, #a8b0bc)));--sv-outline:var(--sv-outline-variant, var(--color-outline-variant, light-dark(#c5cdd8, #3d4755)));--sv-surface-1:var(--color-surface-container-low, light-dark(#ffffff, #171c24));--sv-surface-2:var(--color-surface-container, light-dark(#f4f6fa, #1c232d));--sv-primary:var(--base-color, var(--color-primary, #5a9ec8));--sv-danger:var(--color-error, #d32f2f);--vh-bg:var(--color-surface, light-dark(#eef1f6, #0f1318));--vh-fg:var(--color-on-surface, light-dark(#12151a, #e8edf2));--vh-muted:var(--color-on-surface-variant, light-dark(#5c6570, #a8b0bc));--vh-primary:var(--color-primary, #007acc);--vh-danger:var(--color-error, #d32f2f);--vh-on-primary:var(--color-on-primary, #ffffff);--vh-item-bg:var(--color-surface-container-low, light-dark(#e0e5ee, #0a0d12));--view-fg-muted:color-mix(in oklab, var(--color-on-surface, #ccc) 72%, transparent);--view-hover-bg:color-mix(in oklab, var(--color-primary, #3794ff) 12%, transparent);--view-selected-bg:color-mix(in oklab, var(--color-primary, #3794ff) 18%, transparent);--view-selected-border:var(--color-primary, #3794ff)}@supports (color:color-mix(in lch,red,blue)){:host,:root,:scope{--view-border:color-mix(in oklab, var(--color-outline-variant, #888) 45%, transparent)}}@media (prefers-color-scheme:dark){:host:not([data-theme=light]):not([data-theme=dark]),:root:not([data-theme=light]):not([data-theme=dark]){color-scheme:dark;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab, var(--base-color) 60%, gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized), 940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized), 70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color), 920);--color-secondary:--u2-color-mod(var(--base-color), 680);--color-on-secondary:--u2-color-mod(var(--base-color), 920);--color-tertiary:--u2-color-mod(var(--base-color), 700);--color-on-tertiary:--u2-color-mod(var(--base-color), 920);--color-error:#f87171;--color-on-error:--u2-color-mod(var(--color-error), 920);--color-success:#66bb6a;--color-warning:#ffa726;--color-info:#42a5f5;--color-background:--u2-color-mod(var(--base-color), 940);--color-on-background:--u2-color-mod(var(--base-color), 100);--color-surface:--u2-color-mod(var(--base-color), 940);--color-on-surface:--u2-color-mod(var(--base-color), 100);--color-surface-variant:--u2-color-mod(var(--base-color), 840);--color-on-surface-variant:--u2-color-mod(var(--base-color), 280);--color-outline:--u2-color-mod(var(--base-color), 720);--color-outline-variant:--u2-color-mod(var(--base-color), 640);--color-surface-container-lowest:--u2-color-mod(var(--base-color), 920);--color-surface-container-low:--u2-color-mod(var(--base-color), 940);--color-surface-container:--u2-color-mod(var(--base-color), 960);--color-surface-container-high:--u2-color-mod(var(--base-color), 980);--color-surface-container-highest:--u2-color-mod(var(--base-color), 1000);--color-primary-container:--u2-color-mod(var(--base-color), 820);--color-on-primary-container:--u2-color-mod(var(--base-color), 100);--color-border:color-mix(in oklab, var(--color-outline-variant) 70%, transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}}:host[data-theme=light],:root[data-theme=light],[data-theme=light]{color-scheme:light only;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab, var(--base-color) 60%, gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized), 940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized), 70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color), 40);--color-secondary:--u2-color-mod(var(--base-color), 420);--color-on-secondary:--u2-color-mod(var(--base-color), 40);--color-tertiary:--u2-color-mod(var(--base-color), 400);--color-on-tertiary:--u2-color-mod(var(--base-color), 40);--color-error:#ef4444;--color-on-error:--u2-color-mod(var(--color-error), 40);--color-success:#4caf50;--color-warning:#ff9800;--color-info:#2196f3;--color-background:--u2-color-mod(var(--base-color), 60);--color-on-background:--u2-color-mod(var(--base-color), 900);--color-surface:--u2-color-mod(var(--base-color), 60);--color-on-surface:--u2-color-mod(var(--base-color), 900);--color-surface-variant:--u2-color-mod(var(--base-color), 160);--color-on-surface-variant:--u2-color-mod(var(--base-color), 700);--color-outline:--u2-color-mod(var(--base-color), 300);--color-outline-variant:--u2-color-mod(var(--base-color), 400);--color-surface-container-lowest:--u2-color-mod(var(--base-color), 40);--color-surface-container-low:--u2-color-mod(var(--base-color), 30);--color-surface-container:--u2-color-mod(var(--base-color), 20);--color-surface-container-high:--u2-color-mod(var(--base-color), 5);--color-surface-container-highest:--u2-color-mod(var(--base-color), 2);--color-primary-container:--u2-color-mod(var(--base-color), 160);--color-on-primary-container:--u2-color-mod(var(--base-color), 900);--color-border:color-mix(in oklab, var(--color-outline-variant) 75%, transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}:host[data-theme=dark],:root[data-theme=dark],[data-theme=dark]{color-scheme:dark only;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab, var(--base-color) 60%, gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized), 940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized), 70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color), 920);--color-secondary:--u2-color-mod(var(--base-color), 680);--color-on-secondary:--u2-color-mod(var(--base-color), 920);--color-tertiary:--u2-color-mod(var(--base-color), 700);--color-on-tertiary:--u2-color-mod(var(--base-color), 920);--color-error:#f87171;--color-on-error:--u2-color-mod(var(--color-error), 920);--color-success:#66bb6a;--color-warning:#ffa726;--color-info:#42a5f5;--color-background:--u2-color-mod(var(--base-color), 940);--color-on-background:--u2-color-mod(var(--base-color), 100);--color-surface:--u2-color-mod(var(--base-color), 940);--color-on-surface:--u2-color-mod(var(--base-color), 100);--color-surface-variant:--u2-color-mod(var(--base-color), 840);--color-on-surface-variant:--u2-color-mod(var(--base-color), 280);--color-outline:--u2-color-mod(var(--base-color), 720);--color-outline-variant:--u2-color-mod(var(--base-color), 640);--color-surface-container-lowest:--u2-color-mod(var(--base-color), 920);--color-surface-container-low:--u2-color-mod(var(--base-color), 940);--color-surface-container:--u2-color-mod(var(--base-color), 960);--color-surface-container-high:--u2-color-mod(var(--base-color), 980);--color-surface-container-highest:--u2-color-mod(var(--base-color), 1000);--color-primary-container:--u2-color-mod(var(--base-color), 820);--color-on-primary-container:--u2-color-mod(var(--base-color), 100);--color-border:color-mix(in oklab, var(--color-outline-variant) 70%, transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}:root[data-scheme=auto]:not([data-theme=light]):not([data-theme=dark]),:root[data-scheme=system]:not([data-theme=light]):not([data-theme=dark]){color-scheme:light dark}@media (prefers-reduced-motion:reduce){:root{--transition-fast:0ms;--transition-normal:0ms;--transition-slow:0ms;--motion-fast:0ms;--motion-normal:0ms;--motion-slow:0ms;--duration-fast:0ms;--duration-normal:0ms;--duration-slow:0ms}}@media (prefers-contrast:high){:root{--color-border:var(--color-border, var(--color-outline));--color-border-hover:color-mix(in oklab, var(--color-border, var(--color-outline)) 80%, var(--color-on-surface, var(--color-on-surface)));--color-text-secondary:var(--color-on-surface, var(--color-on-surface));--color-text-muted:var(--color-on-surface-variant, var(--color-on-surface-variant))}}@media print{:root{--view-padding:0;--view-content-max-width:100%;--view-bg:white;--view-fg:black;--view-heading-color:black;--view-link-color:black}:root:has([data-view=viewer]){--view-code-bg:#f5f5f5;--view-code-fg:black;--view-blockquote-bg:#f5f5f5}}}@layer components{ui-icon{--icon-color:currentColor;--icon-size:1rem;--icon-padding:0.125rem;aspect-ratio:1;color:var(--icon-color);display:inline-grid;margin-inline-end:.125rem;place-content:center;place-items:center;vertical-align:middle}ui-icon:last-child{margin-inline-end:0}}@property --client-x{initial-value:0;syntax:\"<number>\";inherits:true}@property --client-y{initial-value:0;syntax:\"<number>\";inherits:true}@property --page-x{initial-value:0;syntax:\"<number>\";inherits:true}@property --page-y{initial-value:0;syntax:\"<number>\";inherits:true}@property --sp-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --sp-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ds-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ds-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rx{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ry{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rs-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rs-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --limit-shift-x{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-shift-y{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-drag-x{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-drag-y{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --bound-inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --bound-block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --initial-inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --initial-block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --scroll-coef{syntax:\"<number>\";initial-value:1;inherits:true}@property --scroll-size{syntax:\"<number>\";initial-value:0;inherits:true}@property --content-size{syntax:\"<number>\";initial-value:0;inherits:true}@property --max-size{syntax:\"<length-percentage>\";initial-value:0px;inherits:true}";
//#endregion
//#region ../../modules/projects/veela.css/src/scss/index.scss?inline
var scss_default = "@function --hsv(--src-color <color>) returns <color>{result:hsl(from var(--src-color,black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100)/alpha)}@property --color-primary{syntax:\"<color>\";inherits:true;initial-value:#5a9ec8}@property --base-color{syntax:\"<color>\";inherits:true;initial-value:#5a9ec8}@property --wallpaper-underlying-color{syntax:\"<color>\";inherits:true;initial-value:#16161a}@property --wallpaper-contrast-color{syntax:\"<color>\";inherits:true;initial-value:#f7f7f8}@property --color-secondary{syntax:\"<color>\";inherits:true;initial-value:#6b8cff}@property --color-tertiary{syntax:\"<color>\";inherits:true;initial-value:#8aa0ff}@property --color-error{syntax:\"<color>\";inherits:true;initial-value:#ef4444}@property --color-success{syntax:\"<color>\";inherits:true;initial-value:#4caf50}@property --color-warning{syntax:\"<color>\";inherits:true;initial-value:#ff9800}@property --color-info{syntax:\"<color>\";inherits:true;initial-value:#2196f3}@function --u2-color-mod(--base-color <color>, --index <number> : 550) returns <color>{--i:clamp(0, var(--index), 1000);--pivot:550;--white-distance:clamp(0, calc((var(--pivot) - var(--i)) / var(--pivot)), 1);--black-distance:clamp(0, calc((var(--i) - var(--pivot)) / (1000 - var(--pivot))), 1);--to-white:pow(var(--white-distance), 1.15);--to-black:pow(var(--black-distance), 1.08);--center-left:clamp(0, calc(var(--i) / var(--pivot)), 1);--center-right:clamp(0, calc((1000 - var(--i)) / (1000 - var(--pivot))), 1);--chroma-shape:sqrt(min(var(--center-left), var(--center-right)));--chroma-scale:calc(0.08 + 0.92 * var(--chroma-shape));result:oklch(from var(--base-color) calc(l + (.985 - l) * var(--to-white) + (.16 - l) * var(--to-black)) calc(c * var(--chroma-scale)) h)}@layer tokens, base, layout, components, utilities, theme, overrides, print;@layer tokens{:host,:root,:scope{--color-primary:#5a9ec8;color-scheme:light dark;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab, var(--base-color) 60%, gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized), 940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized), 70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color), 40);--color-secondary:--u2-color-mod(var(--base-color), 420);--color-on-secondary:--u2-color-mod(var(--base-color), 40);--color-tertiary:--u2-color-mod(var(--base-color), 400);--color-on-tertiary:--u2-color-mod(var(--base-color), 40);--color-error:#ef4444;--color-on-error:--u2-color-mod(var(--color-error), 40);--color-success:#4caf50;--color-warning:#ff9800;--color-info:#2196f3;--color-background:--u2-color-mod(var(--base-color), 60);--color-on-background:--u2-color-mod(var(--base-color), 900);--color-surface:--u2-color-mod(var(--base-color), 60);--color-on-surface:--u2-color-mod(var(--base-color), 900);--color-surface-variant:--u2-color-mod(var(--base-color), 160);--color-on-surface-variant:--u2-color-mod(var(--base-color), 700);--color-outline:--u2-color-mod(var(--base-color), 300);--color-outline-variant:--u2-color-mod(var(--base-color), 400);--color-surface-container-lowest:--u2-color-mod(var(--base-color), 40);--color-surface-container-low:--u2-color-mod(var(--base-color), 30);--color-surface-container:--u2-color-mod(var(--base-color), 20);--color-surface-container-high:--u2-color-mod(var(--base-color), 5);--color-surface-container-highest:--u2-color-mod(var(--base-color), 2);--color-primary-container:--u2-color-mod(var(--base-color), 160);--color-on-primary-container:--u2-color-mod(var(--base-color), 900);--color-border:color-mix(in oklab, var(--color-outline-variant) 75%, transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container);--space-2xs:0.125rem;--space-xs:0.25rem;--space-sm:0.5rem;--space-md:0.75rem;--space-lg:1rem;--space-xl:1.25rem;--space-2xl:1.5rem;--padding-xs:var(--space-xs);--padding-sm:var(--space-sm);--padding-md:var(--space-md);--padding-lg:var(--space-lg);--padding-xl:var(--space-xl);--padding-2xl:var(--space-2xl);--padding-3xl:2rem;--padding-4xl:2.5rem;--padding-5xl:3rem;--padding-6xl:4rem;--padding-7xl:5rem;--padding-8xl:6rem;--padding-9xl:8rem;--gap-xs:var(--space-xs);--gap-sm:var(--space-sm);--gap-md:var(--space-md);--gap-lg:var(--space-lg);--gap-xl:var(--space-xl);--gap-2xl:var(--space-2xl);--fl-ui-gap:var(--space-md);--radius-none:0;--radius-xs:0.25rem;--radius-sm:0.25rem;--radius-default:0.25rem;--radius-md:0.5rem;--radius-lg:0.75rem;--radius-xl:1rem;--radius-2xl:1.75rem;--radius-3xl:2rem;--radius-full:9999px;--fl-ui-radius:var(--radius-md);--border-radius:var(--radius-md);--shape-extra-small:var(--radius-xs);--shape-small:var(--radius-md);--shape-medium:var(--radius-lg);--shape-large:var(--radius-xl);--shape-extra-large:var(--radius-2xl);--shape-full:var(--radius-full);--elev-0:none;--elev-1:0 1px 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);--elev-2:0 2px 6px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08);--elev-3:0 6px 16px rgba(0, 0, 0, 0.14), 0 18px 48px rgba(0, 0, 0, 0.1);--shadow-xs:0 1px 2px rgba(0, 0, 0, 0.05);--shadow-sm:0 1px 3px rgba(0, 0, 0, 0.1);--shadow-md:0 4px 6px rgba(0, 0, 0, 0.1);--shadow-lg:0 10px 15px rgba(0, 0, 0, 0.1);--shadow-xl:0 20px 25px rgba(0, 0, 0, 0.1);--shadow-2xl:0 25px 50px rgba(0, 0, 0, 0.1);--shadow-inset:inset 0 2px 4px rgba(0, 0, 0, 0.06);--shadow-inset-strong:inset 0 4px 8px rgba(0, 0, 0, 0.12);--shadow-none:0 0 #0000;--text-xs:0.8rem;--text-sm:0.9rem;--text-base:1rem;--text-lg:1.1rem;--text-xl:1.25rem;--text-2xl:1.6rem;--text-3xl:2rem;--font-xs:var(--text-xs);--font-sm:var(--text-sm);--font-base:var(--text-base);--font-md:var(--text-base);--font-lg:var(--text-lg);--font-xl:var(--text-xl);--font-2xl:var(--text-2xl);--ui-icon-size:1.25rem;--ui-icon-padding:0px;--ui-icon-tile-padding:0.45rem;--ui-window-icon-size:0.95rem;--ui-explorer-icon-size:1.5rem;--ui-explorer-icon-track:2rem;--ui-explorer-action-icon-size:1.15rem;--ui-explorer-row-height:3.25rem;--icon-size-sm:var(--ui-icon-size);--icon-size-md:var(--ui-icon-size);--icon-size-lg:var(--ui-explorer-icon-size);--font-size-xs:0.75rem;--font-size-sm:0.875rem;--font-size-base:1rem;--font-size-lg:1.125rem;--font-size-xl:1.25rem;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-family:\"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;--font-family-base:var(--font-family);--font-family-mono:\"Roboto Mono\", \"SF Mono\", Monaco, Inconsolata, \"Fira Code\", monospace;--font-sans:var(--font-family);--font-mono:var(--font-family-mono);--leading-tight:1.2;--leading-normal:1.5;--leading-relaxed:1.8;--line-height:var(--leading-normal);--ease-emphasized:cubic-bezier(0.2, 0, 0, 1);--ease-expressive:cubic-bezier(0.34, 1.25, 0.64, 1);--duration-fast:140ms;--duration-normal:220ms;--duration-slow:360ms;--transition-fast:var(--duration-fast) var(--ease-emphasized);--transition-normal:var(--duration-normal) var(--ease-emphasized);--transition-slow:var(--duration-slow) var(--ease-emphasized);--motion-fast:var(--transition-fast);--motion-normal:var(--transition-normal);--motion-slow:var(--transition-slow);--ease-out:cubic-bezier(0, 0, 0.2, 1);--ease-in:cubic-bezier(0.4, 0, 1, 1);--ease-in-out:cubic-bezier(0.4, 0, 0.2, 1);--focus-ring:0 0 0 3px color-mix(in oklab, var(--color-primary) 35%, transparent);--z-base:0;--z-dropdown:100;--z-sticky:200;--z-fixed:300;--z-modal-backdrop:400;--z-modal:500;--z-popover:600;--z-tooltip:700;--z-toast:800;--z-max:9999;--view-bg:var(--color-container);--view-fg:var(--color-on-surface);--view-border:var(--color-outline-variant);--view-input-bg:light-dark(\n        --u2-color-mod(var(--base-color, var(--color-primary)), 40),\n        var(--color-surface-container-high)\n    );--view-files-bg:var(--color-surface-container-low);--view-file-bg:var(--color-surface-container-lowest, var(--color-surface-container-low));--view-results-bg:var(--color-surface-container-low);--view-result-bg:var(--color-surface-container-lowest, var(--color-surface-container-low));--color-surface-elevated:var(--color-surface-container);--color-surface-hover:var(--color-surface-container-low);--color-surface-active:var(--color-surface-container-high);--color-on-surface-muted:var(--color-on-surface-variant);--color-background-alt:var(--color-surface-variant);--color-primary-hover:light-dark(\n        --u2-color-mod(var(--base-color, var(--color-primary)), 620),\n        --u2-color-mod(var(--base-color, var(--color-primary)), 480)\n    );--color-primary-active:light-dark(\n        --u2-color-mod(var(--base-color, var(--color-primary)), 700),\n        --u2-color-mod(var(--base-color, var(--color-primary)), 400)\n    );--color-accent:var(--color-secondary);--color-accent-hover:light-dark(\n        --u2-color-mod(var(--base-color, var(--color-primary)), 500),\n        --u2-color-mod(var(--base-color, var(--color-primary)), 600)\n    );--color-on-accent:var(--color-on-secondary);--color-border-hover:var(--color-outline-variant);--color-border-strong:var(--color-outline);--color-border-focus:var(--color-primary);--color-text:var(--color-on-surface);--color-text-secondary:var(--color-on-surface-variant);--color-text-muted:color-mix(in oklab, var(--color-on-surface) 50%, var(--color-surface));--color-text-disabled:color-mix(in oklab, var(--color-on-surface) 38%, var(--color-surface));--color-text-inverse:var(--color-on-primary);--color-link:var(--color-primary);--color-link-hover:var(--color-primary-hover);--color-success-light:--u2-color-mod(var(--color-success), 280);--color-success-dark:--u2-color-mod(var(--color-success), 720);--color-warning-light:--u2-color-mod(var(--color-warning), 280);--color-warning-dark:--u2-color-mod(var(--color-warning), 720);--color-error-light:--u2-color-mod(var(--color-error), 280);--color-error-dark:--u2-color-mod(var(--color-error), 720);--color-info-light:--u2-color-mod(var(--color-info), 280);--color-info-dark:--u2-color-mod(var(--color-info), 720);--color-bg:var(--color-surface, var(--color-surface));--color-bg-alt:var(--color-surface-variant, var(--color-surface-variant));--color-fg:var(--color-on-surface, var(--color-on-surface));--color-fg-muted:var(--color-on-surface-variant, var(--color-on-surface-variant));--touch-min:3rem;--btn-height-sm:2rem;--btn-height-md:var(--touch-min);--btn-height-lg:3.5rem;--btn-padding-x-sm:var(--space-md);--btn-padding-x-md:var(--space-lg);--btn-padding-x-lg:1.5rem;--btn-radius:var(--radius-md);--btn-font-weight:var(--font-weight-medium);--input-height-sm:2rem;--input-height-md:var(--touch-min);--input-height-lg:3.5rem;--state-opacity-hover:0.08;--state-opacity-press:0.12;--state-opacity-focus:0.12;--state-opacity-disabled:0.38;--state-opacity-drag:0.16;--input-padding-x:var(--space-md);--input-radius:var(--radius-md);--input-border-color:var(--color-border, var(--color-border));--input-focus-ring-color:var(--color-primary);--input-focus-ring-width:2px;--card-padding:var(--space-lg);--card-radius:var(--radius-lg);--card-shadow:var(--shadow-sm);--card-border-color:var(--color-border, var(--color-border));--modal-backdrop-bg:light-dark(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.7));--modal-bg:var(--color-surface, var(--color-surface));--modal-radius:var(--radius-xl);--modal-shadow:var(--shadow-xl);--modal-padding:1.5rem;--toast-font-family:var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);--toast-font-size:var(--font-size-base, 1rem);--toast-font-weight:var(--font-weight-medium, 500);--toast-letter-spacing:0.01em;--toast-line-height:1.4;--toast-white-space:nowrap;--toast-pointer-events:auto;--toast-user-select:none;--toast-cursor:default;--toast-opacity:0;--toast-transform:translateY(100%) scale(0.9);--toast-transition:opacity 160ms ease-out, transform 160ms cubic-bezier(0.16, 1, 0.3, 1), background-color 100ms ease;--toast-text:var(--color-on-surface, var(--color-on-surface, light-dark(#ffffff, #000000)));--toast-bg:color-mix(in oklab, var(--color-surface-elevated, var(--color-surface-container-high, var(--color-surface, light-dark(#fafbfc, #1e293b)))) 90%, var(--color-on-surface, var(--color-on-surface, light-dark(#000000, #ffffff))));--toast-radius:var(--radius-lg);--toast-shadow:var(--shadow-lg);--toast-padding:var(--space-lg);--sidebar-width:280px;--sidebar-collapsed-width:64px;--nav-height:56px;--nav-height-compact:48px;--status-height:24px;--status-bg:var(--color-surface-elevated, var(--color-surface-container-high));--status-font-size:var(--text-xs);--shell-bg:var(--sv-surface-2, var(--color-surface));--shell-fg:var(--sv-on-surface, var(--color-on-surface));--shell-nav-bg:var(--sv-surface-2, var(--color-surface-container-high));--shell-nav-fg:var(--sv-on-surface, var(--color-on-surface));--shell-nav-border:var(--sv-outline-variant, var(--color-outline-variant));--shell-btn-hover:var(--sv-surface-2, var(--color-surface-container));--shell-btn-active-bg:color-mix(in oklab, var(--color-primary) 18%, var(--sv-surface-2, var(--color-surface)));--shell-btn-active-fg:var(--sv-on-surface, var(--color-on-surface));--shell-status-bg:var(--sv-surface-1, var(--color-surface-container-low));--shell-status-fg:var(--sv-on-surface, var(--color-on-surface));--faint-nav-bg:var(--color-surface-container-high);--faint-nav-border:var(--color-outline-variant);--faint-sidebar-bg:var(--color-surface-container-high);--env-status-fg:light-dark(#1c1c1e, #f5f5f7);--env-status-fg-muted:color-mix(in oklab, var(--env-status-fg) 78%, transparent);--env-launcher-fg:var(--wallpaper-contrast-color);--env-launcher-fg-shadow:color-mix(in oklab, var(--wallpaper-underlying-color) 88%, transparent);--env-launcher-fg-glow:color-mix(in oklab, var(--wallpaper-underlying-color) 48%, transparent);--error-color:var(--color-error, #f87171);--sv-bg:var(--sv-surface-2, var(--color-surface-container-low, light-dark(#eef1f6, #0f1318)));--sv-fg:var(--sv-on-surface, var(--color-on-surface, light-dark(#12151a, #e8edf2)));--sv-muted:var(--sv-on-surface-variant, var(--color-on-surface-variant, light-dark(#5c6570, #a8b0bc)));--sv-outline:var(--sv-outline-variant, var(--color-outline-variant, light-dark(#c5cdd8, #3d4755)));--sv-surface-1:var(--color-surface-container-low, light-dark(#ffffff, #171c24));--sv-surface-2:var(--color-surface-container, light-dark(#f4f6fa, #1c232d));--sv-primary:var(--base-color, var(--color-primary, #5a9ec8));--sv-danger:var(--color-error, #d32f2f);--vh-bg:var(--color-surface, light-dark(#eef1f6, #0f1318));--vh-fg:var(--color-on-surface, light-dark(#12151a, #e8edf2));--vh-muted:var(--color-on-surface-variant, light-dark(#5c6570, #a8b0bc));--vh-primary:var(--color-primary, #007acc);--vh-danger:var(--color-error, #d32f2f);--vh-on-primary:var(--color-on-primary, #ffffff);--vh-item-bg:var(--color-surface-container-low, light-dark(#e0e5ee, #0a0d12));--view-fg-muted:color-mix(in oklab, var(--color-on-surface, #ccc) 72%, transparent);--view-hover-bg:color-mix(in oklab, var(--color-primary, #3794ff) 12%, transparent);--view-selected-bg:color-mix(in oklab, var(--color-primary, #3794ff) 18%, transparent);--view-selected-border:var(--color-primary, #3794ff)}@supports (color:color-mix(in lch,red,blue)){:host,:root,:scope{--view-border:color-mix(in oklab, var(--color-outline-variant, #888) 45%, transparent)}}@media (prefers-color-scheme:dark){:host:not([data-theme=light]):not([data-theme=dark]),:root:not([data-theme=light]):not([data-theme=dark]){color-scheme:dark;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab, var(--base-color) 60%, gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized), 940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized), 70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color), 920);--color-secondary:--u2-color-mod(var(--base-color), 680);--color-on-secondary:--u2-color-mod(var(--base-color), 920);--color-tertiary:--u2-color-mod(var(--base-color), 700);--color-on-tertiary:--u2-color-mod(var(--base-color), 920);--color-error:#f87171;--color-on-error:--u2-color-mod(var(--color-error), 920);--color-success:#66bb6a;--color-warning:#ffa726;--color-info:#42a5f5;--color-background:--u2-color-mod(var(--base-color), 940);--color-on-background:--u2-color-mod(var(--base-color), 100);--color-surface:--u2-color-mod(var(--base-color), 940);--color-on-surface:--u2-color-mod(var(--base-color), 100);--color-surface-variant:--u2-color-mod(var(--base-color), 840);--color-on-surface-variant:--u2-color-mod(var(--base-color), 280);--color-outline:--u2-color-mod(var(--base-color), 720);--color-outline-variant:--u2-color-mod(var(--base-color), 640);--color-surface-container-lowest:--u2-color-mod(var(--base-color), 920);--color-surface-container-low:--u2-color-mod(var(--base-color), 940);--color-surface-container:--u2-color-mod(var(--base-color), 960);--color-surface-container-high:--u2-color-mod(var(--base-color), 980);--color-surface-container-highest:--u2-color-mod(var(--base-color), 1000);--color-primary-container:--u2-color-mod(var(--base-color), 820);--color-on-primary-container:--u2-color-mod(var(--base-color), 100);--color-border:color-mix(in oklab, var(--color-outline-variant) 70%, transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}}:host[data-theme=light],:root[data-theme=light],[data-theme=light]{color-scheme:light only;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab, var(--base-color) 60%, gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized), 940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized), 70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color), 40);--color-secondary:--u2-color-mod(var(--base-color), 420);--color-on-secondary:--u2-color-mod(var(--base-color), 40);--color-tertiary:--u2-color-mod(var(--base-color), 400);--color-on-tertiary:--u2-color-mod(var(--base-color), 40);--color-error:#ef4444;--color-on-error:--u2-color-mod(var(--color-error), 40);--color-success:#4caf50;--color-warning:#ff9800;--color-info:#2196f3;--color-background:--u2-color-mod(var(--base-color), 60);--color-on-background:--u2-color-mod(var(--base-color), 900);--color-surface:--u2-color-mod(var(--base-color), 60);--color-on-surface:--u2-color-mod(var(--base-color), 900);--color-surface-variant:--u2-color-mod(var(--base-color), 160);--color-on-surface-variant:--u2-color-mod(var(--base-color), 700);--color-outline:--u2-color-mod(var(--base-color), 300);--color-outline-variant:--u2-color-mod(var(--base-color), 400);--color-surface-container-lowest:--u2-color-mod(var(--base-color), 40);--color-surface-container-low:--u2-color-mod(var(--base-color), 30);--color-surface-container:--u2-color-mod(var(--base-color), 20);--color-surface-container-high:--u2-color-mod(var(--base-color), 5);--color-surface-container-highest:--u2-color-mod(var(--base-color), 2);--color-primary-container:--u2-color-mod(var(--base-color), 160);--color-on-primary-container:--u2-color-mod(var(--base-color), 900);--color-border:color-mix(in oklab, var(--color-outline-variant) 75%, transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}:host[data-theme=dark],:root[data-theme=dark],[data-theme=dark]{color-scheme:dark only;--base-color:var(--color-primary);--base-color-neutralized:color-mix(in oklab, var(--base-color) 60%, gray);--wallpaper-underlying-color:--u2-color-mod(var(--base-color-neutralized), 940);--wallpaper-contrast-color:--u2-color-mod(var(--base-color-neutralized), 70);--wf-md-primary:var(--color-primary);--wf-md-seed:var(--base-color);--color-on-primary:--u2-color-mod(var(--base-color), 920);--color-secondary:--u2-color-mod(var(--base-color), 680);--color-on-secondary:--u2-color-mod(var(--base-color), 920);--color-tertiary:--u2-color-mod(var(--base-color), 700);--color-on-tertiary:--u2-color-mod(var(--base-color), 920);--color-error:#f87171;--color-on-error:--u2-color-mod(var(--color-error), 920);--color-success:#66bb6a;--color-warning:#ffa726;--color-info:#42a5f5;--color-background:--u2-color-mod(var(--base-color), 940);--color-on-background:--u2-color-mod(var(--base-color), 100);--color-surface:--u2-color-mod(var(--base-color), 940);--color-on-surface:--u2-color-mod(var(--base-color), 100);--color-surface-variant:--u2-color-mod(var(--base-color), 840);--color-on-surface-variant:--u2-color-mod(var(--base-color), 280);--color-outline:--u2-color-mod(var(--base-color), 720);--color-outline-variant:--u2-color-mod(var(--base-color), 640);--color-surface-container-lowest:--u2-color-mod(var(--base-color), 920);--color-surface-container-low:--u2-color-mod(var(--base-color), 940);--color-surface-container:--u2-color-mod(var(--base-color), 960);--color-surface-container-high:--u2-color-mod(var(--base-color), 980);--color-surface-container-highest:--u2-color-mod(var(--base-color), 1000);--color-primary-container:--u2-color-mod(var(--base-color), 820);--color-on-primary-container:--u2-color-mod(var(--base-color), 100);--color-border:color-mix(in oklab, var(--color-outline-variant) 70%, transparent);--color-bg:var(--color-background);--color-text:var(--color-on-background);--color-fg:var(--color-on-surface);--on-surface-color:var(--color-on-surface);--surface-color:var(--color-surface);--fl-surface:var(--color-surface);--fl-on-surface:var(--color-on-surface);--fl-primary:var(--color-primary);--fl-on-primary:var(--color-on-primary);--fl-secondary:var(--color-secondary);--fl-on-secondary:var(--color-on-secondary);--fl-shadow-xl:var(--shadow-xl);--on-surface-variant:var(--color-on-surface-variant);--wf-md-surface:var(--color-surface);--wf-md-on-surface:var(--color-on-surface);--wf-md-on-surface-variant:var(--color-on-surface-variant);--wf-md-surf-container:var(--color-surface-container);--wf-md-surf-container-low:var(--color-surface-container-low);--wf-md-surf-container-high:var(--color-surface-container-high);--wf-md-outline-variant:var(--color-outline-variant);--md3-primary-container:var(--color-primary-container);--md-primary-container:var(--color-primary-container)}:root[data-scheme=auto]:not([data-theme=light]):not([data-theme=dark]),:root[data-scheme=system]:not([data-theme=light]):not([data-theme=dark]){color-scheme:light dark}@media (prefers-reduced-motion:reduce){:root{--transition-fast:0ms;--transition-normal:0ms;--transition-slow:0ms;--motion-fast:0ms;--motion-normal:0ms;--motion-slow:0ms;--duration-fast:0ms;--duration-normal:0ms;--duration-slow:0ms}}@media (prefers-contrast:high){:root{--color-border:var(--color-border, var(--color-outline));--color-border-hover:color-mix(in oklab, var(--color-border, var(--color-outline)) 80%, var(--color-on-surface, var(--color-on-surface)));--color-text-secondary:var(--color-on-surface, var(--color-on-surface));--color-text-muted:var(--color-on-surface-variant, var(--color-on-surface-variant))}}@media print{:root{--view-padding:0;--view-content-max-width:100%;--view-bg:white;--view-fg:black;--view-heading-color:black;--view-link-color:black}:root:has([data-view=viewer]){--view-code-bg:#f5f5f5;--view-code-fg:black;--view-blockquote-bg:#f5f5f5}}}@layer components{ui-icon{--icon-color:currentColor;--icon-size:1rem;--icon-padding:0.125rem;aspect-ratio:1;color:var(--icon-color);display:inline-grid;margin-inline-end:.125rem;place-content:center;place-items:center;vertical-align:middle}ui-icon:last-child{margin-inline-end:0}}@property --client-x{initial-value:0;syntax:\"<number>\";inherits:true}@property --client-y{initial-value:0;syntax:\"<number>\";inherits:true}@property --page-x{initial-value:0;syntax:\"<number>\";inherits:true}@property --page-y{initial-value:0;syntax:\"<number>\";inherits:true}@property --sp-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --sp-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ds-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ds-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rx{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --ry{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rs-x{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --rs-y{initial-value:0px;syntax:\"<length-percentage>\";inherits:true}@property --limit-shift-x{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-shift-y{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-drag-x{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --limit-drag-y{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --bound-inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --bound-block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --initial-inline-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --initial-block-size{initial-value:100%;syntax:\"<length-percentage>\";inherits:true}@property --scroll-coef{syntax:\"<number>\";initial-value:1;inherits:true}@property --scroll-size{syntax:\"<number>\";initial-value:0;inherits:true}@property --content-size{syntax:\"<number>\";initial-value:0;inherits:true}@property --max-size{syntax:\"<length-percentage>\";initial-value:0px;inherits:true}@layer base{@keyframes l{0%{opacity:0;transform:translateY(10%)}to{opacity:1;transform:translateY(0)}}@media screen{*,:after,:before{box-sizing:border-box;dynamic-range-limit:initial}:where(html){-webkit-text-size-adjust:100%;font-optical-sizing:auto;font-size-adjust:from-font;tab-size:4;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:none;background-color:initial;border:0 transparent;dynamic-range-limit:initial;font-family:var(--font-sans);font-size:16px;line-height:1.5;outline:0 none transparent;text-rendering:optimizeLegibility}:where(body){background:var(--color-bg);block-size:fit-content;color:var(--color-text);inset:0;line-height:var(--line-height);margin:0;min-block-size:min(var(--lv-height,100lvb),100cqb);padding:0;-webkit-font-smoothing:antialiased;background:none;background-color:initial;border:0 transparent;dynamic-range-limit:initial;outline:0 none transparent;text-rendering:optimizeLegibility}:where(ul,ol){list-style:none;margin:0;padding:0}:where(blockquote,q){quotes:none}:where(blockquote,q):after,:where(blockquote,q):before{content:\"\";content:none}:where(article,main,aside,section,header,footer,nav){border:0 transparent;box-shadow:0 none transparent;outline:0 none transparent}:where(table){border:1px solid var(--color-border);border-collapse:collapse;border-radius:var(--border-radius);border-spacing:0;display:block;inline-size:max-content;margin-block:1rem;max-inline-size:100%;overflow-x:auto}:where(table) :where(th,td){border-block-end:1px solid var(--color-border);padding:.5rem 1rem;text-align:start}:where(table) :where(th){background-color:var(--color-table);color:var(--color-text);font-weight:700}:where(table) :where(tr:last-child td){border-block-end:none}:where(table) :where(tr:nth-child(2n)){background-color:var(--color-bg-secondary)}:focus-visible{border-radius:var(--radius-sm);box-shadow:0 0 0 3px color-mix(in oklab,var(--color-primary,#5a7fff) 35%,transparent);outline:none}:focus:not(:focus-visible){outline:none}:where(button,input,optgroup,select,textarea){border:0 transparent;box-shadow:0 none transparent;color:inherit;font:inherit;letter-spacing:inherit;line-height:1.15;margin:0;outline:none;outline:0 none transparent}:where(button){appearance:none;background:transparent;border:none;cursor:pointer;gap:.25rem;min-block-size:fit-content;min-inline-size:fit-content;padding-block:.5rem;padding-inline:1rem;pointer-events:auto;text-transform:none;user-select:none}:where(button):has(>ui-icon:only-child){aspect-ratio:1/1;place-content:center;place-items:center}:where(button):disabled{cursor:not-allowed;pointer-events:none}:where(select){text-transform:none}:where(button,[type=button],[type=reset],[type=submit]){-webkit-appearance:button;cursor:pointer}:where(button,[type=button],[type=reset],[type=submit])::-moz-focus-inner{border-style:none;padding:0}:where(fieldset,dialog){border:none;margin:0;padding:0}:where(legend){padding:0}:where(progress){vertical-align:initial}:where(textarea){overflow:auto;resize:vertical}:where([type=search]){-webkit-appearance:textfield;outline-offset:-2px}:where([type=search])::-webkit-search-decoration{-webkit-appearance:none}:where([type=range]){-webkit-appearance:none}:where(details>summary),:where(summary){cursor:pointer}:where(mark){background-color:initial;color:inherit}:where(sub,sup){font-size:75%;line-height:0;position:relative;vertical-align:initial}:where(sup){top:-.5em}:where(sub){bottom:-.25em}:where(a){color:var(--color-link,inherit);cursor:pointer;pointer-events:auto;text-decoration:inherit;text-underline-offset:.2em;transition:color var(--transition-fast)}:where(a):hover{color:var(--color-primary-hover)}:where(img,canvas,svg,video,iframe,picture){block-size:auto;border:0 transparent;box-shadow:0 none transparent;dynamic-range-limit:initial;max-inline-size:100%;outline:0 none transparent}:where(img,video,canvas,svg,picture){block-size:auto;display:block;max-inline-size:100%}:where(img,video){object-fit:contain;object-position:center}:where(picture){display:contents}:where(iframe){block-size:auto;max-inline-size:100%}:where(em,i){font-style:normal}:where(strong,b){font-weight:400}:where(code,kbd,samp,pre){font-family:var(--font-family-mono,\"SF Mono\",\"Monaco\",\"Inconsolata\",\"Roboto Mono\",monospace);font-size:1em}:where(code,pre){font-family:var(--font-mono);font-size:.875em}:where(:not(pre)>code,samp,kbd){background-color:var(--bgColor-muted);border-radius:.3em;font-family:var(--font-family-mono,\"SF Mono\",\"Monaco\",\"Roboto Mono\",monospace);font-size:85%;padding:.2em .4em}:where(:not(pre)>code){background:var(--color-bg-alt);border-radius:var(--radius-sm);padding:.125em .25em}:where(pre){background:var(--color-bg-alt);border-radius:var(--radius-md);overflow-x:auto;padding:var(--space-md)}:where(pre) :where(code){background:transparent;border-radius:0;display:block;padding:0}:where(input,textarea,select,button,option){accent-color:var(--color-link,currentColor);border:0 transparent;box-shadow:0 none transparent;font-variant-emoji:text;outline:0 none transparent}:where(span){font-variant-emoji:text}:where(hr){border:none;border-block-start:1px solid var(--color-border);margin-block:var(--space-lg)}::-webkit-scrollbar{block-size:8px;inline-size:8px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--color-outline-variant,#d1d5db);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:var(--color-outline,#9ca3af)}*{scrollbar-color:var(--color-outline-variant,#d1d5db) transparent;scrollbar-width:thin}:where(input,textarea,select){background-color:var(--color-bg-alt);border:0 solid var(--color-border);border-radius:var(--border-radius);color:var(--color-fg);font-size:var(--font-size-base);inline-size:100%;padding:.5rem}:where(input,textarea,select):focus{border-color:var(--color-primary);outline:none}:where(input,textarea,select)::placeholder{color:var(--color-text-secondary);opacity:.7}:where(input,textarea,select):disabled{background-color:var(--color-bg-secondary);cursor:not-allowed;opacity:.5}:where(input):-webkit-autofill:first-line,:where(input):autofill:first-line{font-size:1em;text-size-adjust:100%}:where(input):-internal-autofill-previewed{letter-spacing:calc(1em / 10)!important}:where(input):is([type=radio],[type=checkbox]){accent-color:var(--color-primary);aspect-ratio:1/1;block-size:1rem;inline-size:1rem}:where(label){font-weight:600;margin-block-end:.25rem;pointer-events:none;user-select:none}:where(h1,h2,h3,h4,h5,h6){font-weight:600;line-height:1.2;margin-block:.5em;text-wrap:balance}:where(h1){font-size:2rem}:where(h2){font-size:1.5rem}:where(h3){font-size:1.25rem}:where(h4){font-size:1.125rem}:where(h5){font-size:1rem}:where(h6){font-size:.875rem}:where(p){margin-block:1em;text-wrap:pretty}:where(article,.content) :is(ol,ul){margin-block:var(--space-md);padding-inline-start:var(--space-lg)}:where(article,.content) ul{list-style:disc}:where(article,.content) ol{list-style:decimal}:where(blockquote){border-inline-start:.25rem solid var(--color-secondary);color:var(--color-text-secondary);font-style:italic;margin-inline:1rem;padding-inline:1rem}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable){scrollbar-color:var(--color-scrollbar,currentColor) transparent;scrollbar-width:thin}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar{block-size:var(--scrollbar-size,8px);inline-size:var(--scrollbar-size,8px)}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar-track{background:transparent}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar-thumb{background-color:var(--color-scrollbar,currentColor);border-radius:var(--border-radius,4px)}:where(body,main,aside,pre,code,textarea,[data-scrollable],.scrollable)::-webkit-scrollbar-thumb:hover{background:var(--color-outline,#9ca3af)}:where(link,head,script,style,meta),[hidden]{display:none!important}:where(link,head,script,style,meta){pointer-events:none!important}[aria-hidden=true]{opacity:0;pointer-events:none;visibility:collapse}[data-dragging]{cursor:grabbing;will-change:transform}:where(a,button,[role=button]){-webkit-tap-highlight-color:transparent}}@media screen and (prefers-reduced-motion:reduce){*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}}@layer layout{@media screen{:where(footer,header,main){margin-inline:auto;padding:0}:where(header){text-align:center}:where(nav){align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;margin-block-end:0}:where(nav) ul{display:flex;gap:1rem;list-style:none;margin:0;padding:0}:where(nav) ul li{position:relative}:where(nav) a{color:var(--color-link);font-weight:700;text-decoration:none}:where(section){display:flex;flex-wrap:wrap;gap:1rem;justify-content:var(--justify-important,center)}:where(section) :where(aside){border:1px solid var(--color-bg-secondary);border-radius:var(--border-radius);box-shadow:var(--box-shadow);flex:1 1 var(--width-card);inline-size:var(--width-card);padding:1.25rem}}}@layer components{@media screen{:where(dialog){background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--border-radius);box-shadow:var(--box-shadow);color:var(--color-text);margin:auto;max-block-size:85vh;max-inline-size:min(90vw,600px);padding:1rem}:where(dialog)::backdrop{background-color:rgba(0,0,0,.5)}:where(dialog)[open]{animation:l .25s ease-out}:where(button,input[type=submit],input[type=button]){align-items:center;background-color:var(--color-link);border:0 solid transparent;border-radius:var(--border-radius);cursor:pointer;display:inline-flex;font-weight:600;justify-content:center;padding:.5rem 1rem;transition:filter .2s ease,transform .1s ease}:where(button,input[type=submit],input[type=button]):disabled{background-color:var(--color-secondary);cursor:not-allowed;filter:none;opacity:.6}:where(canvas):is([is=ui-canvas]){background-color:initial!important;border:0 transparent!important;box-sizing:border-box!important;inset:0;inset-block-end:auto;margin:0;max-block-size:max(100%,min(100cqb,100lvb))!important;max-inline-size:max(100%,min(100cqi,100lvi))!important;min-block-size:0;min-inline-size:0;object-fit:cover;object-position:center;outline:0 none transparent!important;padding:0;pointer-events:none;position:fixed;z-index:0}}}@layer overrides{@media screen{[data-scheme=system],[data-theme=system]{color-scheme:light dark}[data-scheme=dark],[data-theme=dark]{color-scheme:dark only}[data-scheme=dark] *,[data-theme=dark] *{color-scheme:dark}[data-scheme=light],[data-theme=light]{color-scheme:light only}[data-scheme=light] *,[data-theme=light] *{color-scheme:light}[data-scheme=auto]:not([data-theme=light]):not([data-theme=dark]),[data-scheme=system]:not([data-theme=light]):not([data-theme=dark]),[data-theme=auto],[data-theme=system]{color-scheme:light dark}}}@layer layout{@media screen{:where(body)>:where(#app,#container,#root,.root){background-color:initial;border:0 transparent;outline:0 none transparent}:host,:root,:scope,:where(body){pointer-events:auto;transition-behavior:allow-discrete;interpolate-size:allow-keywords;content-visibility:auto;--keyboard-inset-bottom:calc(max(env(keyboard-inset-bottom, 0px), 0px) / max(var(--zoom, 1), 0.125));--keyboard-inset-height:calc(max(env(keyboard-inset-height, 0px), 0px) / max(var(--zoom, 1), 0.125))}:host,:root,:scope{--scale:1;--translate-x:0px;--translate-y:0px}:host,:host :where(*),:root,:root :where(*),:scope,:scope :where(*){--scale:1;--translate-x:0px;--translate-y:0px}:root,:where(html){background-color:initial;block-size:var(--lv-height,100lvb);border:0 transparent;contain:none;container-name:html root;container-type:size;display:flex;flex-direction:column;inline-size:stretch;inset:0;inset-block-end:auto;line-height:normal;margin:0;max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)))!important;max-inline-size:min(100%,min(100cqi,100dvi))!important;min-block-size:min(100cqb,var(--lv-height,100lvb));min-inline-size:min(100cqi,100dvi);outline:0 none transparent;overflow:visible;padding:0;place-content:start;place-items:start;place-self:start;position:fixed;transform:none;translate:none}:where(body){background-color:initial;block-size:stretch;border:0 transparent;contain:strict;container-name:body;container-type:size;display:inline-flex;font-size:var(--text-base,.9rem);inline-size:stretch;inset:auto;margin:0;max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)));max-inline-size:min(100%,min(100cqi,100dvi));min-block-size:0;min-inline-size:0;outline:0 none transparent;overflow:visible;padding:0;place-content:start;place-items:start;place-self:start;pointer-events:auto;position:relative;transform:none;translate:none}:where(body)>:where(#app,#container,#root,.root){block-size:stretch;inline-size:stretch;max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)));max-inline-size:min(100%,min(100cqi,100dvi));min-block-size:0;min-inline-size:0}:where(body)>:where(*){max-block-size:min(100%,min(100cqb,var(--lv-height,100lvb)));max-inline-size:min(100%,min(100cqi,100dvi))}}}@layer base{[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]),[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]) *{opacity:0;visibility:collapse}:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))),:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) *,:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) ::slotted(*){opacity:0;visibility:collapse}:host([data-hidden]:not([data-hidden=false])),:host([data-hidden]:not([data-hidden=false])) *,:host([data-hidden]:not([data-hidden=false])) ::slotted(*){user-select:none!important}[data-hidden]:not([data-hidden=false]),[data-hidden]:not([data-hidden=false]) *{user-select:none!important}[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]),[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]) *{content-visibility:auto!important;display:none!important;pointer-events:none!important;touch-action:none!important}:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))),:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) *,:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) ::slotted(*){content-visibility:auto!important;display:none!important;pointer-events:none!important;touch-action:none!important}:host([data-hidden]:not([data-hidden=false])),:host([data-hidden]:not([data-hidden=false])) *,:host([data-hidden]:not([data-hidden=false])) ::slotted(*){pointer-events:none!important;touch-action:none!important}[data-hidden]:not([data-hidden=false]),[data-hidden]:not([data-hidden=false]) *{pointer-events:none!important;touch-action:none!important}[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]),[data-hidden]:not([data-hidden=false]):not([data-opacity-animation]) *{display:none!important;opacity:0;pointer-events:none!important;touch-action:none!important;visibility:collapse}}@layer base{:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))),:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) *,:host([data-hidden]:not([data-hidden=false]:not([data-opacity-animation]))) ::slotted(*){display:none!important;opacity:0;pointer-events:none!important;touch-action:none!important;visibility:collapse}:host([data-hidden]:not([data-hidden=false])),:host([data-hidden]:not([data-hidden=false])) *,:host([data-hidden]:not([data-hidden=false])) ::slotted(*){pointer-events:none!important;touch-action:none!important;user-select:none!important}[data-hidden]:not([data-hidden=false]),[data-hidden]:not([data-hidden=false]) *{pointer-events:none!important;touch-action:none!important;user-select:none!important}}@layer utilities{.m-0{margin:0}.mb-0{margin-block:0}.mi-0{margin-inline:0}.p-0{padding:0}.pb-0{padding-block:0}.pi-0{padding-inline:0}.gap-0{gap:0}.inset-0{inset:0}.m-xs{margin:.25rem}.mb-xs{margin-block:.25rem}.mi-xs{margin-inline:.25rem}.p-xs{padding:.25rem}.pb-xs{padding-block:.25rem}.pi-xs{padding-inline:.25rem}.gap-xs{gap:.25rem}.inset-xs{inset:.25rem}.m-sm{margin:.5rem}.mb-sm{margin-block:.5rem}.mi-sm{margin-inline:.5rem}.p-sm{padding:.5rem}.pb-sm{padding-block:.5rem}.pi-sm{padding-inline:.5rem}.gap-sm{gap:.5rem}.inset-sm{inset:.5rem}.m-md{margin:.75rem}.mb-md{margin-block:.75rem}.mi-md{margin-inline:.75rem}.p-md{padding:.75rem}.pb-md{padding-block:.75rem}.pi-md{padding-inline:.75rem}.gap-md{gap:.75rem}.inset-md{inset:.75rem}.m-lg{margin:1rem}.mb-lg{margin-block:1rem}.mi-lg{margin-inline:1rem}.p-lg{padding:1rem}.pb-lg{padding-block:1rem}.pi-lg{padding-inline:1rem}.gap-lg{gap:1rem}.inset-lg{inset:1rem}.m-xl{margin:1.25rem}.mb-xl{margin-block:1.25rem}.mi-xl{margin-inline:1.25rem}.p-xl{padding:1.25rem}.pb-xl{padding-block:1.25rem}.pi-xl{padding-inline:1.25rem}.gap-xl{gap:1.25rem}.inset-xl{inset:1.25rem}.m-2xl{margin:1.5rem}.mb-2xl{margin-block:1.5rem}.mi-2xl{margin-inline:1.5rem}.p-2xl{padding:1.5rem}.pb-2xl{padding-block:1.5rem}.pi-2xl{padding-inline:1.5rem}.gap-2xl{gap:1.5rem}.inset-2xl{inset:1.5rem}.m-3xl{margin:2rem}.mb-3xl{margin-block:2rem}.mi-3xl{margin-inline:2rem}.p-3xl{padding:2rem}.pb-3xl{padding-block:2rem}.pi-3xl{padding-inline:2rem}.gap-3xl{gap:2rem}.inset-3xl{inset:2rem}.text-xs{font-size:.75rem}.text-sm,.text-xs{font-weight:400;letter-spacing:0;line-height:1.5}.text-sm{font-size:.875rem}.text-base{font-size:1rem}.text-base,.text-lg{font-weight:400;letter-spacing:0;line-height:1.5}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-2xl,.text-xl{font-weight:400;letter-spacing:0;line-height:1.5}.text-2xl{font-size:1.5rem}.font-thin{font-weight:100}.font-light{font-weight:300}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.text-start{text-align:start}.text-center{text-align:center}.text-end{text-align:end}.text-primary{color:#1e293b,#f1f5f9}.text-secondary{color:#64748b,#94a3b8}.text-muted{color:#94a3b8,#64748b}.text-disabled{color:#cbd5e1,#475569}.block,.vu-block{display:block}.inline,.vu-inline{display:inline}.inline-block{display:inline-block}.flex,.vu-flex{display:flex}.inline-flex{display:inline-flex}.grid,.vu-grid{display:grid}.hidden,.vu-hidden{display:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-center{align-items:center}.items-end{align-items:flex-end}.items-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.block-size-auto,.h-auto{block-size:auto}.block-size-full,.h-full{block-size:100%}.h-screen{block-size:100vh}.inline-size-auto,.w-auto{inline-size:auto}.inline-size-full,.w-full{inline-size:100%}.w-screen{inline-size:100vw}.min-block-size-0,.min-h-0{min-block-size:0}.min-inline-size-0,.min-w-0{min-inline-size:0}.max-block-size-full,.max-h-full{max-block-size:100%}.max-inline-size-full,.max-w-full{max-inline-size:100%}.static{position:static}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.sticky{position:sticky}.bg-surface{background-color:#fafbfc,#0f1419}.bg-surface-container{background-color:#f1f5f9,#1e293b}.bg-surface-container-high{background-color:#e2e8f0,#334155}.bg-primary{background-color:#4e8fad,#8ec4d4}.bg-secondary{background-color:#6b7280,#94a3b8}.border{border:1px solid #475569}.border-2{border:2px solid #475569}.border-primary{border:1px solid #8ec4d4}.border-secondary{border:1px solid #94a3b8}.rounded-none{border-radius:0}.rounded-sm{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.rounded-full{border-radius:9999px}.shadow-xs{box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.shadow-sm{box-shadow:0 1px 3px 0 rgba(0,0,0,.1)}.shadow-md{box-shadow:0 4px 6px -1px rgba(0,0,0,.1)}.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1)}.shadow-xl{box-shadow:0 20px 25px -5px rgba(0,0,0,.1)}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.select-none{user-select:none}.select-text{user-select:text}.select-all{user-select:all}.visible{visibility:visible}.invisible{visibility:hidden}.collapse,.vs-collapsed{visibility:collapse}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-100{opacity:1}@container (max-width: 320px){.hidden\\@xs{display:none}}@container (max-width: 640px){.hidden\\@sm{display:none}}@container (max-width: 768px){.hidden\\@md{display:none}}@container (max-width: 1024px){.hidden\\@lg{display:none}}@container (min-width: 320px){.block\\@xs{display:block}}@container (min-width: 640px){.block\\@sm{display:block}}@container (min-width: 768px){.block\\@md{display:block}}@container (min-width: 1024px){.block\\@lg{display:block}}@container (max-width: 320px){.text-sm\\@xs{font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.5}}@container (min-width: 640px){.text-base\\@sm{font-size:1rem;font-weight:400;letter-spacing:0;line-height:1.5}}.icon-xs{--icon-size:0.75rem}.icon-sm{--icon-size:0.875rem}.icon-md{--icon-size:1rem}.icon-lg{--icon-size:1.25rem}.icon-xl{--icon-size:1.5rem}.center-absolute{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.center-flex{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center}.interactive{cursor:pointer;touch-action:manipulation;user-select:none;-webkit-tap-highlight-color:transparent}.interactive:focus-visible{outline:2px solid #1e40af;outline-offset:2px}.interactive:disabled,.interactive[aria-disabled=true]{cursor:not-allowed;opacity:.6;pointer-events:none}.focus-ring:focus-visible{outline:2px solid #1e40af;outline-offset:2px}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.truncate-2{-webkit-line-clamp:2}.truncate-2,.truncate-3{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.truncate-3{-webkit-line-clamp:3}.aspect-square{aspect-ratio:1}.aspect-video{aspect-ratio:16/9}.margin-block-0{margin-block:0}.margin-block-sm{margin-block:var(--space-sm)}.margin-block-md{margin-block:var(--space-md)}.margin-block-lg{margin-block:var(--space-lg)}.margin-inline-0{margin-inline:0}.margin-inline-sm{margin-inline:var(--space-sm)}.margin-inline-md{margin-inline:var(--space-md)}.margin-inline-lg{margin-inline:var(--space-lg)}.margin-inline-auto{margin-inline:auto}.padding-block-0{padding-block:0}.padding-block-sm{padding-block:var(--space-sm)}.padding-block-md{padding-block:var(--space-md)}.padding-block-lg{padding-block:var(--space-lg)}.padding-inline-0{padding-inline:0}.padding-inline-sm{padding-inline:var(--space-sm)}.padding-inline-md{padding-inline:var(--space-md)}.padding-inline-lg{padding-inline:var(--space-lg)}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.line-clamp-1{-webkit-line-clamp:1}.line-clamp-1,.line-clamp-2{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-2{-webkit-line-clamp:2}.line-clamp-3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.vs-active{--state-active:1}.vs-disabled{opacity:.5;pointer-events:none}.vs-loading{cursor:wait}.vs-error{color:var(--color-error,#dc3545)}.vs-success{color:var(--color-success,#28a745)}.vs-hidden{display:none!important}.container,.vl-container{inline-size:100%;margin-inline:auto;max-inline-size:var(--container-max,1200px)}.vl-container{padding-inline:var(--space-md)}.container{padding-inline:var(--space-lg)}.vl-grid{display:grid;gap:var(--gap-md)}.vl-stack{display:flex;flex-direction:column;gap:var(--gap-md)}.vl-cluster{flex-wrap:wrap;gap:var(--gap-sm)}.vl-center,.vl-cluster{align-items:center;display:flex}.vl-center{justify-content:center}.vu-sr-only{block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);border:0;white-space:nowrap}.vc-surface{background-color:var(--color-surface);color:var(--color-on-surface)}.vc-surface-variant{background-color:var(--color-surface-variant);color:var(--color-on-surface-variant)}.vc-primary{background-color:var(--color-primary);color:var(--color-on-primary)}.vc-secondary{background-color:var(--color-secondary);color:var(--color-on-secondary)}.vc-elevated{box-shadow:var(--elev-1)}.vc-elevated-2{box-shadow:var(--elev-2)}.vc-elevated-3{box-shadow:var(--elev-3)}.vc-rounded{border-radius:var(--radius-md)}.vc-rounded-sm{border-radius:var(--radius-sm)}.vc-rounded-lg{border-radius:var(--radius-lg)}.vc-rounded-full{border-radius:var(--radius-full,9999px)}.card{background:var(--color-bg);border:1px solid var(--color-border);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);padding:var(--space-lg)}.stack>*+*{margin-block-start:var(--space-md)}.stack-sm>*+*{margin-block-start:var(--space-sm)}.stack-lg>*+*{margin-block-start:var(--space-lg)}@media print{.print-hidden{display:none!important}.print-visible{display:block!important}.print-break-before{page-break-before:always}.print-break-after{page-break-after:always}.print-break-inside-avoid{page-break-inside:avoid}}@media (prefers-reduced-motion:reduce){.transition-fast,.transition-normal,.transition-slow{transition:none}*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}@media (prefers-contrast:high){.text-primary{color:var(--color-on-surface)}.text-disabled,.text-muted,.text-secondary{color:var(--color-on-surface-variant)}.border{border-width:2px}.border-top{border-top-width:2px}.border-bottom{border-bottom-width:2px}.border-left{border-left-width:2px}.border-right{border-right-width:2px}}}@property --value{syntax:\"<number>\";initial-value:0;inherits:true}@property --relate{syntax:\"<number>\";initial-value:0;inherits:true}@property --drag-x{syntax:\"<number>\";initial-value:0;inherits:false}@property --drag-y{syntax:\"<number>\";initial-value:0;inherits:false}@property --order{syntax:\"<integer>\";initial-value:1;inherits:true}@property --content-inline-size{syntax:\"<length-percentage>\";initial-value:100%;inherits:true}@property --content-block-size{syntax:\"<length-percentage>\";initial-value:100%;inherits:true}@property --icon-size{syntax:\"<length-percentage>\";initial-value:16px;inherits:true}@property --icon-color{syntax:\"<color>\";initial-value:rgba(0,0,0,0);inherits:true}@property --icon-padding{syntax:\"<length-percentage>\";initial-value:0px;inherits:true}@property --icon-image{syntax:\"<image>\";initial-value:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0));inherits:true}@layer utilities{.grid-rows>::slotted(*){display:grid;grid-auto-flow:column}.grid-rows>::slotted(*){place-content:center;place-items:center}.grid-rows>::slotted(*){--order:sibling-index();grid-column:1/-1;grid-row:var(--order,1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0,max-content)}:host(.grid-rows) ::slotted(::slotted(*)){display:grid;grid-auto-flow:column}:host(.grid-rows) ::slotted(::slotted(*)){place-content:center;place-items:center}:host(.grid-rows) ::slotted(::slotted(*)){--order:sibling-index();grid-column:1/-1;grid-row:var(--order,1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0,max-content)}.grid-rows>*{display:grid;grid-auto-flow:column;place-content:center;place-items:center;--order:sibling-index();grid-column:1/-1;grid-row:var(--order,1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0,max-content)}:host(.grid-rows) ::slotted(*){display:grid;grid-auto-flow:column}:host(.grid-rows) ::slotted(*){place-content:center;place-items:center}:host(.grid-rows) ::slotted(*){--order:sibling-index();grid-column:1/-1;grid-row:var(--order,1)/calc(var(--order, 1) + 1);grid-template-columns:subgrid;grid-template-rows:minmax(0,max-content)}.grid-rows{--display:inline-grid;--flow:column;--items:center;--content:center;block-size:auto;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);inline-size:auto;place-content:var(--content,center);place-items:var(--items,center);--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);grid-auto-rows:minmax(0,max-content);grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content);inline-size:var(--i-size,100%);list-style-position:inside;list-style-type:none;margin:0;padding:0}:host(.grid-rows){--display:inline-grid;--flow:column;--items:center;--content:center;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);place-content:var(--content,center);place-items:var(--items,center)}:host(.grid-rows){block-size:auto;inline-size:auto;--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}:host(.grid-rows){grid-auto-rows:minmax(0,max-content);grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content);list-style-position:inside;list-style-type:none;margin:0;padding:0}.grid-columns>::slotted(*){display:grid;grid-auto-flow:row}.grid-columns>::slotted(*){place-content:center;place-items:center}.grid-columns>::slotted(*){--order:sibling-index();grid-column:var(--order,1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0,1fr);grid-template-rows:subgrid}:host(.grid-columns) ::slotted(::slotted(*)){display:grid;grid-auto-flow:row}:host(.grid-columns) ::slotted(::slotted(*)){place-content:center;place-items:center}:host(.grid-columns) ::slotted(::slotted(*)){--order:sibling-index();grid-column:var(--order,1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0,1fr);grid-template-rows:subgrid}.grid-columns>*{display:grid;grid-auto-flow:row;place-content:center;place-items:center;--order:sibling-index();grid-column:var(--order,1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0,1fr);grid-template-rows:subgrid}:host(.grid-columns) ::slotted(*){display:grid;grid-auto-flow:row}:host(.grid-columns) ::slotted(*){place-content:center;place-items:center}:host(.grid-columns) ::slotted(*){--order:sibling-index();grid-column:var(--order,1)/calc(var(--order, 1) + 1);grid-row:1/-1;grid-template-columns:minmax(0,1fr);grid-template-rows:subgrid}.grid-columns{--display:inline-grid;--flow:row;--items:center;--content:center;block-size:auto;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);inline-size:auto;place-content:var(--content,center);place-items:var(--items,center);--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);grid-auto-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);inline-size:var(--i-size,100%);list-style-position:inside;list-style-type:none;margin:0;padding:0}:host(.grid-columns){--display:inline-grid;--flow:row;--items:center;--content:center;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);place-content:var(--content,center);place-items:var(--items,center)}:host(.grid-columns){block-size:auto;inline-size:auto;--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}:host(.grid-columns){grid-auto-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);list-style-position:inside;list-style-type:none;margin:0;padding:0}.flex-columns>::slotted(*){--order:sibling-index();flex:1 1 max-content;order:var(--order,auto)}.flex-columns>::slotted(*){place-content:center;place-items:center}:host(.flex-columns) ::slotted(::slotted(*)){--order:sibling-index();flex:1 1 max-content;order:var(--order,auto)}:host(.flex-columns) ::slotted(::slotted(*)){place-content:center;place-items:center}.flex-columns>*{--order:sibling-index();flex:1 1 max-content;order:var(--order,auto);place-content:center;place-items:center}:host(.flex-columns) ::slotted(*){--order:sibling-index();flex:1 1 max-content;order:var(--order,auto)}:host(.flex-columns) ::slotted(*){place-content:center;place-items:center}.flex-columns{--display:inline-flex;--flow:column;--items:center;--content:center;block-size:max-content;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);inline-size:max-content;place-content:var(--content,center);place-items:var(--items,center);--i-size:max-content;--b-size:max-content;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}:host(.flex-columns){--display:inline-flex;--flow:column;--items:center;--content:center;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);place-content:var(--content,center);place-items:var(--items,center)}:host(.flex-columns){block-size:max-content;inline-size:max-content;--i-size:max-content;--b-size:max-content;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}.grid-layered>::slotted(*){grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}.grid-layered>::slotted(*)>*{grid-column:1/-1;grid-row:1/-1}:host(.grid-layered) ::slotted(::slotted(*)){grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}:host(.grid-layered) ::slotted(::slotted(*))>*{grid-column:1/-1;grid-row:1/-1}.grid-layered>*{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}.grid-layered>*>*{grid-column:1/-1;grid-row:1/-1}:host(.grid-layered) ::slotted(*){grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}:host(.grid-layered) ::slotted(*)>*{grid-column:1/-1;grid-row:1/-1}.grid-layered{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}.grid-layered>*{grid-column:1/-1;grid-row:1/-1}.grid-layered{--display:inline-grid;--flow:column;--items:center;--content:center;block-size:max-content;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);inline-size:max-content;place-content:var(--content,center);place-items:var(--items,center);--i-size:max-content;--b-size:max-content;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}:host(.grid-layered){grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr)}:host(.grid-layered)>*{grid-column:1/-1;grid-row:1/-1}:host(.grid-layered){--display:inline-grid;--flow:column;--items:center;--content:center;box-sizing:border-box;display:var(--display,inline-block);flex-direction:var(--flow,row);place-content:var(--content,center);place-items:var(--items,center)}:host(.grid-layered){block-size:max-content;inline-size:max-content;--i-size:max-content;--b-size:max-content;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}.grid-rows-3c>::slotted(*){grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}:host(.grid-rows-3c) ::slotted(::slotted(*)){grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}.grid-rows-3c>*{grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}:host(.grid-rows-3c) ::slotted(*){grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}.grid-rows-3c{grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}:host(.grid-rows-3c){grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content)}.grid-rows-3c>::slotted(:last-child){grid-column:var(--order,1)/3 span}:host(.grid-rows-3c) ::slotted(::slotted(:last-child)){grid-column:var(--order,1)/3 span}.grid-rows-3c>:last-child{grid-column:var(--order,1)/3 span}:host(.grid-rows-3c) ::slotted(:last-child){grid-column:var(--order,1)/3 span}.grid-rows-3c{--order:sibling-index();block-size:auto;grid-column:var(--order,1)/var(--order,1) span;inline-size:auto;--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}:host(.grid-rows-3c){--order:sibling-index()}:host(.grid-rows-3c){grid-column:var(--order,1)/var(--order,1) span}:host(.grid-rows-3c){block-size:auto;inline-size:auto;--i-size:auto;--b-size:auto;aspect-ratio:var(--ar,auto);block-size:var(--b-size,100%);inline-size:var(--i-size,100%)}.stretch-inline{inline-size:100%;inline-size:stretch}:host(.stretch-inline){inline-size:100%;inline-size:stretch}.stretch-block{block-size:100%;block-size:stretch}:host(.stretch-block){block-size:100%;block-size:stretch}.content-inline-size{padding-inline:max(100% - (100% - var(--content-inline-size,100%) * .5),0px)}:host(.content-inline-size){padding-inline:max(100% - (100% - var(--content-inline-size,100%) * .5),0px)}.content-block-size{padding-block:max(100% - (100% - var(--content-block-size,100%) * .5),0px)}:host(.content-block-size){padding-block:max(100% - (100% - var(--content-block-size,100%) * .5),0px)}.ux-anchor{inset-block-start:max(var(--client-y,0px),0px);inset-inline-start:max(var(--client-x,0px),0px);--translate-x:round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;--translate-y:round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important}@supports (position-anchor:--example){.ux-anchor{inline-size:anchor-size(var(--anchor-group) self-inline);inset-block-start:anchor(var(--anchor-group) end);inset-inline-start:anchor(var(--anchor-group) start);position-anchor:var(--anchor-group)}}:host(.ux-anchor){inset-block-start:max(var(--client-y,0px),0px);inset-inline-start:max(var(--client-x,0px),0px)}:host(.ux-anchor){--translate-x:round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;--translate-y:round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important}@supports (position-anchor:--example){:host(.ux-anchor){inline-size:anchor-size(var(--anchor-group) self-inline);inset-block-start:anchor(var(--anchor-group) end);inset-inline-start:anchor(var(--anchor-group) start);position-anchor:var(--anchor-group)}}.ux-anchor{--shift-x:var(--client-x, 0px);--shift-y:var(--client-y, 0px);--translate-x:round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;--translate-y:round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;direction:ltr;inset-block-end:auto;inset-block-start:max(var(--shift-y),var(--status-bar-padding,0px));inset-inline-end:auto;inset-inline-start:max(var(--shift-x),0px);transform:none;translate:0 0 0;writing-mode:horizontal-tb}:host(.ux-anchor){--shift-x:var(--client-x, 0px);--shift-y:var(--client-y, 0px);--translate-x:round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;--translate-y:round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;direction:ltr;inset-block-end:auto;inset-block-start:max(var(--shift-y),var(--status-bar-padding,0px));inset-inline-end:auto;inset-inline-start:max(var(--shift-x),0px);transform:none;translate:0 0 0;writing-mode:horizontal-tb}.layered-wrap{background-color:initial;block-size:max-content;display:inline-grid;grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);inline-size:max-content;overflow:visible;z-index:calc(var(--z-index, 0) + 1)}.layered-wrap>*{grid-column:1/-1;grid-row:1/-1}:host(.layered-wrap){background-color:initial;block-size:max-content;display:inline-grid;grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr);inline-size:max-content;overflow:visible;z-index:calc(var(--z-index, 0) + 1)}:host(.layered-wrap)>*{grid-column:1/-1;grid-row:1/-1}}@layer theme{}@function --wavy-step(--step <number>){--angle:calc((var(--step, 0) * 2) * 1rad * pi);--variant:calc(cos(var(--clip-freq, 8) * var(--angle, 0deg)) * 0.5 + 0.5);--adjust:calc(var(--variant, 0) * var(--clip-amplitude, 0));--x:calc(50% + (cos(var(--angle, 0deg)) * (0.5 - var(--adjust, 0))) * var(--icon-size, 100%));--y:calc(50% + (sin(var(--angle, 0deg)) * (0.5 - var(--adjust, 0))) * var(--icon-size, 100%));result:var(--x) var(--y)}@layer components{.shaped{aspect-ratio:1/1!important;border-radius:var(--border-radius,1.5rem);contain:strict;display:flex;overflow:hidden;padding:1.25rem;place-content:center;place-items:center;pointer-events:auto;transition:--background-tone-shift .2s ease-in-out,--icon-color .2s ease-in-out;transition-behavior:allow-discrete;user-select:none;z-index:1}.shaped,.shaped :is(span,ui-icon){block-size:fit-content;inline-size:stretch}.shaped ui-icon{aspect-ratio:1/1!important}[data-dragging]{z-index:calc(100 + var(--z-index, 0))!important}:not(.shaped) .shaped[data-shape],:not(.shaped)>[data-shape],:not(:has(.shaped))[data-shape]{aspect-ratio:1/1!important;contain:strict;overflow:hidden;pointer-events:auto;touch-action:none}:not(.shaped) .shaped[data-shape=square],:not(.shaped)>[data-shape=square],:not(:has(.shaped))[data-shape=square]{--border-radius:var(--radius-md);--clip-path:none}:not(.shaped) .shaped[data-shape=squircle],:not(.shaped)>[data-shape=squircle],:not(:has(.shaped))[data-shape=squircle]{--border-radius:28%;--clip-path:none}:not(.shaped) .shaped[data-shape=circle],:not(.shaped)>[data-shape=circle],:not(:has(.shaped))[data-shape=circle]{--border-radius:50%;--clip-path:none}:not(.shaped) .shaped[data-shape=rounded],:not(.shaped)>[data-shape=rounded],:not(:has(.shaped))[data-shape=rounded]{--border-radius:var(--radius-xl);--clip-path:none}:not(.shaped) .shaped[data-shape=blob],:not(.shaped)>[data-shape=blob],:not(:has(.shaped))[data-shape=blob]{--border-radius:60% 40% 30% 70% / 60% 30% 70% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=hexagon],:not(.shaped)>[data-shape=hexagon],:not(:has(.shaped))[data-shape=hexagon]{--border-radius:0;--clip-path:polygon(\n        round 0.375rem,\n        50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%\n    )}:not(.shaped) .shaped[data-shape=diamond],:not(.shaped)>[data-shape=diamond],:not(:has(.shaped))[data-shape=diamond]{--border-radius:0;--clip-path:polygon(\n        round 0.5rem,\n        50% 0%, 100% 50%, 50% 100%, 0% 50%\n    )}:not(.shaped) .shaped[data-shape=star],:not(.shaped)>[data-shape=star],:not(:has(.shaped))[data-shape=star]{--border-radius:0;--clip-path:polygon(\n        round 0.25rem,\n        50% 0%,\n        61% 35%, 98% 38%,\n        68% 59%, 79% 95%,\n        50% 75%,\n        21% 95%, 32% 59%,\n        2% 38%, 39% 35%\n    )}:not(.shaped) .shaped[data-shape=badge],:not(.shaped)>[data-shape=badge],:not(:has(.shaped))[data-shape=badge]{--border-radius:0;--clip-path:polygon(\n        round 0.375rem,\n        0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%\n    )}:not(.shaped) .shaped[data-shape=heart],:not(.shaped)>[data-shape=heart],:not(:has(.shaped))[data-shape=heart]{--border-radius:0;--clip-path:polygon(\n        round 0.25rem,\n        50% 100%,\n        10% 65%, 0% 45%, 0% 30%,\n        5% 15%, 18% 3%, 35% 0%, 50% 12%,\n        65% 0%, 82% 3%, 95% 15%,\n        100% 30%, 100% 45%, 90% 65%\n    )}:not(.shaped) .shaped[data-shape=clover],:not(.shaped)>[data-shape=clover],:not(:has(.shaped))[data-shape=clover]{--border-radius:0;--clip-path:polygon(\n        round 0.375rem,\n        50% 0%, 60% 30%, 70% 30%, 100% 50%,\n        70% 70%, 60% 70%, 50% 100%,\n        40% 70%, 30% 70%, 0% 50%,\n        30% 30%, 40% 30%\n    )}:not(.shaped) .shaped[data-shape=flower],:not(.shaped)>[data-shape=flower],:not(:has(.shaped))[data-shape=flower]{--border-radius:0;--clip-path:polygon(\n        round 0.25rem,\n        50% 0%, 58% 25%, 85% 15%, 68% 40%,\n        100% 50%, 68% 60%, 85% 85%, 58% 75%,\n        50% 100%, 42% 75%, 15% 85%, 32% 60%,\n        0% 50%, 32% 40%, 15% 15%, 42% 25%\n    )}:not(.shaped) .shaped[data-shape=triangle],:not(.shaped)>[data-shape=triangle],:not(:has(.shaped))[data-shape=triangle]{--border-radius:0;--clip-path:polygon(\n        round 0.5rem,\n        50% 0%, 100% 87%, 0% 87%\n    )}:not(.shaped) .shaped[data-shape=pentagon],:not(.shaped)>[data-shape=pentagon],:not(:has(.shaped))[data-shape=pentagon]{--border-radius:0;--clip-path:polygon(\n        round 0.375rem,\n        50% 0%, 97.5% 35%, 79.5% 95%, 20.5% 95%, 2.5% 35%\n    )}:not(.shaped) .shaped[data-shape=octagon],:not(.shaped)>[data-shape=octagon],:not(:has(.shaped))[data-shape=octagon]{--border-radius:0;--clip-path:polygon(\n        round 0.25rem,\n        30% 0%, 70% 0%, 100% 30%, 100% 70%,\n        70% 100%, 30% 100%, 0% 70%, 0% 30%\n    )}:not(.shaped) .shaped[data-shape=cross],:not(.shaped)>[data-shape=cross],:not(:has(.shaped))[data-shape=cross]{--border-radius:0;--clip-path:polygon(\n        round 0.375rem,\n        35% 0%, 65% 0%, 65% 35%, 100% 35%,\n        100% 65%, 65% 65%, 65% 100%, 35% 100%,\n        35% 65%, 0% 65%, 0% 35%, 35% 35%\n    )}:not(.shaped) .shaped[data-shape=arrow],:not(.shaped)>[data-shape=arrow],:not(:has(.shaped))[data-shape=arrow]{--border-radius:0;--clip-path:polygon(\n        round 0.375rem,\n        0% 20%, 60% 20%, 60% 0%, 100% 50%,\n        60% 100%, 60% 80%, 0% 80%\n    )}:not(.shaped) .shaped[data-shape=egg],:not(.shaped)>[data-shape=egg],:not(:has(.shaped))[data-shape=egg]{--border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;--clip-path:none}:not(.shaped) .shaped[data-shape=tear],:not(.shaped)>[data-shape=tear],:not(:has(.shaped))[data-shape=tear]{--border-radius:50cqmin 50cqmin 5rem 50cqmin;--clip-path:none;border-end-end-radius:5rem;border-end-start-radius:50cqmin;border-start-end-radius:50cqmin;border-start-start-radius:50cqmin}:not(.shaped) .shaped[data-shape=wavy],:not(.shaped)>[data-shape=wavy],:not(:has(.shaped))[data-shape=wavy]{--border-radius:calc(var(--icon-size, 100%) * 0.5)}}";
//#endregion
//#region ../../modules/projects/subsystem/src/boot/veela-variant-runtime.ts
/**
* Veela stylesheet loader for CWSP-shell (no `fest/fl-ui` runtime SCSS dependency).
*
* Uses Veela's curated public SCSS entry-points (core + foundation).
*/
var loadedVariant = null;
/**
* Loads Veela stylesheet slices for the coarse variant presets used by BootLoader.
*/
async function loadVeelaVariant(variant) {
	if (loadedVariant === variant) return;
	console.log("[Veela] Loading variant:", variant);
	const apply = async (text) => {
		if (typeof text === "string" && text.length) await loadAsAdopted(text);
	};
	if (variant === "core") {
		await apply(core_default);
		loadedVariant = variant;
		return;
	}
	await apply(scss_default);
	loadedVariant = variant;
}
//#endregion
//#region ../../modules/projects/subsystem/src/styles.ts
/**
* CWSP-shell Styles Module
*
* Provides style system integration for the CWSP-shell application.
* Supports multiple style systems based on veela CSS variants.
*
* Style Systems:
* - veela-advanced: Full-featured CSS framework (default)
* - veela-basic: Lightweight minimal styling
* - veela-beercss: Beer CSS compatible styling
* - raw: No styling framework (browser defaults)
*/
var STYLE_CONFIGS$1 = {
	"vl-advanced": {
		id: "vl-advanced",
		name: "Veela Advanced",
		description: "Full-featured CSS framework with design tokens and effects",
		variant: "advanced",
		initFn: async () => {
			try {
				await loadVeelaVariant("advanced");
				console.log("[Styles] Veela Advanced loaded");
			} catch (e) {}
		}
	},
	"vl-basic": {
		id: "vl-basic",
		name: "Veela Basic Styles",
		description: "Lightweight minimal styling for basic functionality",
		variant: "basic",
		initFn: async () => {
			try {
				await loadVeelaVariant("basic");
				console.log("[Styles] Veela Basic Styles loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela Basic Styles:", e);
			}
		}
	},
	"vl-beercss": {
		id: "vl-beercss",
		name: "Veela BeerCSS",
		description: "Beer CSS compatible styling with Material Design 3",
		variant: "beercss",
		initFn: async () => {
			try {
				await loadVeelaVariant("beercss");
				console.log("[Styles] Veela BeerCSS loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela BeerCSS:", e);
			}
		}
	},
	"vl-core": {
		id: "vl-core",
		name: "Veela Core",
		description: "Shared foundation styles for all veela variants",
		variant: "core",
		initFn: async () => {
			try {
				await loadVeelaVariant("core");
				console.log("[Styles] Veela Core loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela Core:", e);
			}
		}
	},
	"raw": {
		id: "raw",
		name: "Raw",
		description: "No styling framework, browser defaults",
		variant: "core",
		initFn: async () => {
			console.log("[Styles] Raw mode - no styles loaded");
		}
	}
};
var _currentStyle = null;
/**
* Load a style system
*
* @param styleId - Style system identifier
*/
async function loadStyleSystem(styleId) {
	const config = STYLE_CONFIGS$1[styleId] || STYLE_CONFIGS$1["vl-basic"];
	if (!config) throw new Error(`Unknown style system: ${styleId}`);
	if (_currentStyle === styleId) {
		console.log(`[Styles] Style system '${styleId}' already loaded`);
		return;
	}
	console.log(`[Styles] Loading style system: ${config.name}`);
	if (config.initFn) await config.initFn();
	_currentStyle = styleId;
	console.log(`[Styles] Style system ${config.name} loaded`);
}
//#endregion
//#region ../CWSP-document/src/frontend/boot/native-socket.ts
var appendParams = (target, params) => {
	if (!params || typeof params !== "object") return;
	for (const [key, value] of Object.entries(params)) {
		if (!key || value === void 0 || value === null || value === "") continue;
		target.searchParams.set(key, String(value));
	}
};
/**
* Normalize user-entered endpoint origins and old `/socket.io` URLs to the native
* CWSP websocket endpoint while preserving route/auth query metadata.
*/
function normalizeWsEndpointUrl(rawUrl, query, auth) {
	const urlObj = new URL(rawUrl.includes("://") ? rawUrl : `https://${rawUrl}`);
	if (urlObj.protocol === "http:") urlObj.protocol = "ws:";
	else if (urlObj.protocol === "https:") urlObj.protocol = "wss:";
	else if (urlObj.protocol !== "ws:" && urlObj.protocol !== "wss:") urlObj.protocol = "wss:";
	if (!urlObj.pathname || urlObj.pathname === "/" || /^\/socket\.io\/?$/i.test(urlObj.pathname)) urlObj.pathname = "/ws";
	for (const staleKey of [
		"EIO",
		"transport",
		"sid"
	]) urlObj.searchParams.delete(staleKey);
	appendParams(urlObj, query);
	appendParams(urlObj, auth);
	return urlObj.toString();
}
var NativeSocket = class {
	url;
	options;
	connected = false;
	connecting = false;
	id = "";
	ws = null;
	listeners = /* @__PURE__ */ new Map();
	connectTimeout;
	constructor(url, options = {}) {
		this.url = url;
		this.options = options;
		this.connect();
	}
	connect() {
		try {
			const endpointUrl = normalizeWsEndpointUrl(this.url, this.options.query, this.options.auth);
			this.connecting = true;
			this.ws = new WebSocket(endpointUrl);
			this.ws.onopen = () => {
				this.connected = true;
				this.connecting = false;
				if (this.connectTimeout) clearTimeout(this.connectTimeout);
				this.emitLocal("connect");
			};
			this.ws.onclose = (event) => {
				this.connected = false;
				this.connecting = false;
				if (this.connectTimeout) clearTimeout(this.connectTimeout);
				this.emitLocal("disconnect", event.reason || "closed");
				this.emitLocal("close", event.code, event.reason);
			};
			this.ws.onerror = (error) => {
				this.connecting = false;
				this.emitLocal("connect_error", /* @__PURE__ */ new Error("WebSocket error"));
				this.emitLocal("error", error);
			};
			this.ws.onmessage = (event) => {
				if (event.data instanceof ArrayBuffer) {
					this.emitLocal("binary", event.data);
					return;
				}
				if (typeof Blob !== "undefined" && event.data instanceof Blob) {
					event.data.arrayBuffer().then((buf) => this.emitLocal("binary", buf));
					return;
				}
				try {
					const data = JSON.parse(String(event.data));
					if (data.event && data.payload) this.emitLocal(data.event, data.payload);
					else this.emitLocal("data", data);
				} catch {
					this.emitLocal("data", event.data);
				}
			};
			if (this.options.timeout) this.connectTimeout = setTimeout(() => {
				if (!this.connected) {
					this.connecting = false;
					this.ws?.close();
					this.emitLocal("connect_error", /* @__PURE__ */ new Error("timeout"));
				}
			}, this.options.timeout);
		} catch (err) {
			this.connecting = false;
			setTimeout(() => this.emitLocal("connect_error", err), 0);
		}
	}
	on(event, listener) {
		if (!this.listeners.has(event)) this.listeners.set(event, /* @__PURE__ */ new Set());
		this.listeners.get(event).add(listener);
	}
	off(event, listener) {
		this.listeners.get(event)?.delete(listener);
	}
	send(packet) {
		if (this.connected && this.ws) this.ws.send(typeof packet === "string" ? packet : JSON.stringify(packet));
	}
	/** Send legacy 8-byte AirPad binary frame (endpoint + Java {@code CwspBinaryAirpad} parity). */
	sendBinary(data) {
		if (!this.connected || !this.ws) return;
		this.ws.send(data);
	}
	/** @deprecated Prefer send(packet); kept so old callers still compile. */
	emit(_event, ...args) {
		this.send(args[0]);
	}
	emitLocal(event, ...args) {
		const handlers = this.listeners.get(event);
		if (handlers) for (const handler of handlers) handler(...args);
	}
	removeAllListeners() {
		this.listeners.clear();
	}
	close() {
		if (this.connectTimeout) clearTimeout(this.connectTimeout);
		if (this.ws) {
			this.ws.close();
			this.ws = null;
		}
		this.connected = false;
		this.connecting = false;
	}
	disconnect() {
		this.close();
	}
};
function createWsSocket(url, options) {
	return new NativeSocket(url, options);
}
//#endregion
//#region ../CWSP-document/src/shared/routing/native/capacitor-clipboard.ts
/**
* Capacitor clipboard read/write with supernotes fork first, then official plugin.
* @see https://capacitorjs.com/docs/apis/clipboard
* @see https://www.npmjs.com/package/@supernotes/capacitor-clipboard
*/
var CLIPBOARD_PKGS = ["@supernotes/capacitor-clipboard", "@capacitor/clipboard"];
var clipboardFromCapacitorPlugins = () => {
	try {
		const plugins = globalThis.Capacitor?.Plugins;
		return plugins?.Clipboard?.write ? plugins.Clipboard : null;
	} catch {
		return null;
	}
};
var loadClipboardModule = async () => {
	try {
		if (typeof globalThis.document === "undefined") return null;
	} catch {
		return null;
	}
	const registered = clipboardFromCapacitorPlugins();
	if (registered) return { Clipboard: registered };
	for (const pkg of CLIPBOARD_PKGS) try {
		return await __vitePreload(() => import(
			/* @vite-ignore */
			pkg
), [], import.meta.url);
	} catch {}
	return null;
};
async function readCapacitorClipboardText() {
	const mod = await loadClipboardModule();
	if (!mod?.Clipboard?.read) return "";
	try {
		const value = (await mod.Clipboard.read())?.value;
		if (typeof value === "string" && value.trim()) return value;
	} catch {}
	return "";
}
async function writeCapacitorClipboardText(text) {
	const mod = await loadClipboardModule();
	if (!mod?.Clipboard?.write) return false;
	try {
		await mod.Clipboard.write({
			string: String(text ?? ""),
			label: "cwsp"
		});
		return true;
	} catch {
		return false;
	}
}
//#endregion
//#region ../CWSP-document/src/shared/routing/native/clipboard-device.ts
/**
* Device clipboard I/O: desktop control host → CwsBridge Java → Capacitor → Web API.
*
* WHY desktop-first: Neutralino/WebNative WebView `navigator.clipboard` is unreliable
* for system clipboard (esp. images / background). The Node control host exposes
* ClipboardService at `/service/clipboard` with the same `__WEBNATIVE_AUTH__` as settings.
*/
var clipboard_device_exports = /* @__PURE__ */ __exportAll({
	isCapacitorNativeShell: () => isCapacitorNativeShell,
	openAppClipboardRelatedSettings: () => openAppClipboardRelatedSettings,
	openNativeNotificationSettings: () => openNativeNotificationSettings,
	readClipboardTextFromDevice: () => readClipboardTextFromDevice,
	writeClipboardImageToDevice: () => writeClipboardImageToDevice,
	writeClipboardTextToDevice: () => writeClipboardTextToDevice
});
var isCapacitorNative = () => {
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
};
/** Same check — use when "clipboard" naming is misleading (e.g. AirPad WebSocket transport). */
var isCapacitorNativeShell = () => isCapacitorNative();
/** Loopback Neutralino/WebNative control auth (settings + clipboard share this). */
var readDesktopControlAuth = () => {
	try {
		const g = globalThis;
		const auth = g.__WEBNATIVE_AUTH__ || g.__NEUTRALINO_AUTH__;
		if (!auth || typeof auth.port !== "number") return null;
		if (!(g.__CWS_WEBNATIVE_BOOT__ || g.__CWS_NEUTRALINO_BOOT__ || auth.key)) {}
		if (!auth.key) return null;
		return {
			port: auth.port,
			key: String(auth.key)
		};
	} catch {
		return null;
	}
};
var desktopControlFetch = async (path, init) => {
	const auth = readDesktopControlAuth();
	if (!auth) return null;
	try {
		const headers = new Headers(init?.headers);
		headers.set("Content-Type", "application/json");
		headers.set("X-API-Key", auth.key);
		const res = await fetch(`http://127.0.0.1:${auth.port}${path}`, {
			...init,
			headers,
			cache: "no-store"
		});
		if (!res.ok) return null;
		return await res.json();
	} catch {
		return null;
	}
};
var extractBridgeClipboardText = (result) => {
	if (!result || typeof result !== "object") return "";
	const record = result;
	const echo = record.echo;
	if (echo && typeof echo === "object") {
		const echoRec = echo;
		if (typeof echoRec.text === "string") return echoRec.text;
		if (typeof echoRec.value === "string") return echoRec.value;
	}
	if (typeof record.text === "string") return record.text;
	if (typeof record.value === "string") return record.value;
	if (typeof record.data === "string") return record.data;
	return "";
};
async function readViaDesktopControl() {
	const result = await desktopControlFetch("/service/clipboard?kind=text");
	if (!result || result.ok === false) return null;
	const text = typeof result.text === "string" && result.text || typeof result.content === "string" && result.content || typeof result.data === "string" && result.data || "";
	if (result.ok === true || "text" in result || "data" in result) return text;
	return null;
}
async function writeViaDesktopControl(text) {
	const result = await desktopControlFetch("/service/clipboard", {
		method: "POST",
		body: JSON.stringify({
			kind: "text",
			text,
			content: text,
			data: text
		})
	});
	return Boolean(result && result.ok !== false);
}
async function writeImageViaDesktopControl(data, mimeType, hash) {
	const result = await desktopControlFetch("/service/clipboard", {
		method: "POST",
		body: JSON.stringify({
			kind: "image",
			mimeType,
			hash: hash || void 0,
			imageBase64: data,
			asset: {
				mimeType,
				hash: hash || void 0,
				data,
				source: "base64"
			}
		})
	});
	return Boolean(result && result.ok !== false);
}
async function readViaCwsBridge() {
	if (!isCapacitorCwsNativeShell()) return "";
	try {
		return extractBridgeClipboardText(await invokeCwsNative("clipboard:read-local", {}));
	} catch {
		return "";
	}
}
async function writeViaCwsBridgeImage(data, mimeType, hash) {
	if (!isCapacitorCwsNativeShell()) return false;
	try {
		const result = await invokeCwsNative("clipboard:write-local-image", {
			mimeType,
			hash: hash || "",
			data
		});
		return Boolean(result?.ok);
	} catch {
		return false;
	}
}
async function writeViaCwsBridge(text) {
	if (!isCapacitorCwsNativeShell() && !isCapacitorNative()) return false;
	try {
		const result = await invokeCwsNative("clipboard:write-local", { text });
		if (result?.ok === false) return false;
		const echo = result?.echo;
		if (echo && typeof echo === "object") {
			if (String(echo.error || "").includes("unhandled")) return false;
			if (echo.ok === false) return false;
		}
		return result?.ok === true;
	} catch {
		return false;
	}
}
async function writeClipboardImageToDevice(data, mimeType = "image/png", hash) {
	const payload = String(data ?? "").trim();
	if (!payload) throw new Error("Clipboard image payload empty");
	const mime = String(mimeType || "image/png").trim() || "image/png";
	if (isDesktopControlClipboardShell()) {
		for (let i = 0; i < 4; i++) {
			if (await writeImageViaDesktopControl(payload, mime, hash)) return;
			if (i + 1 < 4) await new Promise((r) => globalThis.setTimeout(r, 120 * (i + 1)));
		}
		throw new Error("Desktop control clipboard image write failed");
	}
	if (await writeImageViaDesktopControl(payload, mime, hash)) return;
	if (await writeViaCwsBridgeImage(payload, mime, hash)) return;
	if (isCapacitorNative() && globalThis.navigator?.clipboard?.write) try {
		const bytes = decodeClipboardImageBase64(payload);
		if (bytes?.length) {
			const blob = new Blob([bytes], { type: mime });
			const pngBlob = mime === "image/png" ? blob : await blobToPng(blob);
			await globalThis.navigator.clipboard.write([new ClipboardItem({ [pngBlob.type]: pngBlob })]);
			return;
		}
	} catch {}
	throw new Error("Clipboard image write unavailable");
}
var decodeClipboardImageBase64 = (raw) => {
	let data = raw.trim();
	if (!data) return null;
	if (data.startsWith("data:")) {
		const comma = data.indexOf(",");
		if (comma < 0) return null;
		data = data.slice(comma + 1);
	}
	try {
		const bin = globalThis.atob(data.replace(/\s+/g, ""));
		const out = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
		return out;
	} catch {
		return null;
	}
};
var blobToPng = async (blob) => {
	if (blob.type === "image/png") return blob;
	if (typeof createImageBitmap === "function" && typeof OffscreenCanvas !== "undefined") {
		const bitmap = await createImageBitmap(blob);
		const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
		const ctx = canvas.getContext("2d");
		if (!ctx) return blob;
		ctx.drawImage(bitmap, 0, 0);
		bitmap.close();
		return await canvas.convertToBlob({ type: "image/png" });
	}
	return blob;
};
/** True when WebView must use Node control host for real OS clipboard (not navigator). */
var isDesktopControlClipboardShell = () => {
	try {
		const g = globalThis;
		if (g.__CWS_NEUTRALINO_BOOT__ || g.__CWS_WEBNATIVE_BOOT__) return true;
		if (typeof g.NL_OS === "string") return true;
		const auth = g.__WEBNATIVE_AUTH__ || g.__NEUTRALINO_AUTH__;
		return Boolean(auth && typeof auth.port === "number" && auth.key);
	} catch {
		return false;
	}
};
/**
* WHY: Neutralino WebView `navigator.clipboard` often reports success without
* touching the Windows OS clipboard — never treat it as the desktop path.
*/
async function writeViaDesktopControlWithRetry(text, attempts = 4) {
	for (let i = 0; i < attempts; i++) {
		if (await writeViaDesktopControl(text)) return true;
		if (i + 1 < attempts) await new Promise((r) => globalThis.setTimeout(r, 120 * (i + 1)));
	}
	return false;
}
async function writeClipboardTextToDevice(text) {
	const value = String(text ?? "");
	if (isDesktopControlClipboardShell()) {
		if (await writeViaDesktopControlWithRetry(value)) return;
		throw new Error("Desktop control clipboard write failed");
	}
	if (isCapacitorNative()) {
		if (await writeViaCwsBridge(value)) return;
		if (await writeCapacitorClipboardText(value)) return;
		throw new Error("Clipboard write unavailable");
	}
	if (await writeViaDesktopControl(value)) return;
	if (await writeViaCwsBridge(value)) return;
	if (globalThis.navigator?.clipboard?.writeText) {
		await globalThis.navigator.clipboard.writeText(value);
		return;
	}
	throw new Error("Clipboard write unavailable");
}
async function readClipboardTextFromDevice() {
	if (isDesktopControlClipboardShell()) {
		for (let i = 0; i < 4; i++) {
			const fromDesktop = await readViaDesktopControl();
			if (fromDesktop !== null) return fromDesktop;
			if (i + 1 < 4) await new Promise((r) => globalThis.setTimeout(r, 120 * (i + 1)));
		}
		throw new Error("Desktop control clipboard read failed");
	}
	const fromDesktop = await readViaDesktopControl();
	if (fromDesktop !== null) return fromDesktop;
	const fromBridge = await readViaCwsBridge();
	if (fromBridge) return fromBridge;
	if (isCapacitorNative()) {
		const fromCapacitor = await readCapacitorClipboardText();
		if (fromCapacitor) return fromCapacitor;
	}
	if (globalThis.navigator?.clipboard?.readText) return String(await globalThis.navigator.clipboard.readText());
	throw new Error("Clipboard read unavailable");
}
/** Opens notification settings for this app (Android / iOS). Best-effort. */
async function openNativeNotificationSettings() {
	if (!isCapacitorNative()) return;
	try {
		const { NativeSettings, AndroidSettings, IOSSettings } = await __vitePreload(async () => {
			const { NativeSettings, AndroidSettings, IOSSettings } = await import(
				/* @vite-ignore */
				"capacitor-native-settings"
);
			return {
				NativeSettings,
				AndroidSettings,
				IOSSettings
			};
		}, [], import.meta.url);
		await NativeSettings.open({
			optionAndroid: AndroidSettings.AppNotification,
			optionIOS: IOSSettings.AppNotification
		});
	} catch {}
}
/** Opens system UI where the user can adjust app permissions (Android / iOS). Best-effort. */
async function openAppClipboardRelatedSettings() {
	if (!isCapacitorNative()) return;
	try {
		const { NativeSettings, AndroidSettings, IOSSettings } = await __vitePreload(async () => {
			const { NativeSettings, AndroidSettings, IOSSettings } = await import(
				/* @vite-ignore */
				"capacitor-native-settings"
);
			return {
				NativeSettings,
				AndroidSettings,
				IOSSettings
			};
		}, [], import.meta.url);
		await NativeSettings.open({
			optionAndroid: AndroidSettings.ApplicationDetails,
			optionIOS: IOSSettings.App
		});
	} catch {}
}
//#endregion
//#region ../CWSP-document/src/frontend/boot/native-coordinator-bridge.ts
/**
* Capacitor/CWSAndroid: route coordinator acts through Java {@code CwspWsClient} when it owns `/ws`.
* WHY: WebView hub connect is skipped to avoid duplicate clientId sessions; AirPad must use CwsBridge.
*
* CWSAndroid {@code CwsBridgePlugin} channels:
* - coordinator:act / coordinator:ask — JSON envelope → Java /ws fan-out
* - coordinator:binary — base64 legacy 8-byte frame (bytes 6–7 = perfTsLo)
* - coordinator:status — { connected, wsOpen, daemon }
* - runtime:reload-settings — soft-reconnect Java /ws
*/
var nativeConnectedCache = false;
var nativeStatusCheckedAt = 0;
var NATIVE_STATUS_TTL_MS = 1200;
var shouldUseNativeCoordinatorTransport = () => nativeShellOwnsExclusiveHubWebsocket() && isCapacitorCwsNativeShell() && isPreferNativeWebsocketEnabled();
var NATIVE_BRIDGE_TIMEOUT_MS = 6e3;
var refreshNativeCoordinatorStatus = async () => {
	if (!shouldUseNativeCoordinatorTransport()) {
		nativeConnectedCache = false;
		return false;
	}
	try {
		const result = await withTimeout(invokeCwsNative("coordinator:status", {}), NATIVE_BRIDGE_TIMEOUT_MS, "coordinator:status timed out");
		const connected = Boolean(result.echo?.connected ?? result.ok);
		nativeConnectedCache = connected;
		nativeStatusCheckedAt = Date.now();
		return connected;
	} catch {
		nativeConnectedCache = false;
		nativeStatusCheckedAt = Date.now();
		return false;
	}
};
var isNativeCoordinatorConnected = () => {
	if (!shouldUseNativeCoordinatorTransport()) return false;
	if (Date.now() - nativeStatusCheckedAt > NATIVE_STATUS_TTL_MS) refreshNativeCoordinatorStatus();
	return nativeConnectedCache;
};
var nativeWirePayload = (what, payload) => {
	if (!shouldAnnotateCoordinatorPayload(what)) return payload ?? {};
	if (!payload || typeof payload !== "object" || Array.isArray(payload)) return payload ?? {};
	return annotateCoordinatorPayload(payload);
};
var sendNativeCoordinatorEnvelope = async (input) => {
	if (!shouldUseNativeCoordinatorTransport()) return false;
	const channel = input.op === "ask" ? "coordinator:ask" : "coordinator:act";
	try {
		const result = await invokeCwsNative(channel, {
			what: input.what,
			payload: nativeWirePayload(input.what, input.payload),
			nodes: input.nodes ?? [],
			uuid: input.uuid ?? "",
			op: input.op
		});
		const sent = Boolean(result.echo?.sent ?? result.ok);
		if (sent) {
			nativeConnectedCache = true;
			nativeStatusCheckedAt = Date.now();
		}
		return sent;
	} catch {
		nativeConnectedCache = false;
		nativeStatusCheckedAt = Date.now();
		return false;
	}
};
//#endregion
//#region ../CWSP-document/src/frontend/boot/websocket.ts
/**
* AirPad/remote transport hub for the frontend.
*
* This module owns the client-side WebSocket connection, secure-envelope
* wrapping, coordinator ask/act flows, clipboard bridging, and the candidate
* probing logic used to discover a reachable CWSP endpoint from web, PWA, or
* extension contexts.
*
* AI-READ: this file is a compatibility layer, not only a raw websocket
* wrapper. It preserves behavior for several runtimes whose network
* restrictions differ, especially Chromium extension pages versus normal tabs.
*/
/** AirPad view removed — status DOM no longer exists; keep console breadcrumbs. */
var log = (msg) => {
	console.log("[ws]", msg);
};
var getWsStatusEl = () => null;
var socket = null;
var wsConnected = false;
var isConnecting = false;
/**
* Mirror live socket for page debuggers.
* WHY: never touch bare `window` — in MV3 service workers that identifier throws
* `ReferenceError: window is not defined` (even inside `typeof` guards after some bundlers).
*/
var mirrorSocketOnGlobal = (value) => {
	try {
		const g = globalThis;
		g.__socket = value;
		const w = g.window;
		if (w) w.__socket = value;
	} catch {}
};
var btnEl = null;
var wsConnectButton = null;
var connectAttemptId = 0;
/** Parallel candidate probes — close all on success or disconnect. */
var activeProbeSockets = /* @__PURE__ */ new Set();
var manualDisconnectRequested = false;
var autoReconnectAttempts = 0;
var autoReconnectTimer = null;
var lastWsCandidates = [];
var nextWsCandidateOffset = 0;
var localNetworkPermissionProbeDone = /* @__PURE__ */ new Set();
var AUTO_RECONNECT_BASE_DELAY_MS = 800;
/** WebSocket handshake timeout per candidate (dead hosts fail faster). */
var AIRPAD_PROBE_IO_TIMEOUT_MS = 4800;
/** Wall-clock cap per probe if connect_error is slow to fire. */
var AIRPAD_PROBE_HARD_CAP_MS = 5600;
/** Try this many candidates in parallel; first success wins. */
var AIRPAD_CANDIDATE_PARALLEL = 3;
var AIRPAD_VERBOSE_QUERY_KEY = "CWS_AIRPAD_VERBOSE_QUERY";
var clearAutoReconnectTimer = () => {
	if (!autoReconnectTimer) return;
	globalThis.clearTimeout(autoReconnectTimer);
	autoReconnectTimer = null;
};
var clearProbeTimer = (socketWithTimer) => {
	const probe = socketWithTimer;
	if (probe.__cwspProbeTimer) {
		globalThis.clearTimeout(probe.__cwspProbeTimer);
		delete probe.__cwspProbeTimer;
	}
};
/** CWSP v2 transport / route hint query keys (canonical `cwsp_*`; see network stack spec). */
var CWSP_ROUTE_QUERY = {
	via: "cwsp_via",
	localEndpoint: "cwsp_local_endpoint",
	route: "cwsp_route",
	routeTarget: "cwsp_route_target",
	hop: "cwsp_hop",
	host: "cwsp_host",
	target: "cwsp_target",
	targetPort: "cwsp_target_port",
	viaPort: "cwsp_via_port",
	protocol: "cwsp_protocol"
};
var shouldUseVerboseAirpadQuery = () => {
	try {
		const local = String(globalThis?.localStorage?.getItem?.(AIRPAD_VERBOSE_QUERY_KEY) || "").trim().toLowerCase();
		if ([
			"1",
			"true",
			"yes",
			"on"
		].includes(local)) return true;
	} catch {}
	const runtimeFlag = String(globalThis?.[AIRPAD_VERBOSE_QUERY_KEY] || "").trim().toLowerCase();
	return [
		"1",
		"true",
		"yes",
		"on"
	].includes(runtimeFlag);
};
var wsConnectionHandlers = /* @__PURE__ */ new Set();
var clipboardHandlers = /* @__PURE__ */ new Set();
var voiceResultHandlers = /* @__PURE__ */ new Set();
var FRAME_PROTOCOL_WS = "ws";
var WS_TRANSPORT = "ws";
var normalizeCoordinatorProtocol = (value) => {
	const raw = String(value || "").trim().toLowerCase();
	if (!raw) return FRAME_PROTOCOL_WS;
	if (raw === "ws" || raw === "wss" || raw === "socket" || raw === "socket.io" || raw === "socketio") return FRAME_PROTOCOL_WS;
	return raw;
};
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();
var aesKeyCache = /* @__PURE__ */ new Map();
var hmacKeyCache = /* @__PURE__ */ new Map();
setAirpadCredentialInvalidator(() => {
	aesKeyCache.clear();
	hmacKeyCache.clear();
});
var coordinatorPending = /* @__PURE__ */ new Map();
var queuedCoordinatorActs = [];
var MAX_QUEUED_COORDINATOR_ACTS = 128;
var flushQueuedCoordinatorActs = () => {
	if (!socket?.connected) return;
	while (queuedCoordinatorActs.length > 0) {
		const packet = queuedCoordinatorActs.shift();
		if (!packet) continue;
		emitCoordinatorPacket(packet);
	}
};
var isRealtimeInputAct = (what) => {
	const normalized = String(what || "").trim().toLowerCase();
	return normalized === "mouse:move" || normalized === "mouse:scroll";
};
/** Return the current live WebSocket instance, if any. */
function getWS() {
	return socket;
}
/** Report whether the primary transport socket is currently connected. */
function isWSConnected() {
	if (shouldUseNativeCoordinatorTransport()) return isNativeCoordinatorConnected();
	return wsConnected;
}
function notifyClipboardHandlers(text, meta) {
	for (const h of clipboardHandlers) try {
		h(text, meta);
	} catch {}
}
/** Suppress echo when applying remote text to the device clipboard vs. push polling. */
var CLIPBOARD_ECHO_SUPPRESS_MS = 3500;
var lastClipboardPushSent = "";
var lastClipboardPushSentAt = 0;
var lastClipboardWrittenFromRemote = "";
var clipboardEchoSuppressUntil = 0;
var lastInboundClipboardNormalized = "";
var lastInboundClipboardAt = 0;
var clipboardPushIntervalId = null;
var stopClipboardPushLoop = () => {
	if (clipboardPushIntervalId) {
		globalThis.clearInterval(clipboardPushIntervalId);
		clipboardPushIntervalId = null;
	}
};
var startClipboardPushLoop = () => {
	stopClipboardPushLoop();
	if (!isPushLocalClipboardToLanEnabled() || !isShellRemoteClipboardBridgeEnabled()) return;
	const ms = getClipboardPushIntervalMs();
	clipboardPushIntervalId = globalThis.setInterval(() => {
		tickLocalClipboardPush();
	}, ms);
};
async function tickLocalClipboardPush() {
	if (!socket?.connected) return;
	if (!isShellRemoteClipboardBridgeEnabled() || !isPushLocalClipboardToLanEnabled()) return;
	const entries = getClipboardBroadcastWireTargets();
	if (!entries.length) return;
	try {
		const text = await readClipboardTextFromDevice();
		const t = String(text ?? "").trim();
		if (!t) return;
		const now = Date.now();
		if (now < clipboardEchoSuppressUntil && t === lastClipboardWrittenFromRemote) return;
		if (t === lastClipboardPushSent && now - lastClipboardPushSentAt < CLIPBOARD_ECHO_SUPPRESS_MS) return;
		lastClipboardPushSent = t;
		lastClipboardPushSentAt = now;
		const groups = groupWireTargetsByAccessToken(entries, getWireAccessToken());
		for (const g of groups) sendCoordinatorAct("clipboard:update", { text: t }, g.nodeIds, { accessToken: g.accessToken });
	} catch {}
}
async function applyIncomingClipboardText(text, meta) {
	if (!isShellRemoteClipboardBridgeEnabled()) return;
	const t = typeof text === "string" ? text : "";
	const normalized = t.trim();
	if (normalized.toLowerCase().startsWith("data:image/")) {
		await applyIncomingClipboardImage({
			mimeType: "image/png",
			data: normalized
		}, meta);
		return;
	}
	const now = Date.now();
	if (normalized && normalized === lastInboundClipboardNormalized && now - lastInboundClipboardAt < CLIPBOARD_ECHO_SUPPRESS_MS) return;
	lastInboundClipboardNormalized = normalized;
	lastInboundClipboardAt = now;
	notifyClipboardHandlers(t, meta);
	if (!isApplyRemoteClipboardToDeviceEnabled() || !normalized) return;
	if (normalized === lastClipboardWrittenFromRemote && now < clipboardEchoSuppressUntil) return;
	try {
		await writeClipboardTextToDevice(normalized);
		lastClipboardWrittenFromRemote = normalized;
		lastClipboardPushSent = normalized;
		lastClipboardPushSentAt = now;
		clipboardEchoSuppressUntil = now + CLIPBOARD_ECHO_SUPPRESS_MS;
	} catch (error) {
		console.warn("[cwsp:clipboard] device write failed", {
			length: t.length,
			source: meta?.source,
			error: describeError(error)
		});
	}
}
async function applyIncomingClipboardImage(asset, meta) {
	if (!isShellRemoteClipboardBridgeEnabled()) return;
	const data = String(asset.data ?? "").trim();
	if (!data) return;
	const mimeType = String(asset.mimeType || "image/png").trim() || "image/png";
	const dedupeKey = asset.hash?.trim() || data.slice(0, 96);
	const now = Date.now();
	if (dedupeKey && dedupeKey === lastInboundClipboardNormalized && now - lastInboundClipboardAt < CLIPBOARD_ECHO_SUPPRESS_MS) return;
	lastInboundClipboardNormalized = dedupeKey;
	lastInboundClipboardAt = now;
	notifyClipboardHandlers("", meta);
	if (!isApplyRemoteClipboardToDeviceEnabled()) return;
	if (dedupeKey === lastClipboardWrittenFromRemote && now < clipboardEchoSuppressUntil) return;
	try {
		await writeClipboardImageToDevice(data, mimeType, asset.hash);
		lastClipboardWrittenFromRemote = dedupeKey;
		lastClipboardPushSent = dedupeKey;
		lastClipboardPushSentAt = now;
		clipboardEchoSuppressUntil = now + CLIPBOARD_ECHO_SUPPRESS_MS;
	} catch (error) {
		console.warn("[cwsp:clipboard] device image write failed", {
			mimeType,
			hash: asset.hash,
			source: meta?.source,
			error: describeError(error)
		});
	}
}
function safeJson(value) {
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
var extractClipboardText = (value) => {
	if (typeof value === "string") return value;
	if (!value || typeof value !== "object") return "";
	const record = value;
	for (const key of [
		"text",
		"content",
		"body"
	]) {
		const direct = record[key];
		if (typeof direct === "string") return direct;
	}
	if (typeof record.result === "string") return record.result;
	const nested = record.payload ?? record.data;
	if (nested && nested !== value) {
		const inner = extractClipboardText(nested);
		if (inner) return inner;
	}
	return "";
};
var isInboundClipboardWhat = (what) => {
	const normalized = String(what || "").trim().toLowerCase();
	return normalized === "clipboard:update" || normalized === "clipboard:write" || normalized.startsWith("airpad:clipboard:");
};
var extractClipboardTextFromPacket = (packet) => {
	const fromPayload = extractClipboardText(packet.payload ?? packet.data ?? packet.result ?? packet.results);
	if (fromPayload) return fromPayload;
	return extractClipboardText(packet);
};
var extractClipboardAssetFromPacket = (packet) => {
	const carriers = [
		packet.payload,
		packet.data,
		packet.result,
		packet.results,
		packet
	];
	for (const carrier of carriers) {
		if (!carrier || typeof carrier !== "object") continue;
		const rec = carrier;
		const asset = rec.asset ?? rec.dataAsset ?? rec.file ?? rec.image;
		if (!asset || typeof asset !== "object") continue;
		const row = asset;
		const data = typeof row.data === "string" ? row.data.trim() : "";
		if (!data) continue;
		const mimeType = typeof row.mimeType === "string" && row.mimeType.trim() || typeof row.type === "string" && row.type.trim() || "image/png";
		if (!mimeType.toLowerCase().startsWith("image/")) continue;
		return {
			hash: typeof row.hash === "string" ? row.hash.trim() : "",
			mimeType,
			data
		};
	}
	return null;
};
var getCoordinatorPacketSenderId = (packet) => {
	const p = packet;
	if (!p || typeof p !== "object") return "";
	return String(p.from || p.byId || p.sender || "").trim();
};
var inferPacketPurpose = (what) => {
	const normalized = String(what || "").trim().toLowerCase();
	if (normalized.startsWith("clipboard:")) return "clipboard";
	if (normalized.startsWith("files:")) return "storage";
	if (normalized.startsWith("mouse:")) return "mouse";
	if (normalized.startsWith("keyboard:")) return "input";
	if (normalized.startsWith("airpad:")) return "airpad";
	if (normalized.startsWith("sms:")) return "sms";
	if (normalized.startsWith("contacts:")) return "contact";
	if (normalized.startsWith("notification:") || normalized.startsWith("notifications:")) return "general";
	return "general";
};
var describeError = (error) => {
	if (!error) return String(error);
	if (typeof error === "string") return error;
	if (error instanceof Error) return `${error.name}: ${error.message}`;
	return safeJson(error);
};
function getTransportMode() {
	return getAirPadTransportMode() === "secure" ? "secure" : "plaintext";
}
var fromBase64 = (value) => {
	try {
		const binary = atob(value);
		const bytes = new Uint8Array(binary.length);
		for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
		return bytes;
	} catch {
		return null;
	}
};
var isSignedEnvelope = (value) => typeof value === "object" && value !== null && typeof value.cipher === "string" && typeof value.sig === "string";
var toSafeObject = (value) => {
	if (!value || typeof value !== "string") return null;
	try {
		return JSON.parse(value);
	} catch {
		return null;
	}
};
var shouldAutoReconnectAfterDisconnect = (reason) => {
	if (!reason) return true;
	if (reason === "io client disconnect" || reason === "forced close") return false;
	return true;
};
var shouldRotateCandidateOnDisconnect = (reason) => {
	if (!reason) return true;
	if (reason === "io server disconnect" || reason === "io client disconnect") return false;
	return true;
};
var getSecret = () => (getAirPadTransportSecret() || "").trim();
var getClientId = () => {
	return sanitizeFleetSelfWireNodeId((getAirPadClientId() || "").trim()) || "airpad-client";
};
var getClientToken = () => (getAssociatedClientToken() || "").trim();
var getWireAccessToken = () => (getAccessToken() || "").trim();
var getCoordinatorNodes = () => {
	return wireTargetNodeIds(parseWireTargetList(getRemoteRouteTarget().trim()));
};
var nextPacketId = () => {
	if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
	return `airpad-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};
var isCoordinatorPacket = (value) => {
	return !!value && typeof value === "object" && ("op" in value || "what" in value || "uuid" in value || "result" in value || "error" in value);
};
var mapFrameOpToRuntimeOp = (value) => {
	if (value === "request") return "ask";
	if (value === "response") return "result";
	if (value === "signal" || value === "notify" || value === "redirect") return "act";
	return value;
};
var mapRuntimeOpToFrameOp = (value) => {
	return value;
};
var toCanonicalCoordinatorPacket = (packet) => {
	const clientId = getClientId();
	const clientToken = getClientToken();
	const wireAccessToken = (typeof packet.accessToken === "string" && packet.accessToken.trim() ? packet.accessToken.trim() : typeof packet.airpadToken === "string" && packet.airpadToken.trim() ? packet.airpadToken.trim() : "") || getWireAccessToken();
	const sender = String(packet.sender || packet.byId || packet.from || clientId || "").trim() || void 0;
	const from = String(packet.from || sender || "").trim() || void 0;
	const byId = String(packet.byId || sender || "").trim() || void 0;
	const destinations = Array.isArray(packet.destinations) && packet.destinations.length ? packet.destinations : Array.isArray(packet.nodes) ? packet.nodes : getCoordinatorNodes();
	const uuid = typeof packet.uuid === "string" && packet.uuid.trim() ? packet.uuid.trim() : nextPacketId();
	const now = Date.now();
	return {
		...packet,
		op: mapRuntimeOpToFrameOp(packet.op),
		type: String(packet.type || packet.what || "").trim() || packet.what,
		protocol: normalizeCoordinatorProtocol(packet.protocol),
		transport: String(packet.transport || WS_TRANSPORT).trim() || WS_TRANSPORT,
		purpose: String(packet.purpose || inferPacketPurpose(String(packet.what || packet.type || ""))).trim() || "general",
		sender,
		byId,
		from,
		nodes: destinations,
		destinations,
		ids: typeof packet.ids === "object" && packet.ids != null ? packet.ids : {
			byId,
			from,
			sender,
			destinations
		},
		urls: Array.isArray(packet.urls) && packet.urls.length ? packet.urls : [getRemoteHost()],
		tokens: Array.isArray(packet.tokens) && packet.tokens.length ? packet.tokens : clientToken ? [clientToken] : [],
		token: packet.token || clientToken || void 0,
		userKey: typeof packet.userKey === "string" && packet.userKey.trim() ? packet.userKey : clientToken || void 0,
		accessToken: wireAccessToken || void 0,
		flags: {
			...packet.flags,
			canonicalV2: true
		},
		uuid,
		timestamp: Number(packet.timestamp || 0) > 0 ? Number(packet.timestamp) : now
	};
};
var handleCoordinatorPacket = async (packet) => {
	const op = mapFrameOpToRuntimeOp(packet.op);
	const what = (packet.what || packet.type || "").trim();
	const uuid = typeof packet.uuid === "string" ? packet.uuid : "";
	if (uuid && coordinatorPending.has(uuid)) {
		const pending = coordinatorPending.get(uuid);
		if (pending) {
			clearTimeout(pending.timeoutId);
			coordinatorPending.delete(uuid);
			if (op === "error" || packet.error !== void 0) pending.reject(packet.error ?? {
				ok: false,
				error: "Unknown coordinator error"
			});
			else pending.resolve(packet.result ?? packet.results);
		}
		return;
	}
	if (op === "ask" && what === "clipboard:get") {
		try {
			const text = await readClipboardTextFromDevice();
			emitCoordinatorPacket({
				...buildCoordinatorPacket("result", what, null, {
					uuid,
					nodes: packet.from ? [packet.from] : void 0
				}),
				result: typeof text === "string" ? text : String(text || "")
			});
		} catch (error) {
			emitCoordinatorPacket({
				...buildCoordinatorPacket("error", what, null, {
					uuid,
					nodes: packet.from ? [packet.from] : void 0
				}),
				error: error?.message || String(error)
			});
		}
		return;
	}
	if (op === "act" && what) {
		const category = isInboundClipboardWhat(what) ? "clipboard" : inferWireDedupeCategory(what);
		if (packetWireDedupeGuard.shouldSuppress(packet, category)) return;
	}
	if (isInboundClipboardWhat(what)) {
		if (!isClipboardSenderAllowedForInbound(getCoordinatorPacketSenderId(packet))) return;
		const clipboardPayload = packet.payload ?? packet.data ?? packet.result ?? packet.results;
		const asset = extractClipboardAssetFromPacket(packet);
		if (asset) {
			applyIncomingClipboardImage(asset, { source: typeof clipboardPayload === "object" && clipboardPayload ? String(clipboardPayload.source || "") : void 0 });
			return;
		}
		applyIncomingClipboardText(extractClipboardTextFromPacket(packet), { source: typeof clipboardPayload === "object" && clipboardPayload ? String(clipboardPayload.source || "") : void 0 });
		return;
	}
	if (what === "files:offer" || what === "files:error") {
		const filesPayload = packet.payload ?? packet.data ?? packet.result ?? packet.results;
		try {
			globalThis.dispatchEvent(new CustomEvent("cws:filesIncomingOffer", { detail: {
				what,
				payload: filesPayload,
				sender: getCoordinatorPacketSenderId(packet),
				uuid,
				from: packet.from
			} }));
		} catch {}
		return;
	}
};
/** Emit one already-built coordinator packet if the live socket is ready. */
var emitCoordinatorPacket = (packet) => {
	if (shouldUseNativeCoordinatorTransport()) {
		const what = String(packet.what || packet.type || "");
		const payload = packet.payload ?? packet.data ?? {};
		const nodes = Array.isArray(packet.nodes) ? packet.nodes.map(String) : void 0;
		sendNativeCoordinatorEnvelope({
			op: packet.op === "ask" || packet.op === "request" ? "ask" : "act",
			what,
			payload,
			nodes,
			uuid: typeof packet.uuid === "string" ? packet.uuid : void 0
		});
		return isNativeCoordinatorConnected();
	}
	if (!socket || !socket.connected) return false;
	socket.send(toCanonicalCoordinatorPacket(packet));
	return true;
};
/** Normalize the frontend's higher-level action/request inputs into the shared coordinator packet shape. */
var buildCoordinatorPacket = (op, what, payload, options = {}) => {
	const clientId = getClientId();
	const clientToken = getClientToken();
	const accessTok = options.accessToken !== void 0 ? String(options.accessToken).trim() || getWireAccessToken() : getWireAccessToken();
	return annotatePacketWireHash(annotatePacketWireTime64({
		op: mapRuntimeOpToFrameOp(op),
		what,
		type: what,
		purpose: inferPacketPurpose(what),
		protocol: FRAME_PROTOCOL_WS,
		transport: WS_TRANSPORT,
		payload,
		nodes: options.nodes ?? getCoordinatorNodes(),
		destinations: options.nodes ?? getCoordinatorNodes(),
		uuid: options.uuid,
		sender: clientId,
		byId: clientId,
		from: clientId,
		ids: {
			byId: clientId,
			from: clientId,
			sender: clientId,
			destinations: options.nodes ?? getCoordinatorNodes()
		},
		urls: [getRemoteHost()],
		tokens: clientToken ? [clientToken] : [],
		flags: { canonicalV2: true },
		token: clientToken || void 0,
		userKey: clientToken || void 0,
		accessToken: accessTok || void 0,
		timestamp: Date.now()
	}));
};
var getAesKey = async (secret) => {
	if (!secret || !globalThis.crypto?.subtle) return null;
	if (aesKeyCache.has(secret)) return aesKeyCache.get(secret) || null;
	const material = textEncoder.encode(secret);
	const digest = await globalThis.crypto.subtle.digest("SHA-256", material);
	const key = await globalThis.crypto.subtle.importKey("raw", digest, "AES-GCM", false, ["encrypt", "decrypt"]);
	aesKeyCache.set(secret, key);
	return key;
};
var unwrapSignedPayload = async (envelope) => {
	if (!isSignedEnvelope(envelope)) return envelope;
	const secret = getSecret();
	const cipherBytes = fromBase64(envelope.cipher);
	if (!cipherBytes) return envelope;
	if (!secret || !globalThis.crypto?.subtle) return toSafeObject(textDecoder.decode(cipherBytes)) ?? envelope;
	const key = await getAesKey(secret);
	if (!key) return envelope;
	if (cipherBytes.length < 28) return toSafeObject(textDecoder.decode(cipherBytes)) ?? envelope;
	const iv = cipherBytes.slice(0, 12);
	const encrypted = cipherBytes.slice(12);
	try {
		const decrypted = new Uint8Array(await globalThis.crypto.subtle.decrypt({
			name: "AES-GCM",
			iv
		}, key, encrypted));
		return toSafeObject(textDecoder.decode(decrypted)) ?? envelope;
	} catch {
		return envelope;
	}
};
var unwrapIncomingPayload = async (payload) => {
	if (!isSignedEnvelope(payload)) return payload;
	if (getTransportMode() !== "secure") return payload;
	return unwrapSignedPayload(payload);
};
/** Strip `L-` node id prefix (e.g. `L-192.168.0.110` → `192.168.0.110`) for IP / LNA checks. */
function stripWireEndpointIdPrefix(host) {
	const t = host.trim();
	return /^l-/i.test(t) ? t.slice(2).trim() : t;
}
/** Loopback labels that are invalid as CWSP route hints when dialing a LAN page origin. */
function isLoopbackHost(host) {
	const b = stripWireEndpointIdPrefix(host.trim()).toLowerCase();
	return b === "localhost" || b === "127.0.0.1" || b === "::1";
}
function isPrivateOrLocalTarget(host) {
	if (!host) return false;
	const bare = stripWireEndpointIdPrefix(host);
	if (bare === "localhost" || host === "localhost") return true;
	if (host.endsWith(".local")) return true;
	if (!/^\d{1,3}(?:\.\d{1,3}){3}$/.test(bare)) return false;
	return bare.startsWith("10.") || bare.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(bare) || bare.startsWith("127.") || /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(bare);
}
var getCurrentOriginHostname = () => {
	try {
		return String(new URL(location.href).hostname).toLowerCase();
	} catch {
		return "";
	}
};
var isNetworkFetchAllowed = (rawUrl) => {
	if (!rawUrl || typeof rawUrl !== "string") return false;
	let parsed;
	try {
		parsed = new URL(rawUrl, location.href);
	} catch {
		return false;
	}
	const host = parsed.hostname.toLowerCase();
	const protocol = parsed.protocol.toLowerCase();
	if (protocol !== "http:" && protocol !== "https:") return false;
	const localPageHost = getCurrentOriginHostname();
	return isPrivateOrLocalTarget(host) || host === "localhost" || host === localPageHost;
};
var normalizeNetworkFetchHeaders = (headers) => {
	const next = {};
	if (!headers) return next;
	for (const [key, value] of Object.entries(headers)) {
		if (typeof key !== "string" || !key.trim()) continue;
		if (typeof value !== "string") continue;
		next[key] = value;
	}
	return next;
};
var responseHeadersToObject = (value) => {
	const result = {};
	value.forEach((headerValue, headerName) => {
		result[headerName] = headerValue;
	});
	return result;
};
var handleServerNetworkFetchRequest = async (request) => {
	const requestId = typeof request?.requestId === "string" ? request.requestId.trim() : "";
	const method = typeof request?.method === "string" ? request.method.toUpperCase() : "GET";
	const url = typeof request?.url === "string" ? request.url : "";
	const timeoutMsRaw = request && typeof request.timeoutMs === "number" ? request.timeoutMs : 12e3;
	const timeoutMs = Number.isFinite(timeoutMsRaw) && timeoutMsRaw > 0 ? Math.min(Math.max(Math.round(timeoutMsRaw), 1e3), 6e4) : 12e3;
	if (!requestId) return {
		ok: false,
		status: 400,
		statusText: "Bad Request",
		error: "Missing requestId"
	};
	if (!isNetworkFetchAllowed(url)) return {
		requestId,
		ok: false,
		status: 400,
		statusText: "Bad Request",
		error: "URL not allowed"
	};
	const controller = new AbortController();
	const timer = globalThis.setTimeout(() => controller.abort(), timeoutMs);
	try {
		const headers = normalizeNetworkFetchHeaders(request?.headers);
		const hasBody = !["GET", "HEAD"].includes(method);
		const payload = request?.body;
		const body = hasBody ? typeof payload === "string" ? payload : safeJson(payload) : void 0;
		const response = await fetch(url, {
			method,
			headers,
			body,
			signal: controller.signal
		});
		const responseBody = await response.text();
		return {
			requestId,
			ok: response.ok,
			status: response.status,
			statusText: response.statusText,
			headers: responseHeadersToObject(response.headers),
			body: responseBody
		};
	} catch (error) {
		return {
			requestId,
			ok: false,
			status: 0,
			statusText: "Network Error",
			error: describeError(error)
		};
	} finally {
		clearTimeout(timer);
	}
};
/**
* Best-effort Chrome Local Network Access warm-up for private-IP targets.
*
* WHY: probing `/lna-probe` early makes permission/PNA failures visible before
* the heavier WebSocket candidate rotation starts reporting generic timeouts.
*/
async function tryRequestLocalNetworkPermission(origin, host) {
	if (!origin || !host) return;
	if (!isPrivateOrLocalTarget(host)) return;
	if (location.protocol !== "https:") return;
	if (localNetworkPermissionProbeDone.has(origin)) return;
	localNetworkPermissionProbeDone.add(origin);
	try {
		await fetch(`${origin}/lna-probe`, {
			method: "GET",
			mode: "cors",
			cache: "no-store",
			credentials: "omit",
			targetAddressSpace: "local"
		});
	} catch (error) {
		log(`LNA probe: ${String(error?.message || error || "") || "request failed"}`);
	}
}
var coordinatorWirePayload = (what, payload) => {
	if (!shouldAnnotateCoordinatorPayload(what)) return payload;
	if (!payload || typeof payload !== "object" || Array.isArray(payload)) return payload;
	return annotateCoordinatorPayload(payload);
};
/** Fire-and-forget coordinator action. */
function sendCoordinatorAct(what, payload, nodes, opts) {
	const packet = buildCoordinatorPacket("act", what, coordinatorWirePayload(what, payload), {
		nodes,
		accessToken: opts?.accessToken
	});
	if (emitCoordinatorPacket(packet)) return true;
	if (isRealtimeInputAct(what)) {
		connectWS();
		return false;
	}
	if (queuedCoordinatorActs.length >= MAX_QUEUED_COORDINATOR_ACTS) queuedCoordinatorActs.shift();
	queuedCoordinatorActs.push(packet);
	connectWS();
	return true;
}
function updateButtonLabel() {
	if (!btnEl) return;
	if (isConnecting || socket && socket.connected === false) {
		btnEl.textContent = "WS…";
		return;
	}
	if (wsConnected || socket && socket.connected) btnEl.textContent = "WS ✓";
	else btnEl.textContent = "WS ↔";
}
function logWsState(event, payload) {
	const trimmedPayload = payload.trim();
	log(`[ws-state] event=${event}${trimmedPayload ? ` ${trimmedPayload}` : ""}`);
}
var WS_STATUS_TLS_HINT_CLASS = "ws-status-tls-hint";
function setWsStatusTlsHint(originUrl) {
	const wsStatusEl = getWsStatusEl();
	if (!wsStatusEl) return;
	wsStatusEl.textContent = isCapacitorNativeShell() ? `TLS failed — install your CA in Android Settings → Security → Encryption & credentials (or use Remote host = name on the cert). Try HTTP :8080 if the server allows. ${originUrl}` : `Untrusted cert — open ${originUrl} in this browser, accept, then retry`;
	wsStatusEl.classList.add(WS_STATUS_TLS_HINT_CLASS);
	wsStatusEl.classList.remove("ws-status-ok");
	wsStatusEl.classList.add("ws-status-bad");
}
/** When the server cert is issued for a hostname, https://&lt;public-ip&gt; fails before the user can "trust" it. */
function setWsStatusTlsHostnameHint(hostname) {
	const wsStatusEl = getWsStatusEl();
	if (wsStatusEl) {
		wsStatusEl.textContent = `TLS name mismatch for raw IP — set Remote host to ${hostname} (name on certificate), keep ports as needed`;
		wsStatusEl.classList.add(WS_STATUS_TLS_HINT_CLASS);
		wsStatusEl.classList.remove("ws-status-ok");
		wsStatusEl.classList.add("ws-status-bad");
	}
}
function setWsStatus(connected) {
	wsConnected = connected;
	if (connected) flushQueuedCoordinatorActs();
	const wsStatusEl = getWsStatusEl();
	if (wsStatusEl) {
		wsStatusEl.classList.remove(WS_STATUS_TLS_HINT_CLASS);
		if (connected) {
			wsStatusEl.textContent = "connected";
			wsStatusEl.classList.remove("ws-status-bad");
			wsStatusEl.classList.add("ws-status-ok");
		} else {
			wsStatusEl.textContent = "disconnected";
			wsStatusEl.classList.remove("ws-status-ok");
			wsStatusEl.classList.add("ws-status-bad");
		}
	}
	updateButtonLabel();
	for (const handler of wsConnectionHandlers) try {
		handler(connected);
	} catch {}
}
function handleServerMessage(msg) {
	if (msg.type === "voice_result" || msg.type === "voice_error") {
		const text = msg.error || msg.message || "Actions: " + JSON.stringify(msg.actions || []);
		for (const handler of voiceResultHandlers) try {
			handler({
				text,
				type: msg.type === "voice_error" ? "voice_error" : "voice_result",
				actions: msg.actions,
				error: msg.error
			});
		} catch {}
		log("Voice result: " + text);
	}
}
/**
* Tear down the hub transport and immediately run a fresh {@link connectWS} probe.
* Used when the PWA returns from background / bfcache: OS often kills WebSockets while
* a soft resume reconnect restores endpoint clipboard/coordinator without requiring a manual WS tap.
*/
function reconnectTransportAfterLifecycleResume(reason) {
	if (!globalThis.window) return;
	try {
		const surface = String(document.documentElement?.dataset?.cwspSurface || "").toLowerCase();
		const host = String(location.hostname || "").toLowerCase();
		if (surface === "cwsp-control" || host === "cwsp.u2re.space" || host === "www.cwsp.u2re.space") {
			logWsState("lifecycle-reconnect-skip-control-spa", reason);
			return;
		}
	} catch {}
	logWsState("lifecycle-reconnect", reason);
	stopClipboardPushLoop();
	clearAutoReconnectTimer();
	connectAttemptId += 1;
	manualDisconnectRequested = false;
	for (const [uuid, pending] of coordinatorPending.entries()) {
		clearTimeout(pending.timeoutId);
		pending.reject({
			ok: false,
			error: `Disconnected before response for ${uuid}`
		});
		coordinatorPending.delete(uuid);
	}
	for (const probe of [...activeProbeSockets]) {
		clearProbeTimer(probe);
		probe.removeAllListeners();
		probe.close();
		activeProbeSockets.delete(probe);
	}
	isConnecting = false;
	if (socket) try {
		socket.removeAllListeners();
		socket.disconnect();
	} catch {}
	socket = null;
	mirrorSocketOnGlobal(null);
	setWsStatus(false);
	autoReconnectAttempts = 0;
	packetWireDedupeGuard.clear();
	connectWS();
}
/**
* Probe candidate origins and establish the primary WebSocket transport.
*
* AI-READ: this function is intentionally large because it combines UI-state
* updates, candidate generation, PNA/LNA warm-up, TLS hints, and reconnect
* behavior for browser tabs, extensions, and native shells.
*/
function connectWS() {
	try {
		const surface = String(document.documentElement?.dataset?.cwspSurface || "").toLowerCase();
		const host = String(location.hostname || "").toLowerCase();
		if (surface === "cwsp-control" || host === "cwsp.u2re.space" || host === "www.cwsp.u2re.space") {
			log("WS skip: Control SPA — use paired Control RPC, not browser hub /ws");
			return;
		}
	} catch {}
	if (isNeutralinoNodeClipboardHubOwned()) {
		log("WS skip: Node clipboard-hub owns fleet /ws (WebView must not connect)");
		return;
	}
	if (nativeShellOwnsExclusiveHubWebsocket()) {
		log("WS skip: Java CwspBridgeService owns fleet /ws (WebView must not connect)");
		return;
	}
	if (isConnecting) return;
	if (socket && (socket.connected || socket.connecting)) return;
	if (activeProbeSockets.size > 0) return;
	clearAutoReconnectTimer();
	connectAttemptId += 1;
	const attemptId = connectAttemptId;
	manualDisconnectRequested = false;
	const remoteHost = getRemoteHost().trim();
	const endpointUrlForConnect = getAirPadEndpointUrl().trim();
	const resolvedRemoteHost = remoteHost || endpointUrlForConnect || "";
	const remoteProtocol = getRemoteProtocol();
	const isIpv4Literal = (host) => !!host && /^\d{1,3}(?:\.\d{1,3}){3}$/.test(host);
	const isPrivateIp = (host) => {
		if (!host) return false;
		if (!isIpv4Literal(host)) return false;
		return host.startsWith("10.") || host.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(host) || /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(host);
	};
	/**
	* HTTPS probe order: LAN / private IPs first (where CWSP admin usually listens), then DNS names
	* from **remote** settings, then **page** origin (PWA shell). Putting `u2re.space` last avoids
	* timeouts and PNA noise when the real gateway is 192.168.x.x only.
	*/
	const isHomeFleetPrivateIpv4 = (host) => isIpv4Literal(host) && host.startsWith("192.168.0.");
	const isFleetLanGatewayHost = (host) => {
		return stripWireEndpointIdPrefix(host).trim().toLowerCase() === "192.168.0.200";
	};
	const isFleetWanGatewayHost = (host) => {
		return stripWireEndpointIdPrefix(host).trim().toLowerCase().includes("45.147.");
	};
	const isFleetIngressGatewayHost = (host) => isFleetLanGatewayHost(host) || isFleetWanGatewayHost(host);
	const pageHostEarly = location.hostname || "";
	const pageBareEarly = stripWireEndpointIdPrefix(pageHostEarly) || pageHostEarly;
	const offHomeFleet = isOffHomeFleetNetwork(pageBareEarly);
	const configuredRouteTargetRaw = getRemoteRouteTarget().trim();
	const configuredRouteTarget = sanitizeFleetRouteTarget(configuredRouteTargetRaw, endpointUrlForConnect || remoteHost) || configuredRouteTargetRaw;
	const routedViaFleetGateway = shouldConnectViaFleetGateway(endpointUrlForConnect || remoteHost, configuredRouteTarget);
	const fleetDeskGatewayProbe = shouldFleetDeskGatewayProbeFallbacks(configuredRouteTarget, endpointUrlForConnect || remoteHost, getAirPadDirectTargetUrl());
	const onHomeFleetPage = isOnHomeFleetLanPageHost(pageBareEarly);
	const preferWanGatewayProbeFirst = offHomeFleet || isGuestPrivateLanIpv4(pageBareEarly) || shouldPreferWanGatewayForAirpad(endpointUrlForConnect, pageBareEarly) || routedViaFleetGateway && !onHomeFleetPage || isGatewayHttpsOrigin(endpointUrlForConnect) && offHomeFleet;
	const reorderHostEntriesForHttps = (entries) => {
		const dnsRemote = [];
		const dnsPage = [];
		const homeFleetIpv4 = [];
		const lanGatewayIpv4 = [];
		const wanGatewayIpv4 = [];
		const publicIpv4 = [];
		const guestPrivateIpv4 = [];
		for (const e of entries) if (!isIpv4Literal(e.host)) {
			if (e.source === "page") dnsPage.push(e);
			else dnsRemote.push(e);
		} else if (isFleetLanGatewayHost(e.host)) lanGatewayIpv4.push(e);
		else if (isFleetWanGatewayHost(e.host)) wanGatewayIpv4.push(e);
		else if (isHomeFleetPrivateIpv4(e.host) || e.host === "127.0.0.1") homeFleetIpv4.push(e);
		else if (isPrivateIp(e.host)) guestPrivateIpv4.push(e);
		else publicIpv4.push(e);
		if (preferWanGatewayProbeFirst) return [
			...wanGatewayIpv4,
			...lanGatewayIpv4,
			...dnsRemote,
			...publicIpv4,
			...homeFleetIpv4,
			...dnsPage,
			...guestPrivateIpv4
		];
		if (onHomeFleetPage) return [
			...homeFleetIpv4,
			...lanGatewayIpv4,
			...wanGatewayIpv4,
			...dnsRemote,
			...dnsPage,
			...publicIpv4,
			...guestPrivateIpv4
		];
		return [
			...wanGatewayIpv4,
			...lanGatewayIpv4,
			...homeFleetIpv4,
			...dnsRemote,
			...dnsPage,
			...publicIpv4,
			...guestPrivateIpv4
		];
	};
	const isLikelyPort = (value) => /^\d{1,5}$/.test(value);
	const stripProtocol = (value) => {
		return value.trim().replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0];
	};
	const parseHostAndPort = (value) => {
		const hostSpec = stripProtocol(value).trim();
		if (!hostSpec) return null;
		const at = hostSpec.lastIndexOf(":");
		if (at <= 0) return { host: hostSpec };
		const host = hostSpec.slice(0, at);
		const port = hostSpec.slice(at + 1);
		if (!host || !isLikelyPort(port)) return { host: hostSpec };
		return {
			host,
			port
		};
	};
	let remoteHostSpecs = splitConnectHostList(remoteHost).map((entry) => parseHostAndPort(entry)).filter((entry) => !!entry && !!entry.host);
	if (offHomeFleet && isGatewayHttpsOrigin(endpointUrlForConnect) && !routedViaFleetGateway) {
		const filtered = remoteHostSpecs.filter((spec) => {
			const bare = stripWireEndpointIdPrefix(spec.host).trim();
			if (!bare) return false;
			if (isFleetIngressGatewayHost(bare)) return true;
			if (isIpv4Literal(bare) && isHomeFleetPrivateIpv4(bare)) return false;
			return true;
		});
		if (filtered.length) remoteHostSpecs = filtered;
	}
	if (!remoteHostSpecs.length && endpointUrlForConnect) {
		const endpointSpec = parseHostAndPort(endpointUrlForConnect);
		if (endpointSpec?.host) remoteHostSpecs = [endpointSpec];
	}
	const remotePort = (remoteHostSpecs[0]?.port || "").trim();
	const parsedConfiguredRouteTarget = configuredRouteTarget ? parseHostAndPort(configuredRouteTarget) : void 0;
	const pageHost = pageHostEarly;
	const isLocalPageHost = /^(localhost|127\.0\.0\.1)$/.test(pageHost) || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(pageHost) && (pageHost.startsWith("10.") || pageHost.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(pageHost));
	if (location.protocol === "https:" && remoteProtocol === "http" && !isCapacitorNativeShell()) {
		log("WebSocket error: browser blocks ws/http from https page (mixed content). Open Airpad via http:// or use valid HTTPS cert on endpoint.");
		isConnecting = false;
		setWsStatus(false);
		updateButtonLabel();
		return;
	}
	const remoteHostSpec = remoteHostSpecs[0];
	const parsedRemoteHost = remoteHostSpec?.host || resolvedRemoteHost;
	const parsedRemotePort = remoteHostSpec?.port;
	const routeTargetForQuery = (() => {
		if (isFleetGatewayWireNodeId(configuredRouteTarget)) return normalizeWireNodeIdForWire(configuredRouteTarget);
		if (isFleetGatewayWireNodeId(configuredRouteTargetRaw)) return normalizeWireNodeIdForWire(configuredRouteTargetRaw);
		if (isFleetDeskWireNodeId(configuredRouteTarget)) return normalizeWireNodeIdForWire(configuredRouteTarget);
		if (isAssociableFleetWireNodeId(configuredRouteTarget)) return normalizeWireNodeIdForWire(configuredRouteTarget);
		if (routedViaFleetGateway && isFleetDeskWireNodeId(configuredRouteTargetRaw)) return normalizeWireNodeIdForWire(configuredRouteTargetRaw);
		if (fleetDeskGatewayProbe || isGatewayHttpsOrigin(endpointUrlForConnect) || isGatewayHttpsOrigin(remoteHost)) return DEFAULT_DESK_WIRE_NODE_ID;
		const parsedHost = parsedConfiguredRouteTarget?.host || "";
		if (parsedHost && isHomeFleetLanHost(parsedHost)) return normalizeWireNodeIdForWire(parsedHost);
		if (parsedHost) return parsedHost;
		if (configuredRouteTarget) return configuredRouteTarget;
		return "";
	})();
	const routeTargetPortForQuery = (parsedConfiguredRouteTarget?.port || "").trim();
	const rawProbeHostEarly = (parsedRemoteHost || resolvedRemoteHost || "").trim();
	const firstHostBare = rawProbeHostEarly.length > 0 ? stripWireEndpointIdPrefix(rawProbeHostEarly) || rawProbeHostEarly : "";
	const firstHostIpv4 = (() => {
		const b = firstHostBare.trim();
		if (!b) return "";
		const at = b.lastIndexOf(":");
		if (at > 0 && isLikelyPort(b.slice(at + 1))) return b.slice(0, at);
		return b;
	})();
	const inferProtocol = () => {
		if (remoteProtocol === "http" || remoteProtocol === "https") return remoteProtocol;
		if (remotePort === "443" || remotePort === "8434" || remotePort === "8444") return "https";
		if (remotePort === "80" || remotePort === "8080" || remotePort === "8081") return "http";
		if (isCapacitorNativeShell() && location.protocol === "https:" && firstHostIpv4 && isIpv4Literal(firstHostIpv4) && isPrivateIp(firstHostIpv4)) return "https";
		if (isCapacitorNativeShell() && location.protocol !== "https:" && firstHostIpv4 && isIpv4Literal(firstHostIpv4) && isPrivateIp(firstHostIpv4)) return "http";
		return location.protocol === "https:" ? "https" : "http";
	};
	const primaryProtocol = inferProtocol();
	const rawProbeHost = rawProbeHostEarly;
	const probeHost = stripWireEndpointIdPrefix(rawProbeHost) || rawProbeHost;
	const probePort = remotePort || (primaryProtocol === "https" ? "8434" : "8080");
	tryRequestLocalNetworkPermission(`${primaryProtocol}://${probeHost}:${probePort}`, probeHost);
	if (pageHost && isLoopbackHost(probeHost) && !isLoopbackHost(pageHost) && isPrivateOrLocalTarget(pageHost)) {
		const pageProbeHost = stripWireEndpointIdPrefix(pageHost) || pageHost;
		tryRequestLocalNetworkPermission(`${primaryProtocol}://${pageProbeHost}:${probePort}`, pageProbeHost);
	}
	const fallbackProtocol = primaryProtocol === "https" ? "http" : "https";
	const defaultPortsByProtocol = {
		http: [...CWSP_DEFAULT_HTTP_PORTS],
		https: [...CWSP_DEFAULT_HTTPS_PORTS]
	};
	const locationPort = location.port?.trim?.() || "";
	/** Default 443/80 when `location.port` is empty — used to prefer same-origin WS on unified HTTPS entrypoints. */
	const pageEffectivePort = locationPort || (location.protocol === "https:" ? "443" : location.protocol === "http:" ? "80" : "");
	const protocolOrder = remoteProtocol === "http" ? ["http"] : remoteProtocol === "https" ? ["https"] : [primaryProtocol, fallbackProtocol];
	const isLikelyHttpsPort = (port) => CWSP_DEFAULT_HTTPS_PORTS.includes(port);
	const isLikelyHttpPort = (port) => CWSP_DEFAULT_HTTP_PORTS.includes(port);
	const getPortsForProtocol = (protocol, preferredPort) => {
		const ports = [];
		const explicitPort = (preferredPort && isLikelyPort(preferredPort) ? preferredPort : "") || (remotePort && isLikelyPort(remotePort) ? remotePort : "");
		if (explicitPort) {
			if (protocol === "https") {
				if (isLikelyHttpsPort(explicitPort) || remoteProtocol === "https" || remoteProtocol === "auto") ports.push(explicitPort);
			} else if (isLikelyHttpPort(explicitPort) || remoteProtocol === "http" || remoteProtocol === "auto") ports.push(explicitPort);
			if (!ports.length && remoteProtocol === protocol) ports.push(explicitPort);
			if (ports.length) return ports.filter((port, idx) => ports.indexOf(port) === idx);
		}
		for (const defaultPort of defaultPortsByProtocol[protocol]) ports.push(defaultPort);
		if (locationPort) ports.push(locationPort);
		return ports.filter((port, idx) => ports.indexOf(port) === idx);
	};
	const connectHostFromRemote = (h) => {
		return stripWireEndpointIdPrefix(h.trim()) || h.trim();
	};
	const hostEntries = [];
	for (const remoteHostSpecEntry of remoteHostSpecs) {
		const ch = connectHostFromRemote(remoteHostSpecEntry.host);
		if (!ch) continue;
		hostEntries.push({
			host: ch,
			source: "remote",
			preferPort: remoteHostSpecEntry.port
		});
	}
	if (remoteHostSpecs.length === 0 && remoteHost) {
		const ch = connectHostFromRemote(remoteHost);
		if (ch) hostEntries.push({
			host: ch,
			source: "remote"
		});
	}
	/** Hostnames the user configured for the transport (Connect URL), lowercased. */
	const normalizedRemoteHosts = /* @__PURE__ */ new Set();
	for (const spec of remoteHostSpecs) if (spec.host) normalizedRemoteHosts.add(spec.host.toLowerCase());
	if (remoteHostSpecs.length === 0 && remoteHost.trim()) for (const part of splitConnectHostList(remoteHost.trim())) {
		const parsed = parseHostAndPort(part);
		if (parsed?.host) normalizedRemoteHosts.add(parsed.host.toLowerCase());
	}
	/**
	* If the user configured **any** LAN / local transport host, skip adding `location.hostname`
	* unless it is already listed as a remote host. (Connect URL may list both 192.168.x.x and a
	* public name — we still drop the redundant **page** copy of u2re.space when remotes already
	* include a private gateway.)
	*/
	const hasPrivateOrLocalTransportHost = () => {
		for (const h of normalizedRemoteHosts) {
			const bare = stripWireEndpointIdPrefix(h).toLowerCase();
			if (bare === "localhost" || bare === "127.0.0.1") return true;
			if (isIpv4Literal(bare) && isPrivateIp(bare)) return true;
		}
		return false;
	};
	const pageHostnameLower = pageHost.toLowerCase();
	const pageBareForGuest = stripWireEndpointIdPrefix(pageHost) || pageHost;
	const pageProtocol = String(location.protocol || "").toLowerCase();
	const skipExtensionPageOrigin = pageProtocol === "chrome-extension:" || pageProtocol === "moz-extension:" || pageProtocol === "safari-web-extension:" || /^[a-p]{32}$/.test(pageHostnameLower);
	const skipGuestPageOrigin = Boolean(pageHostnameLower) && isGuestPrivateLanIpv4(pageBareForGuest) && !normalizedRemoteHosts.has(pageHostnameLower);
	const skipPageOriginForDirectLan = Boolean(pageHost) && normalizedRemoteHosts.size > 0 && hasPrivateOrLocalTransportHost() && !isLocalPageHost && !normalizedRemoteHosts.has(pageHostnameLower);
	const skipOffFleetLoopbackPage = offHomeFleet && Boolean(pageHost) && isLoopbackHost(pageHost);
	if (location.hostname && !skipExtensionPageOrigin && !skipPageOriginForDirectLan && !skipGuestPageOrigin && !skipOffFleetLoopbackPage) hostEntries.push({
		host: location.hostname,
		source: "page",
		...pageEffectivePort ? { preferPort: pageEffectivePort } : {}
	});
	const uniqueHostEntries = /* @__PURE__ */ new Map();
	for (const entry of hostEntries) if (entry.host && !uniqueHostEntries.has(entry.host)) uniqueHostEntries.set(entry.host, entry);
	const candidateHostEntries = Array.from(uniqueHostEntries.values());
	const httpsOrderedHostEntries = reorderHostEntriesForHttps(candidateHostEntries);
	const candidates = [];
	for (const protocol of protocolOrder) {
		if (location.protocol === "https:" && protocol === "http" && true) continue;
		const hostList = protocol === "https" ? httpsOrderedHostEntries : candidateHostEntries;
		for (const hostEntry of hostList) {
			const { host, source, preferPort } = hostEntry;
			const hostPortOverride = pageHost && host === pageHost && pageEffectivePort && (!preferPort || preferPort === pageEffectivePort) ? pageEffectivePort : preferPort;
			for (const port of getPortsForProtocol(protocol, hostPortOverride)) {
				const hostBare = stripWireEndpointIdPrefix(host).trim() || host.trim();
				const hostLooksPrivate = isIpv4Literal(hostBare) && isPrivateIp(hostBare);
				const crossOriginHttpsToPrivateLan = location.protocol === "https:" && !isLocalPageHost && hostLooksPrivate;
				const privateLanHint = isCapacitorNativeShell() && hostLooksPrivate || location.protocol === "https:" && isLocalPageHost && hostLooksPrivate || crossOriginHttpsToPrivateLan && hostLooksPrivate;
				candidates.push({
					url: `${protocol}://${host}:${port}`,
					protocol,
					host,
					source,
					port,
					privateLanHint
				});
			}
		}
	}
	const deduplicatedCandidates = candidates.filter((item, idx) => candidates.findIndex((x) => x.url === item.url) === idx);
	if (deduplicatedCandidates.length === 0) {
		isConnecting = false;
		setWsStatus(false);
		updateButtonLabel();
		return;
	}
	const normalizedOffset = deduplicatedCandidates.length > 0 ? nextWsCandidateOffset % deduplicatedCandidates.length : 0;
	const uniqueCandidates = deduplicatedCandidates.slice(normalizedOffset).concat(deduplicatedCandidates.slice(0, normalizedOffset));
	nextWsCandidateOffset = normalizedOffset;
	lastWsCandidates = uniqueCandidates;
	if (lastWsCandidates.length <= 1) nextWsCandidateOffset = 0;
	const rotateCandidate = () => {
		if (lastWsCandidates.length > 1) nextWsCandidateOffset = (nextWsCandidateOffset + 1) % lastWsCandidates.length;
	};
	isConnecting = true;
	updateButtonLabel();
	const maxRounds = 3;
	const retryDelayMs = 450;
	const targetHost = connectHostFromRemote(parsedRemoteHost || remoteHost || "");
	const targetPort = routeTargetPortForQuery || parsedRemotePort || remotePort || (primaryProtocol === "https" ? "8434" : "8080");
	const routeTarget = routeTargetForQuery;
	const resolvedRouteTarget = routeTarget || targetHost || "";
	const isSameAsTargetHost = () => {
		if (!targetHost) return true;
		const normalizedRoute = normalizeWireNodeIdForWire(routeTarget);
		if (!normalizedRoute) return !isFleetIngressGatewayHost(targetHost);
		const normalizedTargetHost = targetHost.trim().toLowerCase();
		const routeBare = stripWireEndpointIdPrefix(normalizedRoute).toLowerCase();
		if (!routeBare || !normalizedTargetHost) return true;
		if (routeBare === normalizedTargetHost) return true;
		if (normalizedRoute.toLowerCase() === `l-${normalizedTargetHost}`) return true;
		if (isAssociableFleetWireNodeId(normalizedRoute) && routeBare !== normalizedTargetHost) return false;
		return false;
	};
	const buildHandshakeForCandidate = (candidate) => {
		const url = candidate.url;
		const clientToken = getClientToken();
		const accessToken = getWireAccessToken();
		const clientAccessToken = getClientAccessToken();
		const clientId = getClientId();
		const peerInstanceId = getAirPadPeerInstanceId().trim();
		const handshakeAuth = {};
		if (clientToken) {
			handshakeAuth.token = clientToken;
			handshakeAuth.userKey = clientToken;
		}
		if (accessToken) handshakeAuth.accessToken = accessToken;
		if (clientAccessToken) handshakeAuth.clientAccessToken = clientAccessToken;
		if (clientId) handshakeAuth.clientId = clientId;
		if (peerInstanceId) {
			handshakeAuth.peerInstanceId = peerInstanceId;
			handshakeAuth.deviceInstanceId = peerInstanceId;
		}
		const queryParams = {};
		if (peerInstanceId) {
			queryParams.peerInstanceId = peerInstanceId;
			queryParams.deviceInstanceId = peerInstanceId;
		}
		queryParams.connectionType = getAirPadHandshakeConnectionType();
		queryParams.archetype = getAirPadHandshakeArchetype();
		queryParams.cwspEnvelope = "v2";
		if (clientId) {
			queryParams.clientId = clientId;
			queryParams.userId = clientId;
		}
		if (clientToken) {
			queryParams.token = clientToken;
			queryParams.userKey = clientToken;
		}
		queryParams[CWSP_ROUTE_QUERY.via] = !isSameAsTargetHost() ? "tunnel" : candidate.source || "unknown";
		queryParams[CWSP_ROUTE_QUERY.localEndpoint] = isSameAsTargetHost() ? "1" : "0";
		const inferredDeskRoute = routeTarget || (isFleetGatewayWireNodeId(configuredRouteTargetRaw) ? "L-200" : "") || "";
		let effectiveRoute = inferredDeskRoute || resolvedRouteTarget;
		let effectiveRouteTarget = inferredDeskRoute || routeTarget || targetHost || resolvedRouteTarget;
		const candBare = stripWireEndpointIdPrefix(candidate.host || "").trim();
		const pageBare = stripWireEndpointIdPrefix(pageHost || "").trim();
		if (candidate.source === "page" && candBare && pageBare && candBare.toLowerCase() === pageBare.toLowerCase() && isLoopbackHost(effectiveRoute)) {
			effectiveRoute = candBare;
			effectiveRouteTarget = candBare;
		}
		if (effectiveRoute) {
			queryParams[CWSP_ROUTE_QUERY.route] = effectiveRoute;
			queryParams[CWSP_ROUTE_QUERY.routeTarget] = effectiveRouteTarget;
		}
		if (shouldUseVerboseAirpadQuery()) {
			queryParams[CWSP_ROUTE_QUERY.hop] = candidate.host || remoteHost || "unknown";
			queryParams[CWSP_ROUTE_QUERY.host] = candidate.host || remoteHost || "";
			queryParams[CWSP_ROUTE_QUERY.target] = targetHost || "";
			queryParams[CWSP_ROUTE_QUERY.targetPort] = targetPort;
			queryParams[CWSP_ROUTE_QUERY.viaPort] = candidate.port || "";
			queryParams[CWSP_ROUTE_QUERY.protocol] = candidate.protocol || "https";
		}
		if (clientAccessToken) queryParams.clientAccessToken = clientAccessToken;
		if (accessToken) queryParams.accessToken = accessToken;
		return {
			url,
			clientToken,
			accessToken,
			clientId,
			peerInstanceId,
			handshakeAuth,
			queryParams
		};
	};
	const finalizeConnectedSocket = (probeSocket, candidate, index, url) => {
		socket = probeSocket;
		logWsState("connected", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} transport=${candidate.protocol} parallel=${AIRPAD_CANDIDATE_PARALLEL}`);
		isConnecting = false;
		autoReconnectAttempts = 0;
		clearAutoReconnectTimer();
		setWsStatus(true);
		startClipboardPushLoop();
		socket.on("disconnect", (reason) => {
			stopClipboardPushLoop();
			logWsState("disconnected", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} reason=${reason || "unknown"}`);
			isConnecting = false;
			setWsStatus(false);
			updateButtonLabel();
			const manual = manualDisconnectRequested;
			manualDisconnectRequested = false;
			for (const [uuid, pending] of coordinatorPending.entries()) {
				clearTimeout(pending.timeoutId);
				pending.reject({
					ok: false,
					error: `Disconnected before response for ${uuid}`
				});
				coordinatorPending.delete(uuid);
			}
			socket = null;
			if (manual) {
				autoReconnectAttempts = 0;
				return;
			}
			if (shouldRotateCandidateOnDisconnect(reason)) {
				rotateCandidate();
				if (lastWsCandidates.length > 1) log(`WebSocket disconnect reason "${reason || "unknown"}", trying next candidate on reconnect`);
			}
			const attempt = autoReconnectAttempts + 1;
			if (!shouldAutoReconnectAfterDisconnect(reason) || false) return;
			autoReconnectAttempts = attempt;
			const delay = Math.min(AUTO_RECONNECT_BASE_DELAY_MS * attempt, 5e3);
			clearAutoReconnectTimer();
			autoReconnectTimer = globalThis.setTimeout(() => {
				autoReconnectTimer = null;
				if (isConnecting || wsConnected || socket && socket.connected || socket?.connecting) return;
				logWsState("auto-reconnect", `attempt=${`${attempt}/unlimited`} reason=${reason || "unknown reason"}`);
				connectWS();
			}, delay);
		});
		socket.on("connect_error", (error) => {
			logWsState("socket-connect-error", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} reason=${error?.message || "unknown"}`);
			isConnecting = false;
			updateButtonLabel();
		});
		socket.on("voice_result", async (msg) => {
			handleServerMessage(await unwrapIncomingPayload(msg));
		});
		socket.on("voice_error", async (msg) => {
			handleServerMessage(await unwrapIncomingPayload(msg));
		});
		socket.on("clipboard:update", async (msg) => {
			const decoded = await unwrapIncomingPayload(msg);
			const sender = getCoordinatorPacketSenderId(decoded);
			if (!isClipboardSenderAllowedForInbound(sender)) return;
			const asset = extractClipboardAssetFromPacket(decoded);
			if (asset) {
				applyIncomingClipboardImage(asset, { source: decoded?.source });
				return;
			}
			applyIncomingClipboardText(extractClipboardTextFromPacket(decoded), { source: decoded?.source });
		});
		socket.on("data", async (packet) => {
			const decoded = await unwrapIncomingPayload(packet);
			if (!isCoordinatorPacket(decoded)) return;
			handleCoordinatorPacket(decoded);
		});
		socket.on("message", async (packet) => {
			const decoded = await unwrapIncomingPayload(packet);
			if (!isCoordinatorPacket(decoded)) return;
			handleCoordinatorPacket(decoded);
		});
		socket.on("network.fetch", async (request, ack) => {
			const response = await handleServerNetworkFetchRequest(request);
			if (typeof ack === "function") ack(response);
		});
		mirrorSocketOnGlobal(socket);
	};
	const probeBatch = (startIndex, round) => new Promise((resolve) => {
		if (attemptId !== connectAttemptId) {
			resolve(false);
			return;
		}
		const batch = uniqueCandidates.slice(startIndex, startIndex + AIRPAD_CANDIDATE_PARALLEL);
		if (!batch.length) {
			resolve(false);
			return;
		}
		if (startIndex === 0 && round === 0) {
			const el = getWsStatusEl();
			if (el) {
				el.classList.remove(WS_STATUS_TLS_HINT_CLASS);
				el.textContent = "connecting…";
			}
		}
		let won = false;
		let settled = false;
		let deadCount = 0;
		const batchSize = batch.length;
		let batchTlsCertUrl = null;
		let batchTlsHostname = null;
		const finishWin = (winner, candidate, index, url, hs) => {
			if (settled) return;
			settled = true;
			won = true;
			for (const s of [...activeProbeSockets]) if (s !== winner) {
				clearProbeTimer(s);
				s.removeAllListeners();
				s.close();
				activeProbeSockets.delete(s);
			}
			clearProbeTimer(winner);
			activeProbeSockets.delete(winner);
			finalizeConnectedSocket(winner, candidate, index, url);
			resolve(true);
		};
		const finishAllDead = () => {
			if (settled || won) return;
			deadCount++;
			if (deadCount < batchSize) return;
			settled = true;
			if (batchTlsCertUrl) setWsStatusTlsHint(batchTlsCertUrl);
			else if (batchTlsHostname) setWsStatusTlsHostnameHint(batchTlsHostname);
			resolve(false);
		};
		for (let localIdx = 0; localIdx < batch.length; localIdx++) {
			const candidate = batch[localIdx];
			const index = startIndex + localIdx;
			const hs = buildHandshakeForCandidate(candidate);
			const { url, handshakeAuth, queryParams } = hs;
			logWsState("connecting", `batch=${startIndex}-${startIndex + batchSize - 1} candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} transport=${candidate.protocol} source=${candidate.source} host=${candidate.host}:${candidate.port} target=${targetHost}:${targetPort}`);
			const probeSocket = createWsSocket(url, {
				auth: handshakeAuth,
				query: queryParams,
				timeout: AIRPAD_PROBE_IO_TIMEOUT_MS
			});
			activeProbeSockets.add(probeSocket);
			probeSocket.__cwspProbeTimer = globalThis.setTimeout(() => {
				if (attemptId !== connectAttemptId) {
					clearProbeTimer(probeSocket);
					probeSocket.removeAllListeners();
					probeSocket.close();
					activeProbeSockets.delete(probeSocket);
					return;
				}
				if (won || settled || probeSocket.connected) return;
				clearProbeTimer(probeSocket);
				probeSocket.removeAllListeners();
				probeSocket.close();
				activeProbeSockets.delete(probeSocket);
				logWsState("connect-failed", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} reason=probe-hard-timeout`);
				finishAllDead();
			}, AIRPAD_PROBE_HARD_CAP_MS);
			probeSocket.on("connect", () => {
				clearProbeTimer(probeSocket);
				if (attemptId !== connectAttemptId) {
					probeSocket.removeAllListeners();
					probeSocket.close();
					activeProbeSockets.delete(probeSocket);
					return;
				}
				if (won || settled) {
					probeSocket.removeAllListeners();
					probeSocket.close();
					activeProbeSockets.delete(probeSocket);
					return;
				}
				finishWin(probeSocket, candidate, index, url, hs);
			});
			probeSocket.on("connect_error", (error) => {
				clearProbeTimer(probeSocket);
				activeProbeSockets.delete(probeSocket);
				if (won || settled) {
					probeSocket.removeAllListeners();
					probeSocket.close();
					return;
				}
				probeSocket.removeAllListeners();
				probeSocket.close();
				const details = error?.description || error?.context || "";
				const errorMessage = String(error?.message || error || "");
				const combinedProbeErr = `${errorMessage} ${String(details)}`;
				const weakWsTlsSuspect = candidate.protocol === "https" && isPrivateIp(candidate.host) && /xhr poll error|websocket error/i.test(errorMessage);
				/** Capacitor/WebView often reports generic xhr/WS errors; do not label "Untrusted cert" without TLS signals. */
				const tlsKeywordsInErr = /certificate|cert\.|ssl|tls|trust|ERR_CERT|ERR_SSL|handshake|authority|SELF_SIGNED|unknown.*cert|invalid.*cert|unable to verify|pkix|hostname|name mismatch/i.test(combinedProbeErr);
				const plainTransportFailure = /refused|ECONNREFUSED|ENOTFOUND|timed out|timeout|unreachable|ERR_CONNECTION|ADDRESS_UNREACHABLE|NAME_NOT_RESOLVED|INTERNET_DISCONNECTED|network.*lost/i.test(combinedProbeErr);
				const nativeAir = isCapacitorNativeShell();
				if (weakWsTlsSuspect && !batchTlsCertUrl && (tlsKeywordsInErr || !nativeAir && !plainTransportFailure)) batchTlsCertUrl = url;
				const publicIpv4Https = candidate.protocol === "https" && isIpv4Literal(candidate.host) && !isPrivateIp(candidate.host) && candidate.host !== "127.0.0.1";
				const combinedErr = `${errorMessage} ${String(details)}`;
				if (publicIpv4Https && /xhr poll error|websocket error|certificate|CERT|common name|ssl|tls|failed to fetch|name invalid/i.test(combinedErr) && !batchTlsHostname) {
					const suggested = pageHost && !isIpv4Literal(pageHost) && pageHost !== "localhost" ? pageHost : "";
					if (suggested) batchTlsHostname = suggested;
				}
				if (candidate.privateLanHint && /cors|private network|address space|failed fetch/i.test(errorMessage)) logWsState("connect-failed", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} reason=${errorMessage} hint=private-network-cors`);
				logWsState("connect-failed", `candidate=${index + 1}/${uniqueCandidates.length} candidate_url=${url} reason=${errorMessage} details=${details ? safeJson(details) : "none"}`);
				finishAllDead();
			});
		}
	});
	(async () => {
		for (let round = 0; round < maxRounds; round++) {
			for (let start = 0; start < uniqueCandidates.length; start += AIRPAD_CANDIDATE_PARALLEL) {
				if (attemptId !== connectAttemptId) return;
				if (await probeBatch(start, round)) return;
			}
			if (round + 1 < maxRounds) {
				logWsState("retry", `round=${round + 2}/${maxRounds} next=0`);
				await new Promise((r) => globalThis.setTimeout(r, retryDelayMs));
			}
		}
		if (attemptId !== connectAttemptId) return;
		logWsState("failed", `round=${maxRounds}/${maxRounds} all-candidates`);
		isConnecting = false;
		setWsStatus(false);
		updateButtonLabel();
	})();
}
/** Stop probe sockets, tear down the primary transport, and mark the disconnect as user-requested. */
function disconnectWS() {
	stopClipboardPushLoop();
	clearAutoReconnectTimer();
	connectAttemptId += 1;
	manualDisconnectRequested = true;
	for (const probe of [...activeProbeSockets]) {
		clearProbeTimer(probe);
		probe.removeAllListeners();
		probe.close();
		activeProbeSockets.delete(probe);
	}
	isConnecting = false;
	if (!socket) {
		setWsStatus(false);
		updateButtonLabel();
		return;
	}
	log("Disconnecting WebSocket...");
	socket.disconnect();
	socket = null;
	mirrorSocketOnGlobal(null);
	setWsStatus(false);
}
/** Bind the optional connect button UI to the shared transport lifecycle. */
function initWebSocket(btnConnect) {
	btnEl = btnConnect;
	updateButtonLabel();
	if (!btnConnect) return;
	if (wsConnectButton === btnConnect) return;
	if (wsConnectButton) wsConnectButton.removeEventListener("click", handleWsConnectButtonClick);
	wsConnectButton = btnConnect;
	wsConnectButton.addEventListener("click", handleWsConnectButtonClick);
}
function handleWsConnectButtonClick() {
	if (isConnecting || wsConnected || socket && socket.connected || socket?.connecting) disconnectWS();
	else connectWS();
}
//#endregion
//#region ../CWSP-document/src/frontend/boot/hub-socket-boot.ts
/**
* Unified hub transport: WebSocket to cwsp / endpoint (same stack as AirPad), optional background connection.
* Used from main PWA boot, Settings save, and CRX shells so clipboard coordinator works outside the AirPad view.
*
* Filename: hub-socket-boot.ts
* FullPath: modules/projects/subsystem/src/boot/hub-socket-boot.ts
* Change date and time: 14.05.00_19.07.2026
* Reason for changes: SW-safe DOM checks (no bare `window`) for CRX service worker.
*/
/** After this long in the background, force a full reconnect (zombie TCP / suspended workers). */
var PWA_STALE_BACKGROUND_MS = 12e3;
var hubLifecycleRecoveryInstalled = false;
var lastDocumentHiddenAt = 0;
/** True only in real DOM pages — never use bare `window` (throws in MV3 SW). */
var canUseDomWindow = () => {
	try {
		const g = globalThis;
		return Boolean(g.window && g.document);
	} catch {
		return false;
	}
};
var isCapacitorNativePlatform = () => {
	try {
		const c = globalThis.Capacitor;
		return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
	} catch {
		return false;
	}
};
/**
* True when native Android (Capacitor/NativeScript) owns fleet `/ws`.
* INVARIANT: WebView must not open a second `/ws` with the same clientId.
* AirPad input goes through CwsBridge → CwspWsClient instead.
*/
function nativeShellOwnsExclusiveHubWebsocket() {
	if (!isPreferNativeWebsocketEnabled()) return false;
	try {
		if (globalThis.__CWS_NATIVE__ === true) return true;
	} catch {}
	return isCapacitorNativePlatform();
}
/**
* Neutralino/WebNative: Node clipboard-hub owns the fleet `/ws` clipboard session.
* INVARIANT: WebView must not open a second `/ws` with the same clientId (kicks the hub).
*/
function nodeClipboardHubOwnsExclusiveWebsocket() {
	return isNeutralinoNodeClipboardHubOwned();
}
/** Any shell where WebView browser WebSocket must stay dark for fleet hub. */
function backendOwnsExclusiveHubWebsocket() {
	return nativeShellOwnsExclusiveHubWebsocket() || nodeClipboardHubOwnsExclusiveWebsocket();
}
function shouldRunHubRecovery() {
	if (backendOwnsExclusiveHubWebsocket()) return false;
	if (!isMaintainHubSocketConnectionEnabled() && !isClipboardHubBootstrapEnabled()) return false;
	if (!getRemoteHost().trim()) return false;
	return true;
}
/**
* PWA / mobile: restore hub ↔ endpoint after suspend, offline, or bfcache restore.
* Requires Settings → maintain hub socket + a remote host (same rules as {@link applyHubSocketFromSettings}).
*/
function installAirpadHubLifecycleRecovery() {
	if (hubLifecycleRecoveryInstalled || !canUseDomWindow()) return;
	hubLifecycleRecoveryInstalled = true;
	const doc = globalThis.document;
	const win = globalThis.window;
	doc.addEventListener("visibilitychange", () => {
		if (doc.visibilityState !== "hidden") return;
		lastDocumentHiddenAt = Date.now();
	});
	const schedule = (fn) => {
		globalThis.setTimeout(fn, 280);
	};
	const recoverAfterVisibility = () => {
		if (!shouldRunHubRecovery()) return;
		(async () => {
			initWebSocket(null);
			const live = Boolean(getWS()?.connected);
			if (lastDocumentHiddenAt > 0 && Date.now() - lastDocumentHiddenAt >= PWA_STALE_BACKGROUND_MS && (live || isWSConnected())) {
				reconnectTransportAfterLifecycleResume("visibility");
				return;
			}
			if (!live && !isWSConnected()) connectWS();
		})();
	};
	const recoverAfterNetworkOrRestore = (reason) => {
		if (!shouldRunHubRecovery()) return;
		(() => {
			initWebSocket(null);
			reconnectTransportAfterLifecycleResume(reason);
		})();
	};
	doc.addEventListener("visibilitychange", () => {
		if (doc.visibilityState !== "visible") return;
		schedule(recoverAfterVisibility);
	});
	win.addEventListener("online", () => schedule(() => recoverAfterNetworkOrRestore("online")));
	win.addEventListener("pageshow", (ev) => {
		if (!ev.persisted) return;
		schedule(() => recoverAfterNetworkOrRestore("bfcache"));
	});
}
/**
* Apply after boot or any settings mutation (Save, storage sync). Idempotent with {@link applyAirpadRuntimeFromAppSettings}.
*/
async function applyHubSocketFromSettings(settings) {
	installAirpadHubLifecycleRecovery();
	if (await shouldDeferCrxHubSocketBootstrap(settings)) return;
	applyAirpadRuntimeFromAppSettings(settings);
	try {
		const surface = String(document.documentElement?.dataset?.cwspSurface || "").toLowerCase();
		const host = String(location.hostname || "").toLowerCase();
		if (surface === "cwsp-control" || host === "cwsp.u2re.space" || host === "www.cwsp.u2re.space") return;
	} catch {}
	if (nativeShellOwnsExclusiveHubWebsocket()) return;
	if (nodeClipboardHubOwnsExclusiveWebsocket()) return;
	if (!isMaintainHubSocketConnectionEnabled() && !isClipboardHubBootstrapEnabled()) return;
	const host = getRemoteHost().trim();
	if (!host) return;
	try {
		const raw = /^https?:\/\//i.test(host) ? host.split(",")[0].trim() : `https://${host}`;
		const h = new URL(raw).hostname.toLowerCase();
		if (h === "cwsp.u2re.space" || h === "www.cwsp.u2re.space" || h === "md.u2re.space" || h === "www.md.u2re.space") {
			console.warn("[hub-socket-boot] refusing Control SPA host as /ws target", host);
			return;
		}
	} catch {}
	initWebSocket(null);
	connectWS();
}
//#endregion
//#region ../CWSP-document/src/frontend/boot/capacitor-settings-permissions.ts
var capacitor_settings_permissions_exports = /* @__PURE__ */ __exportAll({
	ensureCapacitorBridgeDaemonStarted: () => ensureCapacitorBridgeDaemonStarted,
	requestCapacitorSettingsPermissionsAfterSave: () => requestCapacitorSettingsPermissionsAfterSave
});
var cap = () => {
	try {
		const c = globalThis?.Capacitor;
		return c && typeof c === "object" ? c : null;
	} catch {
		return null;
	}
};
var plugin = (name) => {
	const p = cap()?.Plugins?.[name];
	return p && typeof p === "object" ? p : null;
};
var callSafe = async (fn, ...args) => {
	try {
		return typeof fn === "function" ? await fn(...args) : void 0;
	} catch (e) {
		console.warn("[capacitor-settings-permissions]", e);
		return;
	}
};
/**
* After Settings save on native Android, request permissions / open system UI
* implied by the saved shell toggles.
*/
var requestCapacitorSettingsPermissionsAfterSave = async (settings) => {
	const lines = [];
	const results = [];
	let prompted = false;
	if (!isCapacitorNative$2()) return {
		lines,
		results,
		prompted
	};
	if (settings.shell) {
		settings.shell.acceptSmsBridgeData = false;
		settings.shell.enableNativeSms = false;
	}
	const shell = settings.shell || {};
	const wantsContacts = shell.acceptContactsBridgeData === true;
	const wantsDaemon = (shell.bridgeDaemonEnabled ?? true) !== false;
	const wantsClipboardBridge = (shell.enableRemoteClipboardBridge ?? true) !== false;
	const wantsNotifications = wantsDaemon || wantsClipboardBridge;
	const platform = plugin("CwsPlatform");
	if (wantsContacts || wantsNotifications) {
		if (platform?.requestSettingsPermissions) {
			const raw = await callSafe(platform.requestSettingsPermissions, {
				contacts: wantsContacts,
				sms: false,
				notifications: wantsNotifications,
				overlay: false
			});
			let permPrompted = false;
			if (raw && typeof raw === "object") {
				permPrompted = raw.prompted === true;
				prompted = permPrompted;
				const arr = raw.results;
				if (Array.isArray(arr)) {
					for (const row of arr) if (row && typeof row === "object") {
						const permission = String(row.permission ?? "");
						if (permission === "SYSTEM_ALERT_WINDOW") continue;
						if (permission === "READ_SMS" || permission === "RECEIVE_SMS" || permission === "SEND_SMS") continue;
						results.push({
							permission,
							granted: Boolean(row.granted)
						});
					}
				}
			}
			const denied = results.filter((r) => r.granted === false);
			if (denied.length) lines.push(`Permission denied: ${denied.map((r) => r.permission).filter(Boolean).join(", ")}`);
			else if (permPrompted) lines.push("Runtime permissions requested");
		} else {
			const legacy = plugin("DevicePermissions") || plugin("Permissions");
			const perms = [];
			if (wantsContacts) perms.push("READ_CONTACTS");
			if (wantsNotifications) perms.push("POST_NOTIFICATIONS");
			if (legacy?.requestPermissions && perms.length) {
				await callSafe(legacy.requestPermissions, { permissions: perms });
				lines.push("Runtime permissions requested (legacy plugin)");
			}
		}
	}
	if (wantsDaemon && platform?.startCwspBridge) {
		await callSafe(platform.startCwspBridge);
		lines.push("CWSP foreground service started");
	} else if (!wantsDaemon && platform?.stopCwspBridge) {
		await callSafe(platform.stopCwspBridge);
		lines.push("CWSP foreground service stopped");
	}
	return {
		lines,
		results,
		prompted
	};
};
/**
* Cold-start (or keep) the Android foreground bridge on app boot.
* WHY: previously only Settings Save / Share / CONFIGURE started CwspBridgeService.
*/
var ensureCapacitorBridgeDaemonStarted = async (settings) => {
	if (!isCapacitorNative$2()) return false;
	if (!(((settings?.shell || {}).bridgeDaemonEnabled ?? true) !== false)) return false;
	if (settings?.shell) {
		settings.shell.acceptSmsBridgeData = false;
		settings.shell.enableNativeSms = false;
	}
	const platform = plugin("CwsPlatform");
	if (!platform?.startCwspBridge) return false;
	await callSafe(platform.startCwspBridge);
	return true;
};
//#endregion
//#region ../CWSP-document/src/shared/routing/core/app-layers.ts
var ensureAppLayers = (mountElement, options = {}) => {
	const enableOrientLayer = options.enableOrientLayer !== false;
	const enableCanvasLayer = options.enableCanvasLayer !== false;
	const existingCanvas = mountElement.querySelector("[data-app-layer=\"canvas\"]");
	const existingOrient = mountElement.querySelector("[data-app-layer=\"orient\"]");
	const existingShell = mountElement.querySelector("[data-app-layer=\"shell\"]");
	const existingOverlay = mountElement.querySelector("[data-app-layer=\"overlay\"]");
	const createCanvasLayer = () => {
		const canvasLayer = document.createElement("div");
		canvasLayer.dataset.appLayer = "canvas";
		canvasLayer.className = "app-layer app-layer--canvas";
		canvasLayer.style.position = "absolute";
		canvasLayer.style.inset = "0";
		canvasLayer.style.zIndex = "0";
		canvasLayer.style.pointerEvents = "none";
		initializeAppCanvasLayer(canvasLayer);
		return canvasLayer;
	};
	if (existingShell && existingOverlay) {
		let canvasLayer = existingCanvas;
		if (enableCanvasLayer && !canvasLayer) {
			canvasLayer = createCanvasLayer();
			mountElement.insertBefore(canvasLayer, existingOrient ?? existingShell);
		}
		if (!enableCanvasLayer && canvasLayer) {
			canvasLayer.remove();
			canvasLayer = null;
		}
		if (enableOrientLayer && !existingOrient) {
			const orientLayer = document.createElement("div");
			orientLayer.dataset.appLayer = "orient";
			orientLayer.className = "app-layer app-layer--orient";
			orientLayer.style.position = "absolute";
			orientLayer.style.inset = "0";
			orientLayer.style.zIndex = "5";
			orientLayer.style.pointerEvents = "none";
			orientLayer.style.background = "transparent";
			const orientBox = document.createElement("cw-oriented-box");
			orientBox.className = "ui-orientbox app-oriented-box";
			orientBox.setAttribute("data-mixin", "ui-orientbox");
			orientBox.style.position = "absolute";
			orientBox.style.inset = "0";
			orientBox.style.pointerEvents = "auto";
			orientBox.style.background = "transparent";
			orientLayer.appendChild(orientBox);
			fixOrientToScreen(orientBox);
			mountElement.insertBefore(orientLayer, existingShell);
			return {
				canvasLayer,
				orientLayer,
				shellLayer: existingShell,
				overlayLayer: existingOverlay
			};
		}
		if (!enableOrientLayer && existingOrient) {
			existingOrient.remove();
			return {
				canvasLayer,
				orientLayer: null,
				shellLayer: existingShell,
				overlayLayer: existingOverlay
			};
		}
		return {
			canvasLayer,
			orientLayer: enableOrientLayer ? existingOrient || null : null,
			shellLayer: existingShell,
			overlayLayer: existingOverlay
		};
	}
	mountElement.replaceChildren();
	mountElement.style.position = "relative";
	mountElement.style.overflow = "hidden";
	mountElement.dataset.appLayerRoot = "true";
	try {
		const root = document.documentElement;
		if (mountElement === document.body || mountElement.id === "app") {
			if (!root.style.minBlockSize) root.style.minBlockSize = "100dvb";
			if (!root.style.blockSize && !root.style.height) root.style.blockSize = "100%";
			if (!document.body.style.margin && mountElement === document.body) document.body.style.margin = "0";
		}
		if (!mountElement.style.minBlockSize) mountElement.style.minBlockSize = "100dvb";
		if (!mountElement.style.blockSize && !mountElement.style.height) mountElement.style.blockSize = "100%";
	} catch {}
	const canvasLayer = enableCanvasLayer ? createCanvasLayer() : null;
	const orientLayer = enableOrientLayer ? document.createElement("div") : null;
	if (orientLayer) {
		orientLayer.dataset.appLayer = "orient";
		orientLayer.className = "app-layer app-layer--orient";
		orientLayer.style.position = "absolute";
		orientLayer.style.inset = "0";
		orientLayer.style.zIndex = "5";
		orientLayer.style.pointerEvents = "none";
		orientLayer.style.background = "transparent";
		const orientBox = document.createElement("cw-oriented-box");
		orientBox.className = "ui-orientbox app-oriented-box";
		orientBox.setAttribute("data-mixin", "ui-orientbox");
		orientBox.style.position = "absolute";
		orientBox.style.inset = "0";
		orientBox.style.pointerEvents = "auto";
		orientBox.style.background = "transparent";
		orientLayer.appendChild(orientBox);
		fixOrientToScreen(orientBox);
	}
	const shellLayer = document.createElement("div");
	shellLayer.dataset.appLayer = "shell";
	shellLayer.className = "app-layer app-layer--shell";
	shellLayer.style.position = "absolute";
	shellLayer.style.inset = "0";
	shellLayer.style.zIndex = "10";
	shellLayer.style.pointerEvents = "none";
	shellLayer.style.display = "grid";
	shellLayer.style.gridTemplateColumns = "[content-column] minmax(0px, 1fr)";
	shellLayer.style.gridTemplateRows = "[status-row] minmax(0px, max-content) [content-row] minmax(0px, 1fr) [dock-row] minmax(0px, max-content)";
	shellLayer.style.overflow = "hidden";
	shellLayer.style.background = "transparent";
	shellLayer.style.backgroundColor = "transparent";
	const overlayLayer = document.createElement("div");
	overlayLayer.dataset.appLayer = "overlay";
	overlayLayer.className = "app-layer app-layer--overlay";
	overlayLayer.style.position = "absolute";
	overlayLayer.style.inset = "0";
	overlayLayer.style.zIndex = "1000";
	overlayLayer.style.pointerEvents = "none";
	overlayLayer.style.background = "transparent";
	overlayLayer.style.backgroundColor = "transparent";
	if (canvasLayer) mountElement.append(canvasLayer);
	if (orientLayer) mountElement.append(orientLayer);
	mountElement.append(shellLayer, overlayLayer);
	return {
		canvasLayer,
		orientLayer,
		shellLayer,
		overlayLayer
	};
};
//#endregion
//#region ../CWSP-document/src/frontend/boot/BootLoader.ts
var BootLoader_exports = /* @__PURE__ */ __exportAll({
	BootLoader: () => BootLoader,
	bootLoader: () => bootLoader,
	bootMinimal: () => bootMinimal,
	default: () => bootLoader
});
var normalizeShellId = (shell) => {
	if (shell === "faint") return "tabbed";
	if (shell === "base") return "immersive";
	return shell;
};
/**
* Style system configurations
*/
var STYLE_CONFIGS = {
	"raw": {
		name: "Raw (No Framework)",
		stylesheets: [],
		description: "No CSS framework, raw browser defaults",
		recommendedShells: ["immersive"]
	},
	"vl-core": {
		name: "Core (Shared Foundation)",
		stylesheets: [],
		description: "Shared foundation styles for all veela variants",
		recommendedShells: ["immersive", "minimal"]
	},
	"vl-basic": {
		name: "Basic Veela Styles",
		stylesheets: [],
		description: "Minimal styling for basic functionality",
		recommendedShells: [
			"window",
			"tabbed",
			"minimal",
			"environment",
			"immersive",
			"content"
		]
	},
	"vl-advanced": {
		name: "Advanced (Full-Featured Styling)",
		stylesheets: [],
		description: "Full-featured styling with design tokens and effects",
		recommendedShells: [
			"tabbed",
			"minimal",
			"environment"
		]
	},
	"vl-beercss": {
		name: "BeerCSS (Beer CSS Compatible)",
		stylesheets: [],
		description: "Beer CSS compatible styling with Material Design 3",
		recommendedShells: ["tabbed"]
	}
};
/**
* Boot Loader
* 
* Manages the application boot sequence with proper ordering:
* Styles → Shell → View → Channels
*/
var BootLoader = class BootLoader {
	static instance;
	state = {
		phase: "idle",
		styleSystem: null,
		shell: null,
		view: null,
		error: null
	};
	stateChangeHandlers = /* @__PURE__ */ new Set();
	shellInstance = null;
	/** MutationObserver-driven view host bindings (shared routing); disconnected between boots. */
	implicitBridgeCleanup = null;
	phaseHandlers = /* @__PURE__ */ new Map();
	constructor() {
		initializeRegistries();
	}
	static getInstance() {
		if (!BootLoader.instance) BootLoader.instance = new BootLoader();
		return BootLoader.instance;
	}
	/**
	* Execute the boot sequence
	*/
	async boot(container, config) {
		console.log("[BootLoader] Starting boot sequence:", config);
		try {
			if (this.shellInstance) try {
				this.implicitBridgeCleanup?.();
				this.implicitBridgeCleanup = null;
				ShellRegistry.unload(this.shellInstance.id);
			} catch (error) {
				console.warn("[BootLoader] Failed to unload previous shell:", error);
			} finally {
				this.shellInstance = null;
			}
			initializeLayers();
			initCwsNativeBridge().catch(() => {});
			if (isCapacitorCwsNativeShell()) {
				__vitePreload(() => import("../chunks/capacitor-share-intent.js").then((mod) => mod.installCapacitorShareIntentBridge()), __vite__mapDeps([72,3,14,60,2]), import.meta.url).catch(() => void 0);
				__vitePreload(() => import("../chunks/capacitor-clipboard-asset.js").then((mod) => mod.installCapacitorClipboardAssetBridge()), __vite__mapDeps([73,60,2]), import.meta.url).catch(() => void 0);
				__vitePreload(() => import("../com/app6.js").then((n) => n._).then((mod) => mod.ensureNativeStorageProvide()), __vite__mapDeps([28,2,3]), import.meta.url).catch(() => void 0);
			}
			try {
				const { initFrontendDebugCapture } = await __vitePreload(async () => {
					const { initFrontendDebugCapture } = await import("../chunks/frontend-debug-capture.js").then((n) => n.t);
					return { initFrontendDebugCapture };
				}, __vite__mapDeps([65,2,10,11,12,13,14]), import.meta.url);
				initFrontendDebugCapture();
			} catch {}
			const persistedSettings = await loadSettings().catch((error) => {
				console.warn("[BootLoader] Failed to load settings:", error);
				return null;
			});
			let effectiveSettings = persistedSettings;
			if (isCapacitorCwsNativeShell()) {
				const seeded = await ensureCapacitorCwspSettingsSeeded().catch(() => null);
				if (seeded) effectiveSettings = seeded;
			}
			if (effectiveSettings) applyHubSocketFromSettings(effectiveSettings).catch(() => void 0);
			if (isCapacitorCwsNativeShell()) ensureCapacitorBridgeDaemonStarted(effectiveSettings).catch((error) => {
				console.warn("[BootLoader] CWSP bridge daemon auto-start skipped:", error);
			});
			applyTheme(effectiveSettings ?? DEFAULT_SETTINGS);
			if (!(() => {
				try {
					const g = globalThis;
					const surface = typeof document !== "undefined" ? String(document.documentElement?.dataset?.cwspSurface || "") : "";
					const protocol = String(globalThis.location?.protocol || "");
					const nativeShell = typeof document !== "undefined" ? String(document.documentElement?.dataset?.cwspNativeShell || "") : "";
					return Boolean(g.__CWS_SKIP_PWA__ || g.__CWS_NEUTRALINO_BOOT__ || g.__CWS_WEBNATIVE_BOOT__ || g.Neutralino || typeof g.NL_OS === "string" || protocol === "chrome-extension:" || nativeShell === "crx" || surface.includes("crx") || surface === "cwsp-control" || surface === "gateway");
				} catch {
					return false;
				}
			})()) try {
				const { initIngressPWA } = await __vitePreload(async () => {
					const { initIngressPWA } = await import("../vendor/@fest-lib_lure.js");
					return { initIngressPWA };
				}, __vite__mapDeps([74,8,2,12,3,38,39,44,45,46,11,47,9,10,13,14,15,16,17,18,1,4,5,6,41,49,75,76]), import.meta.url);
				await initIngressPWA();
			} catch (e) {
				console.warn("[BootLoader] Share-target / service worker ingress failed (non-fatal):", e);
			}
			await this.loadStyles(config.styleSystem);
			const persistedTheme = this.resolveThemeFromSettings(persistedSettings);
			const shell = await this.loadShell(config.shell, container);
			shell.setTheme(config.theme || persistedTheme);
			await shell.mount(container);
			this.implicitBridgeCleanup?.();
			this.implicitBridgeCleanup = startImplicitViewMessagingBridge();
			if (config.channels && config.channels.length > 0) await this.initChannels(config.channels, config.channelPriorityId);
			if (config.skipInitialNavigate) this.dismissShellLoadingSpinner(shell);
			else {
				let bootParams;
				try {
					bootParams = Object.fromEntries(new URLSearchParams(globalThis.location?.search || ""));
				} catch {
					bootParams = void 0;
				}
				await shell.navigate(config.defaultView, bootParams);
			}
			this.setPhase("ready");
			try {
				if (typeof document !== "undefined") document.documentElement.dataset.cwspBoot = "ready";
				globalThis.dispatchEvent?.(new CustomEvent("cwsp:boot-ready"));
			} catch {}
			if (config.rememberChoice) this.savePreferences(config);
			console.log("[BootLoader] Boot complete");
			return shell;
		} catch (error) {
			console.error("[BootLoader] Boot failed:", error);
			this.updateState({
				phase: "error",
				error
			});
			throw error;
		}
	}
	resolveThemeFromSettings(settings) {
		const theme = settings?.appearance?.theme || "auto";
		if (theme === "dark") return darkTheme;
		if (theme === "light") return lightTheme;
		return defaultTheme;
	}
	/** Hide immersive/minimal shell loading row when skipping {@link Shell.navigate}. */
	dismissShellLoadingSpinner(shell) {
		try {
			const loading = shell.getElement().shadowRoot?.querySelector(".app-shell__loading");
			if (loading) loading.hidden = true;
		} catch {}
	}
	/**
	* Load style system
	*/
	async loadStyles(styleSystem) {
		this.setPhase("styles");
		console.log(`[BootLoader] Loading style system: ${styleSystem}`);
		const config = STYLE_CONFIGS[styleSystem] || STYLE_CONFIGS["vl-basic"];
		try {
			await loadStyleSystem(styleSystem);
		} catch (error) {
			console.error(`[BootLoader] Failed to load style system: ${styleSystem}`, error);
			throw error;
		}
		for (const sheet of config.stylesheets) try {
			await loadAsAdopted(sheet);
		} catch (error) {
			console.warn(`[BootLoader] Failed to load stylesheet: ${sheet}`, error);
		}
		this.updateState({ styleSystem });
		console.log(`[BootLoader] Style system ${styleSystem} loaded`);
	}
	/**
	* Load and initialize shell
	*/
	async loadShell(shellId, container) {
		this.setPhase("shell");
		const normalizedShell = normalizeShellId(shellId);
		if (normalizedShell !== shellId) console.warn(`[BootLoader] Shell "${shellId}" is temporarily disabled, redirecting to "${normalizedShell}"`);
		console.log(`[BootLoader] Loading shell: ${normalizedShell}`);
		const shell = await ShellRegistry.load(normalizedShell, container);
		this.shellInstance = shell;
		this.updateState({ shell: normalizedShell });
		console.log(`[BootLoader] Shell ${normalizedShell} loaded`);
		return shell;
	}
	/**
	* Initialize service channels: one high-priority channel blocks boot, the rest
	* run when the browser is idle so startup stays within interactive budgets.
	*/
	async initChannels(channelIds, priorityId) {
		this.setPhase("channels");
		const unique = [...new Set(channelIds)];
		if (unique.length === 0) return;
		const primary = (priorityId && unique.includes(priorityId) ? priorityId : null) ?? unique[0];
		const rest = unique.filter((id) => id !== primary);
		console.log(`[BootLoader] Initializing primary channel:`, primary, rest.length ? `(+${rest.length} deferred)` : "");
		try {
			await serviceChannels.initChannel(primary);
		} catch (error) {
			console.warn(`[BootLoader] Failed to init primary channel ${primary}:`, error);
		}
		if (rest.length === 0) {
			console.log("[BootLoader] Channels initialized");
			return;
		}
		const runDeferred = () => {
			(async () => {
				for (const channelId of rest) try {
					await serviceChannels.initChannel(channelId);
				} catch (error) {
					console.warn(`[BootLoader] Failed to init channel ${channelId}:`, error);
				}
				console.log("[BootLoader] Deferred channels initialized:", rest);
			})();
		};
		if (typeof globalThis.requestIdleCallback === "function") globalThis.requestIdleCallback(runDeferred, { timeout: 5e3 });
		else globalThis.setTimeout?.(runDeferred, 0);
	}
	/**
	* Update state and notify handlers
	*/
	updateState(partial) {
		Object.assign(this.state, partial);
		this.notifyStateChange();
	}
	/**
	* Set current phase and notify handlers
	*/
	setPhase(phase) {
		this.updateState({ phase });
		const handlers = this.phaseHandlers.get(phase);
		if (handlers) for (const handler of handlers) try {
			handler(this.state);
		} catch (error) {
			console.error(`[BootLoader] Phase handler error:`, error);
		}
	}
	/**
	* Notify all state change handlers
	*/
	notifyStateChange() {
		for (const handler of this.stateChangeHandlers) try {
			handler(this.state);
		} catch (error) {
			console.error(`[BootLoader] State handler error:`, error);
		}
	}
	/**
	* Subscribe to state changes
	*/
	onStateChange(handler) {
		this.stateChangeHandlers.add(handler);
		return () => {
			this.stateChangeHandlers.delete(handler);
		};
	}
	/**
	* Register a phase handler
	*/
	onPhase(phase, handler) {
		if (!this.phaseHandlers.has(phase)) this.phaseHandlers.set(phase, /* @__PURE__ */ new Set());
		this.phaseHandlers.get(phase).add(handler);
		return () => {
			this.phaseHandlers.get(phase)?.delete(handler);
		};
	}
	/**
	* Get current state
	*/
	getState() {
		return { ...this.state };
	}
	/**
	* Get current shell instance
	*/
	getShell() {
		return this.shellInstance;
	}
	/**
	* Save boot preferences
	*/
	savePreferences(config) {
		try {
			const normalizedShell = normalizeShellId(config.shell);
			localStorage.setItem("rs-boot-style", config.styleSystem);
			localStorage.setItem("rs-boot-shell", normalizedShell);
			localStorage.setItem("rs-boot-view", config.defaultView);
			localStorage.setItem("rs-boot-remember", "1");
		} catch (error) {
			console.warn("[BootLoader] Failed to save preferences:", error);
		}
	}
	/**
	* Load boot preferences
	*/
	loadPreferences() {
		try {
			if (localStorage.getItem("rs-boot-remember") !== "1") return null;
			const shell = normalizeShellId(localStorage.getItem("rs-boot-shell") || "environment");
			return {
				styleSystem: localStorage.getItem("rs-boot-style") || void 0,
				shell,
				defaultView: localStorage.getItem("rs-boot-view") || void 0
			};
		} catch {
			return null;
		}
	}
	/**
	* Clear preferences
	*/
	clearPreferences() {
		try {
			localStorage.removeItem("rs-boot-style");
			localStorage.removeItem("rs-boot-shell");
			localStorage.removeItem("rs-boot-view");
			localStorage.removeItem("rs-boot-remember");
			localStorage.removeItem(LS_BOOT_SHELL_LAST_ACTIVE);
		} catch {}
	}
};
/**
* Get the singleton boot loader
*/
var bootLoader = BootLoader.getInstance();
/**
* Resolve the grid shell layer that {@link ShellBase.mount} anchors to
* (`content-row` / `content-column`). Bare `body` has no named lines → 0-height host.
* WHY: CWSP Control / Neutralino / Capacitor call `bootMinimal(document.body, …)`.
*/
function resolveMinimalShellMount(container) {
	try {
		if (container?.dataset?.appLayer === "shell") return container;
		const existing = container.querySelector?.(":scope > [data-app-layer=\"shell\"]");
		if (existing) return existing;
		return ensureAppLayers(container, {
			enableOrientLayer: false,
			enableCanvasLayer: false
		}).shellLayer;
	} catch (error) {
		console.warn("[BootLoader] ensureAppLayers failed; mounting into container directly:", error);
		return container;
	}
}
/**
* Boot with Minimal shell
*/
async function bootMinimal(container, view = "viewer", options) {
	const defaultView = pickEnabledView(view, "viewer");
	/** Minimal shell: init only the active view's channel — others register on first navigate (see ShellBase.loadView). */
	const channels = isEnabledView(defaultView) ? [defaultView] : ["viewer"];
	const channelPriorityId = channels[0];
	const mountRoot = resolveMinimalShellMount(container);
	return bootLoader.boot(mountRoot, {
		styleSystem: "vl-basic",
		shell: "minimal",
		defaultView,
		channels,
		channelPriorityId,
		rememberChoice: options?.rememberChoice ?? true,
		skipInitialNavigate: options?.skipInitialNavigate ?? false
	});
}
//#endregion
//#region src/frontend/web/sku-boot.ts
/** INVARIANT: Capacitor / dedicated explorer never ships markdown viewer — CWSP-document owns open. */
var ENABLED_VIEWS_EXPLORER = "minimal,explorer,settings,history";
var ENABLED_VIEWS_CRX = "minimal,explorer,viewer,settings,history";
var detectHostKind = (explicit) => {
	if (explicit) return explicit;
	try {
		const proto = String(globalThis.location?.protocol || "").toLowerCase();
		if (proto === "chrome-extension:" || proto === "moz-extension:") return "crx";
		const g = globalThis;
		if (g.Neutralino || g.NL_OS) return "neutralino";
		if (typeof g.Capacitor?.isNativePlatform === "function" && g.Capacitor.isNativePlatform()) return "capacitor";
	} catch {}
	return "web";
};
var stampExplorerSku = (kind) => {
	applyCwspSku("explorer");
	const root = document.documentElement;
	root.dataset.cwspSku = "explorer";
	root.dataset.cwspApp = "explorer";
	root.dataset.cwspSurface = kind === "crx" ? "cw-explorer-crx" : kind === "neutralino" ? "cw-explorer-neutralino" : "cw-explorer";
	root.dataset.cwspEnabledViews = kind === "crx" ? ENABLED_VIEWS_CRX : ENABLED_VIEWS_EXPLORER;
	root.dataset.cwspDefaultView = "explorer";
	if (kind === "capacitor") root.dataset.cwspNativeShell = "capacitor";
	else if (kind === "neutralino") root.dataset.cwspNativeShell = "neutralino";
	else if (kind === "crx") root.dataset.cwspNativeShell = "crx";
	try {
		const host = String(location.hostname || "").toLowerCase();
		if (!(host === "explorer.u2re.space" || host === "www.explorer.u2re.space")) {
			if (String(location.pathname || "").match(/^(\/(?:explorer|files|fm))(?:\/|$)/i)) root.dataset.cwspRouterBase = "/explorer";
		}
	} catch {}
};
var showExplorerBootFailure = (error, mount = document.body) => {
	const message = error instanceof Error ? error.stack || error.message : String(error);
	console.error("[CWSP-explorer] boot failed", error);
	mount.replaceChildren();
	mount.style.cssText = "margin:0;padding:16px;font:14px/1.4 ui-monospace,monospace;background:#111;color:#f66;white-space:pre-wrap;";
	mount.textContent = `[CWSP-explorer] boot failed\n\n${message}`;
};
var bootExplorerSku = async (container, kind) => {
	const host = detectHostKind(kind);
	stampExplorerSku(host);
	try {
		const q = new URLSearchParams(String(globalThis.location?.search || ""));
		const path = String(q.get("path") || q.get("src") || "").trim();
		if (path) stashSkuHandoff({
			dest: "explorer",
			src: path
		});
	} catch {}
	__vitePreload(() => import("../com/app.js").then((n) => n.t).then((m) => m.ensureRemoteMountedFs()), __vite__mapDeps([1,2,3,4,5,6]), import.meta.url).catch(() => {});
	if (host === "capacitor") try {
		const { SystemBarType, SystemBars } = await __vitePreload(async () => {
			const { SystemBarType, SystemBars } = await import("../vendor/@capacitor_core2.js").then((n) => n.r);
			return {
				SystemBarType,
				SystemBars
			};
		}, __vite__mapDeps([59,2]), import.meta.url);
		await SystemBars.hide({ bar: SystemBarType.NavigationBar });
	} catch {}
	if (host === "neutralino") try {
		const neu = globalThis.Neutralino;
		if (typeof neu?.init === "function") await neu.init();
	} catch {}
	await bootMinimal(container, "explorer");
};
//#endregion
//#region src/frontend/capacitor/entry.ts
bootExplorerSku(document.body, "capacitor").catch((error) => {
	showExplorerBootFailure(error, document.body);
});
//#endregion
export { ingressStampWasSuperseded as A, validateReadableFileForIngress as B, initializeRegistries as C, isEnabledView as D, ENABLED_VIEW_IDS as E, safeCacheOpen as F, ensureHistoryBaseDataset as G, requestOpenView as H, safeCachePut as I, withHistoryBase as J, pathForSkuHostView as K, pickAuthoritativeTransferFiles as L, consumeCachedShareTargetPayload as M, storeShareTargetPayloadToCache as N, pickEnabledView as O, safeCacheMatch as P, textIngressLooksCorrupt as R, defaultTheme as S, DEFAULT_VIEW_ID as T, serviceChannels as U, settleIngressPaintForMinimalShell as V, initBootShellWindowActivity as W, speedDialItems as _, isCapacitorNativeShell as a, ViewRegistry as b, writeClipboardTextToDevice as c, addSpeedDialItem as d, applyGridSettings as f, persistSpeedDialMeta as g, persistSpeedDialItems as h, clipboard_device_exports as i, buildShareDataFromCachedPayload as j, startImplicitViewMessagingBridge as k, loadStyleSystem as l, ensureSpeedDialMeta as m, capacitor_settings_permissions_exports as n, readClipboardTextFromDevice as o, createEmptySpeedDialItem as p, stripHistoryBase as q, requestCapacitorSettingsPermissionsAfterSave as r, writeClipboardImageToDevice as s, BootLoader_exports as t, applyTheme as u, initializeLayers as v, lightTheme as w, darkTheme as x, ShellRegistry as y, validateIngressBeforeViewHandle as z };
