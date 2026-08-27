/*
 * Filename: build-capacitor.mjs
 * FullPath: apps/CWSP-explorer/scripts/build-capacitor.mjs
 * FIND:sku
 * TAG:apk-update
 * Change date and time: 19.10.00_27.08.2026
 * Reason for changes: Stage latest-explorer.json after assemble so Check sees the new versionCode.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const APP_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SHELL_SCRIPTS = [
    path.resolve(APP_ROOT, "../CWSP-shell/scripts"),
    path.resolve(APP_ROOT, "../../apps/CWSP-shell/scripts")
].find((p) => fs.existsSync(p));
const documentRoot = [
    path.resolve(APP_ROOT, "../CWSP-document"),
    path.resolve(APP_ROOT, "../../apps/CWSP-document")
].find((p) => fs.existsSync(p));
if (!SHELL_SCRIPTS || !documentRoot) {
    throw new Error("cannot resolve CWSP-shell/scripts or CWSP-document from explorer-view");
}
const ANDROID_ROOT = path.join(APP_ROOT, "platforms/android");

function run(cmd, args, cwd, env) {
    console.log(`[build:capacitor] ${cmd} ${args.join(" ")}`);
    const r = spawnSync(cmd, args, { cwd, stdio: "inherit", env: { ...process.env, ...(env || {}) } });
    if (r.status !== 0) throw new Error(`${cmd} failed`);
}

function resolveJavaHome() {
    if (process.env.JAVA_HOME && fs.existsSync(path.join(process.env.JAVA_HOME, "bin/java"))) {
        return process.env.JAVA_HOME;
    }
    for (const home of [
        process.env.JAVA_HOME_21,
        "/usr/lib/jvm/java-21-openjdk-amd64",
        "/usr/lib/jvm/java-17-openjdk-amd64"
    ].filter(Boolean)) {
        if (fs.existsSync(path.join(home, "bin/java"))) return home;
    }
    return process.env.JAVA_HOME || "";
}

run(process.execPath, [path.join(SHELL_SCRIPTS, "project-sibling-sku-android.mjs"), "explorer"], APP_ROOT);
const noBump =
    process.argv.includes("--no-bump") || String(process.env.CWSP_CAPACITOR_NO_BUMP || "").trim() === "1";
const noPublish =
    process.argv.includes("--no-publish") || String(process.env.CWSP_CAPACITOR_NO_PUBLISH || "").trim() === "1";
const publishRemote =
    process.argv.includes("--remote") || String(process.env.CWSP_CAPACITOR_PUBLISH_REMOTE || "").trim() === "1";
if (noBump) {
    console.log("[build:capacitor] --no-bump — keeping platforms/android/version.properties");
} else {
    run(process.execPath, [path.join(SHELL_SCRIPTS, "bump-capacitor-version.mjs"), "--app", APP_ROOT], APP_ROOT);
}
run("node", [path.join(APP_ROOT, "scripts/sync-capacitor-android-icons.mjs")], APP_ROOT);
run(
    "node",
    [
        path.join(documentRoot, "scripts/run-vite.mjs"),
        "build",
        "--config",
        path.join(APP_ROOT, "vite.config.js"),
        "--mode",
        "capacitor"
    ],
    APP_ROOT
);
run(process.execPath, [path.join(SHELL_SCRIPTS, "sync-sibling-sku-web.mjs"), "explorer"], APP_ROOT);

const javaHome = resolveJavaHome();
const env = {
    ANDROID_HOME: process.env.ANDROID_HOME || "/home/u2re-dev/Android/Sdk",
    ANDROID_SDK_ROOT: process.env.ANDROID_SDK_ROOT || process.env.ANDROID_HOME || "/home/u2re-dev/Android/Sdk"
};
if (javaHome) env.JAVA_HOME = javaHome;
run("./gradlew", ["--no-daemon", "assembleDebug", "copyCwspApks"], ANDROID_ROOT, env);
if (noPublish) {
    console.log("[build:capacitor] --no-publish — skip staging latest-explorer.json");
} else {
    const pub = [path.join(SHELL_SCRIPTS, "publish-sibling-apk.mjs"), "explorer"];
    if (publishRemote) pub.push("--remote");
    run(process.execPath, pub, APP_ROOT);
}
console.log("[build:capacitor] explorer APK ready under build/capacitor/apk");
