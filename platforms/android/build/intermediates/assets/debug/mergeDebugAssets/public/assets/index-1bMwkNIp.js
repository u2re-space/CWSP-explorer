const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../shells/boot-index.js","../chunks/rolldown-runtime.js","../com/app.js","../fest/core.js","../shells/boot-history-base.js","../com/service.js","../fest/veela.js"])))=>i.map(i=>d[i]);
import { kn as __vitePreload } from "../com/app.js";
import { a as applyCwspSku } from "../shells/boot-history-base.js";
import { n as bootMinimal } from "../chunks/BootLoader.js";
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
//#region src/frontend/web/sku-boot.ts
var ENABLED_VIEWS = "minimal,explorer,settings,history";
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
	root.dataset.cwspEnabledViews = ENABLED_VIEWS;
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
	if (host === "capacitor") try {
		const { SystemBarType, SystemBars } = await __vitePreload(async () => {
			const { SystemBarType, SystemBars } = await import("../shells/boot-index.js").then((n) => n.Cn);
			return {
				SystemBarType,
				SystemBars
			};
		}, __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url);
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
