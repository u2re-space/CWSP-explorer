const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./src.js","../vendor/jsox.js","./rolldown-runtime.js","./vite-preload-DHlaQ_oz.js","../com/app.js","./shells.js","./ecosystem-skus.js","../shells/preference.js","../vendor/jsox2.js","../vendor/@capacitor_core.js","./UniformInterop2.js","./names.js","./airpad-cwsp-client-parity.js","./multi-value-list.js","./remote-connection-runtime.js","./open-policy.js","./SettingsTypes.js","./process-ingress.js","./Theme.js","./StateStorage.js","./Clipboard.js","./Runtime.js","./settings-shell-profile.js","./toast.js","./preview.js","./src2.js","./window.js","../shells/environment-components-flyout-ChromeFlyout.js","../vendor/culori.js","../com/app2.js","../com/app3.js","../com/app4.js","../com/app5.js","../fest/veela2.js","../fest/veela3.js","../com/app6.js","../vendor/dompurify.js","../vendor/marked2.js","../vendor/katex.js","./tabbed.js","./environment.js","./src6.js","../views/ingress-validation.js","./types.js","./UniformViewTransport.js","./UnifiedMessaging.js","./UniformInterop.js","./channel-actions.js","./sku-ingress.js","../com/app8.js","./src7.js","../com/app7.js","./UnifiedMessaging2.js","./core.js","./templates.js","./sw-unwrap.js","./log-sanitizer.js","./ShareTargetGateway2.js","./utils.js","./CustomInstructions.js","../vendor/@toon-format_toon.js","./unified.js","./RuntimeSettings.js","./WorkCenterState.js","../shells/boot-history-base.js","../fest/veela.js","./ecosystem-skus2.js","./packet-wire-hash.js","./cws-bridge.js","../vendor/@capacitor_core2.js","./capacitor-permissions.js","./capacitor-settings-permissions.js","./admin-doors.js","./capacitor-settings-permissions3.js","./capacitor-permissions3.js","./hub-socket-boot.js","./clipboard-device.js","./src5.js","./frontend-debug-capture.js","./src4.js","./transfer-history-runtime.js","../fest/veela4.js","./src3.js","../fest/veela5.js","./launcher-state.js"])))=>i.map(i=>d[i]);
import { d as isViewLocalToSurface } from "./ecosystem-skus.js";
import { d as normalizeDestination, f as normalizeViewId, l as getDestinationAliases, n as BROADCAST_CHANNELS, o as ROUTE_HASHES, p as viewBroadcastChannelName, r as COMPONENTS, u as matchesDestination } from "./names.js";
import { t as __vitePreload } from "./vite-preload-DHlaQ_oz.js";
import { d as sendProtocolMessage, i as enqueuePendingMessage, l as replayQueuedMessagesForDestination } from "./UnifiedMessaging.js";
import { i as shouldDeferUnifiedIngressUntilStable, r as settleIngressTargetBeforeDelivery, t as scheduleSerialViewIngressDelivery } from "../views/inbound-timing.js";
import { r as validateIngressBeforeViewHandle } from "../views/ingress-validation.js";
import "./ShareTargetGateway.js";
import { i as registerHandler, n as initializeComponent, r as registerComponent, s as unregisterHandler } from "./UnifiedMessaging2.js";
import { n as toUnifiedInteropMessage } from "./UniformInterop2.js";
import { createServiceChannelManager } from "/fest/uniform.js";
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
	replayQueuedMessagesForDestination(normalizeDestination(destRaw) || normalizeViewId(destRaw)).catch(() => void 0);
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
		loader: () => __vitePreload(() => import("./src.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]), import.meta.url)
	});
	ShellRegistry.register({
		id: "minimal",
		name: "Minimal",
		description: "Minimal toolbar-based navigation",
		loader: () => __vitePreload(() => import("./preview.js").then((n) => n.t), __vite__mapDeps([24,2,3,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]), import.meta.url)
	});
	ShellRegistry.register({
		id: "content",
		name: "Content",
		description: "CRX content shell with overlay-focused layering",
		loader: () => __vitePreload(() => import("./src2.js"), __vite__mapDeps([25,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]), import.meta.url)
	});
	ShellRegistry.register({
		id: "immersive",
		name: "Immersive",
		description: "Chromeless immersive host (extensions / embedded)",
		loader: () => __vitePreload(() => import("./src.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]), import.meta.url)
	});
	ShellRegistry.register({
		id: "window",
		name: "Window",
		description: "Window-capable shell (multi-view)",
		loader: () => __vitePreload(() => import("./window.js"), __vite__mapDeps([26,27,7,6,2,3,9,10,11,12,13,1,4,28,5,8,14,15,16,17,18,19,20,21,22,23,29,30,31,32,33,34,35,36,37,38,24]), import.meta.url)
	});
	ShellRegistry.register({
		id: "tabbed",
		name: "Tabbed",
		description: "Tabbed window shell",
		loader: () => __vitePreload(() => import("./tabbed.js"), __vite__mapDeps([39,26,27,7,6,2,3,9,10,11,12,13,1,4,28,5,8,14,15,16,17,18,19,20,21,22,23,29,30,31,32,33,34,35,36,37,38,24]), import.meta.url)
	});
	ShellRegistry.register({
		id: "environment",
		name: "Environment",
		description: "Desktop/launcher shell: wallpaper, Speed Dial, taskbar, ui-window",
		loader: () => __vitePreload(() => import("./environment.js"), __vite__mapDeps([40,27,7,6,2,3,9,10,11,12,13,1,4,28,5,8,14,15,16,17,18,19,20,21,22,23,29,30,31,32,33,34,35,36,37,38]), import.meta.url)
	});
}
/** Register the built-in views that are enabled by current feature flags. */
function registerDefaultViews() {
	ViewRegistry.register({
		id: "viewer",
		name: "Viewer",
		icon: "eye",
		loader: () => __vitePreload(() => import("./src6.js"), __vite__mapDeps([41,6,2,3,42,1,4,8,9,10,11,12,13,14,15,16,17,31,36,37,38,43,44,45,46,47,48,49]), import.meta.url)
	});
	ViewRegistry.register({
		id: "workcenter",
		name: "Work Center",
		icon: "lightning",
		loader: () => __vitePreload(() => import("./src7.js"), __vite__mapDeps([50,6,2,1,3,4,29,30,31,32,34,28,33,35,36,37,38,51,11,45,46,42,52,53,54,10,55,8,9,12,13,14,15,16,17,20,48,49,56,57,58,59,60,21,61,62,63]), import.meta.url)
	});
	ViewRegistry.register({
		id: "settings",
		name: "Settings",
		icon: "gear",
		loader: () => __vitePreload(() => import("../shells/boot-history-base.js"), __vite__mapDeps([64,6,2,3,45,11,46,54,53,65,1,4,28,8,9,10,12,13,14,15,16,17,19,20,21,66,67,68,69,70,71,18,22,29,30,31,32,34,33,35,36,37,38,47,72,59,58,73,74,75,76]), import.meta.url)
	});
	ViewRegistry.register({
		id: "network",
		name: "Network",
		icon: "wifi-high",
		loader: () => __vitePreload(() => import("./src5.js"), __vite__mapDeps([77,9,2,10,11,12,13,1,3,4,14,8,15,6,16,17,76,78,75,67,66,68,46,69]), import.meta.url)
	});
	ViewRegistry.register({
		id: "history",
		name: "History",
		icon: "clock-counter-clockwise",
		loader: () => __vitePreload(() => import("./src4.js"), __vite__mapDeps([79,1,2,3,4,47,80]), import.meta.url)
	});
	ViewRegistry.register({
		id: "explorer",
		name: "Explorer",
		icon: "folder",
		loader: () => __vitePreload(() => import("../fest/veela4.js"), __vite__mapDeps([81,6,2,3,1,4,8,9,10,11,12,13,14,15,16,17,19,20,21,29,30,31,32,44,45,46,47]), import.meta.url)
	});
	ViewRegistry.register({
		id: "editor",
		name: "Editor",
		icon: "pencil",
		loader: () => __vitePreload(() => import("./src3.js"), __vite__mapDeps([82,6,2,1,3,4,43]), import.meta.url)
	});
	ViewRegistry.register({
		id: "home",
		name: "Home",
		icon: "house",
		loader: () => __vitePreload(() => import("../fest/veela5.js"), __vite__mapDeps([83,3,1,2,4,28,29,30,31,32,33,35,47,84]), import.meta.url)
	});
	ViewRegistry.register({
		id: "print",
		name: "Print",
		icon: "printer",
		loader: () => __vitePreload(() => import("./src6.js"), __vite__mapDeps([41,6,2,3,42,1,4,8,9,10,11,12,13,14,15,16,17,31,36,37,38,43,44,45,46,47,48,49]), import.meta.url)
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
export { initializeRegistries as a, ENABLED_VIEW_IDS as c, startImplicitViewMessagingBridge as d, ingressStampWasSuperseded as f, defaultTheme as i, isEnabledView as l, serviceChannels as m, ViewRegistry as n, lightTheme as o, requestOpenView as p, darkTheme as r, DEFAULT_VIEW_ID as s, ShellRegistry as t, pickEnabledView as u };
