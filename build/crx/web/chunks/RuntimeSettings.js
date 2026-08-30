const __vitePreload = (baseModule) => Promise.resolve().then(() => baseModule());
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../shells/boot-index.js","./rolldown-runtime.js","../shells/boot-history-base.js","../com/service.js","../com/app.js","../fest/veela.js"])))=>i.map(i=>d[i]);
import { n as __exportAll } from "./rolldown-runtime.js";
import { st as DEFAULT_SETTINGS } from "../shells/boot-index.js";

//#region ../CWSP-document/src/shared/other/config/RuntimeSettings.ts
var RuntimeSettings_exports = /* @__PURE__ */ __exportAll({ getRuntimeSettings: () => getRuntimeSettings });
var provider;
/** Lazily resolved so we never read `loadSettings` at module init (avoids TDZ when Rollup splits com-app ↔ boot chunks). */
var defaultProvider = null;
async function getDefaultProvider() {
	if (defaultProvider) return defaultProvider;
	const { loadSettings } = await __vitePreload(async () => {
		const { loadSettings } = await import("../shells/boot-index.js").then((n) => n.$);
		return { loadSettings };
	}, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url);
	defaultProvider = loadSettings;
	return defaultProvider;
}
var getRuntimeSettings = async () => {
	try {
		return await (provider ?? await getDefaultProvider())() || DEFAULT_SETTINGS;
	} catch {
		return DEFAULT_SETTINGS;
	}
};
//#endregion
export { getRuntimeSettings as n, RuntimeSettings_exports as t };
