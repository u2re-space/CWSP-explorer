import { an as invokeCwsPlatformIPC } from "../shells/boot-index.js";
//#region ../CWSP-document/src/shared/routing/native/launcher-bridge.ts
async function launcherIsDefault() {
	return false;
}
async function launcherRequestDefault() {
	return false;
}
async function launcherList(_query) {
	return [];
}
async function launcherLaunch(_pkg, _component) {
	const packageName = String(_pkg || "").trim();
	if (!packageName) return false;
	try {
		return (await invokeCwsPlatformIPC({
			channel: "launcher:launch",
			payload: {
				packageName,
				..._component ? { componentName: String(_component).trim() } : {}
			}
		})).ok === true;
	} catch {
		return false;
	}
}
/** ACTION_VIEW / Open-with. No-op on web when CwsBridge is a stub. */
async function launcherOpenUri(uri, options = {}) {
	const url = String(uri || "").trim();
	if (!url) return false;
	const packageName = String(options.packageName || "").trim();
	const mimeType = String(options.mimeType || "").trim();
	const chooser = options.chooser !== false;
	const title = String(options.title || "Open with").trim() || "Open with";
	try {
		return (await invokeCwsPlatformIPC({
			channel: "launcher:open-uri",
			payload: {
				uri: url,
				url,
				...packageName ? { packageName } : {},
				...mimeType ? { mimeType } : {},
				chooser,
				title
			}
		})).ok === true;
	} catch {
		return false;
	}
}
var fileToDataUrl = (file) => new Promise((resolve, reject) => {
	const reader = new FileReader();
	reader.onload = () => resolve(String(reader.result || ""));
	reader.onerror = () => reject(reader.error || /* @__PURE__ */ new Error("read-failed"));
	reader.readAsDataURL(file);
});
/** Write bytes to this APK's cache FileProvider and ACTION_VIEW a sibling package. */
async function launcherOpenFile(file, options = {}) {
	if (!file) return false;
	if (file.size <= 0 || file.size > 8388608) return false;
	const packageName = String(options.packageName || "").trim();
	const mimeType = String(options.mimeType || file.type || "").trim();
	const chooser = options.chooser === true;
	const title = String(options.title || "Open").trim() || "Open";
	try {
		const data = await fileToDataUrl(file);
		return (await invokeCwsPlatformIPC({
			channel: "launcher:open-bytes",
			payload: {
				name: file.name || "shared.bin",
				mimeType,
				data,
				...packageName ? { packageName } : {},
				chooser,
				title
			}
		})).ok === true;
	} catch {
		return false;
	}
}
async function launcherHasPackages(_pkgs) {
	return {};
}
async function launcherIcon(_cacheKey, _size = 64, _variant = "default", _pack = "", _drawable = "") {
	return "";
}
async function launcherIconVariants(_cacheKey) {
	return [];
}
async function launcherIconPacks() {
	return [];
}
async function launcherIconPackIcons(_pack, _query = "", _limit = 120) {
	return [];
}
async function launcherIconBlobUrl(_cacheKey, _size = 64, _variant = "default", _pack = "", _drawable = "") {
	return "";
}
//#endregion
export { launcherHasPackages, launcherIcon, launcherIconBlobUrl, launcherIconPackIcons, launcherIconPacks, launcherIconVariants, launcherIsDefault, launcherLaunch, launcherList, launcherOpenFile, launcherOpenUri, launcherRequestDefault };
