import { r as __exportAll } from "./rolldown-runtime.js";
import { a as DESTINATIONS, d as normalizeDestination, l as getDestinationAliases, n as BROADCAST_CHANNELS, s as createDestinationChannelMappings } from "./names.js";
import { t as __vitePreload } from "./vite-preload-DHlaQ_oz.js";
import "./core.js";
import "./templates.js";
import "./UniformInterop2.js";
import { getUnifiedMessaging } from "/fest/uniform.js";
//#region ../CWSP-document/src/shared/routing/api/process-api-path.ts
var PROCESS_API_PUBLIC_ORIGIN = "https://process.u2re.space";
var PROCESS_API_PREFIX = "/api/process";
//#endregion
//#region ../CWSP-document/src/shared/routing/api/process-local.ts
var PROCESS_LOCAL_DEFAULT_BASE_URL = "https://api.proxyapi.ru/openai/v1";
var PROCESS_LOCAL_DEFAULT_MODEL = "gpt-5.6-luna";
var pick = (...values) => {
	for (const value of values) {
		const text = String(value || "").trim();
		if (text) return text;
	}
	return "";
};
/** OpenAI-compatible completion when CWSP core / VDS is down. */
var runLocalProcessFallback = async (body, source = "local") => {
	if (!body || typeof body !== "object") return null;
	const apiKey = pick(body.apiKey, body.bearerToken, body.token, body.provider?.apiKey);
	if (!apiKey) return null;
	const input = pick(body.input, body.text, body.url, body.content);
	if (!input) return {
		ok: false,
		error: "Missing input (text/url/input)",
		fallback: source
	};
	const baseUrl = pick(body.baseUrl, body.provider?.baseUrl, PROCESS_LOCAL_DEFAULT_BASE_URL).replace(/\/+$/, "");
	const model = pick(body.model, body.provider?.model, PROCESS_LOCAL_DEFAULT_MODEL);
	const instruction = pick(body.customInstruction);
	const imageUrl = input.startsWith("data:image/") && input.includes(";base64,") ? input : "";
	const extractNow = "Extract all readable text, equations, tables, and data. Output the content now. Do not ask what to do.";
	const userContent = imageUrl ? [{
		type: "text",
		text: instruction ? `${extractNow}\n\n${instruction}` : extractNow
	}, {
		type: "image_url",
		image_url: { url: imageUrl }
	}] : input;
	const messages = [...instruction && !imageUrl ? [{
		role: "system",
		content: instruction
	}] : [], {
		role: "user",
		content: userContent
	}];
	try {
		const res = await fetch(`${baseUrl}/chat/completions`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model,
				messages
			})
		});
		const json = await res.json().catch(() => null);
		if (!res.ok) return {
			ok: false,
			error: String(json?.error?.message || `Provider ${res.status}`),
			layer: "api",
			fallback: source
		};
		const text = String(json?.choices?.[0]?.message?.content || "").trim();
		if (!text) return {
			ok: false,
			error: "Empty provider response",
			fallback: source
		};
		return {
			ok: true,
			mode: String(body.mode || "smartRecognize"),
			customInstruction: Boolean(instruction),
			provider: {
				baseUrl,
				model,
				apiKeySource: "request"
			},
			result: {
				ok: true,
				text
			},
			fallback: source
		};
	} catch (error) {
		return {
			ok: false,
			error: String(error instanceof Error ? error.message : error),
			layer: "api",
			fallback: source
		};
	}
};
//#endregion
//#region ../CWSP-document/src/shared/routing/api/process-api.ts
var PROCESS_API_SUFFIX = {
	processing: "processing",
	recognize: "ai/recognize",
	analyze: "ai/analyze",
	health: "health"
};
var PROCESS_SAME_ORIGIN_HOSTS = /* @__PURE__ */ new Set([
	"process.u2re.space",
	"workcenter.u2re.space",
	"ai.u2re.space",
	"u2re.space",
	"www.u2re.space"
]);
var isExtensionProtocol = (protocol) => protocol === "chrome-extension:" || protocol === "moz-extension:" || protocol === "safari-web-extension:";
var isCapacitorNative = () => {
	try {
		const g = globalThis;
		return typeof g.Capacitor?.isNativePlatform === "function" && g.Capacitor.isNativePlatform();
	} catch {
		return false;
	}
};
/** Dedicated process / hub hosts stay same-origin. Everything else uses https://process.u2re.space. */
var needsRemoteProcessApi = () => {
	try {
		if (isExtensionProtocol(String(globalThis.location?.protocol || "").toLowerCase())) return true;
		const host = String(globalThis.location?.hostname || "").toLowerCase();
		if (isCapacitorNative()) return !PROCESS_SAME_ORIGIN_HOSTS.has(host);
		if (!host) return true;
		return !PROCESS_SAME_ORIGIN_HOSTS.has(host);
	} catch {
		return true;
	}
};
var processApiPath = (suffix = "processing") => `${PROCESS_API_PREFIX}/${PROCESS_API_SUFFIX[suffix]}`;
var resolveProcessApiUrl = (suffix = "processing") => {
	const path = processApiPath(suffix);
	return needsRemoteProcessApi() ? `${PROCESS_API_PUBLIC_ORIGIN}${path}` : path;
};
var processApiAuthFromSettings = (settings) => {
	const core = settings?.core || {};
	const socket = core.socket || {};
	const accessToken = String(socket.accessToken || socket.airpadAuthToken || "").trim();
	return {
		userId: String(core.userId || "").trim() || void 0,
		userKey: String(core.userKey || "").trim() || void 0,
		accessToken: accessToken || void 0,
		apiKey: String(settings?.ai?.apiKey || "").trim() || void 0,
		baseUrl: String(settings?.ai?.baseUrl || "").trim() || void 0,
		model: String(settings?.ai?.model || "").trim() || void 0,
		mcp: Array.isArray(settings?.ai?.mcp) ? settings.ai.mcp : void 0
	};
};
var looksLikeHtmlPayload = (value) => {
	const text = typeof value === "string" ? value : value && typeof value === "object" && "error" in value ? String(value.error || "") : "";
	return /^\s*</.test(text) || /<!doctype\s+html/i.test(text) || /data-cwsp-sku/i.test(text);
};
/** True when :443 never reached a working CWSP core — caller should run in-browser AI. */
var isProcessApiUnavailable = (posted) => {
	if (posted.status === 0 || posted.status >= 500) return true;
	if (looksLikeHtmlPayload(posted.error) || looksLikeHtmlPayload(posted.json)) return true;
	const error = String(posted.error || "").toLowerCase();
	if (/failed to fetch|networkerror|econnrefused|certificate|aborted/.test(error)) return true;
	if (!posted.json || typeof posted.json !== "object") return !posted.ok;
	const row = posted.json;
	if (looksLikeHtmlPayload(row.error)) return true;
	if (row.ok !== false) return false;
	const detail = `${row.error || ""} ${row.hint || ""}`.toLowerCase();
	return row.layer === "api" || /unreachable|econnrefused|certificate|bad gateway/.test(detail);
};
var fetchProcessApi = async (url, suffix, payload, init) => {
	try {
		const isGet = suffix === "health";
		const res = await fetch(url, {
			method: isGet ? "GET" : "POST",
			headers: isGet ? { Accept: "application/json" } : {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: isGet ? void 0 : JSON.stringify(payload),
			signal: init?.signal
		});
		const text = await res.text();
		if (looksLikeHtmlPayload(text) || String(res.headers.get("content-type") || "").toLowerCase().includes("text/html")) return {
			ok: false,
			status: res.status || 404,
			json: {
				ok: false,
				layer: "api",
				error: "Process API returned HTML"
			}
		};
		let json = null;
		try {
			json = text ? JSON.parse(text) : null;
		} catch {
			json = {
				ok: false,
				error: text
			};
		}
		return {
			ok: res.ok,
			status: res.status,
			json
		};
	} catch (error) {
		return {
			ok: false,
			status: 0,
			json: null,
			error: String(error instanceof Error ? error.message : error)
		};
	}
};
var tryNativeProcessApi = async (payload) => {
	if (!isCapacitorNative()) return null;
	try {
		const { CwsBridge } = await __vitePreload(async () => {
			const { CwsBridge } = await import(
				/* @vite-ignore */
				"../native/cws-bridge.ts"
);
			return { CwsBridge };
		}, [], import.meta.url);
		const plugin = CwsBridge;
		const row = typeof plugin.processApi === "function" ? await plugin.processApi(payload) : await CwsBridge.invoke({
			channel: "process:api",
			payload
		});
		if (!row || typeof row !== "object") return null;
		const json = row;
		if (json.echo && json.ok === true && json.error == null && !("result" in json) && !("fallback" in json)) return null;
		return {
			ok: json.ok !== false,
			status: 200,
			json
		};
	} catch {
		return null;
	}
};
var postProcessApi = async (suffix, body = {}, auth, init) => {
	const path = processApiPath(suffix);
	const payload = {
		...body,
		...auth?.userId ? { userId: auth.userId } : {},
		...auth?.userKey ? { userKey: auth.userKey } : {},
		...auth?.baseUrl ? { baseUrl: auth.baseUrl } : {},
		...auth?.accessToken ? { accessToken: auth.accessToken } : {},
		...auth?.apiKey ? { apiKey: auth.apiKey } : {},
		...auth?.model ? { model: auth.model } : {},
		...auth?.mcp ? { mcp: auth.mcp } : {}
	};
	if (suffix !== "health" && (auth?.apiKey || payload.apiKey)) {
		const native = await tryNativeProcessApi(payload);
		if (native && !isProcessApiUnavailable(native) && native.json) return native;
	}
	const urls = [];
	const remote = `${PROCESS_API_PUBLIC_ORIGIN}${path}`;
	const local = path;
	if (needsRemoteProcessApi()) urls.push(remote);
	else {
		urls.push(local);
		if (isCapacitorNative()) urls.push(remote);
	}
	let last = null;
	for (const url of urls) {
		last = await fetchProcessApi(url, suffix, payload, init);
		if (!isProcessApiUnavailable(last)) return last;
	}
	if (suffix !== "health") {
		const local = await runLocalProcessFallback(payload, "page");
		if (local && local.ok !== false) return {
			ok: true,
			status: 200,
			json: local
		};
	}
	return last ?? {
		ok: false,
		status: 0,
		json: null,
		error: "Process API unavailable"
	};
};
//#endregion
//#region ../CWSP-document/src/shared/routing/channel/UnifiedAIConfig.ts
var processApiUrl = () => resolveProcessApiUrl("processing");
var UNIFIED_PROCESSING_RULES = {
	"share-target": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: true
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"url"
		],
		defaultOverrideFactors: []
	},
	"launch-queue": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: true
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: []
	},
	"crx-snip": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "write-clipboard",
			onAccept: "attach-to-associated",
			doProcess: "instantly",
			openApp: false
		},
		supportedContentTypes: ["text", "image"],
		defaultOverrideFactors: ["force-processing"]
	},
	"paste": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			"text": ["user-action"],
			"markdown": ["user-action"]
		}
	},
	"drop": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-associated",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"file",
			"blob",
			"text",
			"markdown",
			"image"
		],
		defaultOverrideFactors: [],
		associationOverrides: {
			"file": ["user-action"],
			"blob": ["user-action"]
		}
	},
	"button-attach-workcenter": {
		processingUrl: processApiUrl(),
		contentAction: {
			onResult: "none",
			onAccept: "attach-to-workcenter",
			doProcess: "manually",
			openApp: false
		},
		supportedContentTypes: [
			"text",
			"markdown",
			"image",
			"file"
		],
		defaultOverrideFactors: ["explicit-workcenter"],
		associationOverrides: {
			"markdown": ["explicit-workcenter"],
			"text": ["explicit-workcenter"],
			"image": ["explicit-workcenter"],
			"file": ["explicit-workcenter"]
		}
	}
};
Object.fromEntries(Object.entries(UNIFIED_PROCESSING_RULES).map(([key, config]) => [key, {
	processingUrl: config.processingUrl,
	contentAction: config.contentAction,
	...config.supportedContentTypes && { supportedContentTypes: config.supportedContentTypes }
}]));
//#endregion
//#region ../CWSP-document/src/shared/routing/channel/UnifiedMessaging.ts
/**
* Unified Messaging System for CWSP-shell
* Extends fest/uniform messaging with app-specific configuration
*/
var UnifiedMessaging_exports = /* @__PURE__ */ __exportAll({
	getUnifiedMessaging: () => getUnifiedMessaging$1,
	initializeComponent: () => initializeComponent,
	registerComponent: () => registerComponent,
	registerHandler: () => registerHandler,
	replayQueuedMessagesForDestination: () => replayQueuedMessagesForDestination,
	unifiedMessaging: () => unifiedMessaging,
	unregisterHandler: () => unregisterHandler
});
var APP_CHANNEL_MAPPINGS = {
	...createDestinationChannelMappings(),
	[DESTINATIONS.WORKCENTER]: BROADCAST_CHANNELS.WORK_CENTER,
	[DESTINATIONS.CLIPBOARD]: BROADCAST_CHANNELS.CLIPBOARD
};
var appMessagingInstance = null;
/**
* Get the app-configured UnifiedMessagingManager
*/
function getUnifiedMessaging$1() {
	if (!appMessagingInstance) appMessagingInstance = getUnifiedMessaging({
		channelMappings: APP_CHANNEL_MAPPINGS,
		queueOptions: {
			dbName: "CWSP-shellMessageQueue",
			storeName: "messages",
			maxRetries: 3,
			defaultExpirationMs: 1440 * 60 * 1e3
		},
		pendingStoreOptions: {
			storageKey: "rs-unified-messaging-pending",
			maxMessages: 200,
			defaultTTLMs: 1440 * 60 * 1e3
		}
	});
	return appMessagingInstance;
}
var unifiedMessaging = getUnifiedMessaging$1();
/**
* Register a handler using the app-configured manager
*/
function registerHandler(destination, handler) {
	const aliases = getDestinationAliases(destination);
	const names = aliases.length > 0 ? aliases : [normalizeDestination(destination) || destination];
	for (const name of names) unifiedMessaging.registerHandler(name, handler);
}
function unregisterHandler(destination, handler) {
	const aliases = getDestinationAliases(destination);
	const names = aliases.length > 0 ? aliases : [normalizeDestination(destination) || destination];
	for (const name of names) unifiedMessaging.unregisterHandler(name, handler);
}
function initializeComponent(componentId) {
	return unifiedMessaging.initializeComponent(componentId);
}
/**
* Replay IndexedDB-backed queued messages for a destination (mail/deferred pipeline).
* Safe after handlers register — implicit view bridge calls this post-bind.
*/
function replayQueuedMessagesForDestination(destination) {
	return unifiedMessaging.processQueuedMessages(destination);
}
function registerComponent(componentId, destination) {
	unifiedMessaging.registerComponent(componentId, normalizeDestination(destination) || destination);
}
//#endregion
export { replayQueuedMessagesForDestination as a, isProcessApiUnavailable as c, registerHandler as i, postProcessApi as l, initializeComponent as n, unifiedMessaging as o, registerComponent as r, unregisterHandler as s, UnifiedMessaging_exports as t, processApiAuthFromSettings as u };
