const __vitePreload = (baseModule) => Promise.resolve().then(() => baseModule());
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../shells/boot-index.js","../chunks/rolldown-runtime.js","../shells/boot-history-base.js","../com/service.js","../com/app.js","../fest/veela.js"])))=>i.map(i=>d[i]);
import "../chunks/vite-preload-BsPm7yBB.js";
import { _ as stashSkuHandoff, a as applyCwspSku } from "../shells/boot-history-base.js";

import { n as bootMinimal } from "../chunks/BootLoader.js";
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
	if (host === "capacitor") try {
		const { SystemBarType, SystemBars } = await __vitePreload(async () => {
			const { SystemBarType, SystemBars } = await import("../shells/boot-index.js").then((n) => n.Wn);
			return {
				SystemBarType,
				SystemBars
			};
		}, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url);
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
