/*
 * Filename: vite.config.js
 * FullPath: apps/CWSP-explorer/vite.config.js
 * FIND:sku
 * Change date: 13.45.00_27.08.2026
 * Reason: View library by default; SKU hosts (PWA / Capacitor / CRX / Neutralino) reuse document aliases.
 */

import { resolve } from "node:path";
import { defineViewProject } from "../../modules/projects/subsystem/vite.view.config.js";

const explorerRoot = import.meta.dirname;

const createExplorerHostConfig = async (host) => {
    const { createCapacitorSkuConfig } = await import("../CWSP-document/vite.config.js");
    const cfg = await createCapacitorSkuConfig("explorer");
    const folder = host === "explorer" ? "cw-explorer" : host;
    const platformRoot = resolve(explorerRoot, `src/web/${folder}`);
    const outDir = resolve(
        explorerRoot,
        host === "explorer" ? "build/cw-explorer" : `build/${host}/web`
    );
    const input = resolve(platformRoot, "index.html");
    cfg.root = platformRoot;
    cfg.cacheDir = resolve(explorerRoot, `node_modules/.vite-explorer-${host}`);
    if (cfg.build) {
        cfg.build.outDir = outDir;
        if (cfg.build.rollupOptions) {
            cfg.build.rollupOptions.input = input;
            if (cfg.build.rollupOptions.output && !Array.isArray(cfg.build.rollupOptions.output)) {
                cfg.build.rollupOptions.output.dir = outDir;
            }
        }
        if (cfg.build.rolldownOptions) {
            cfg.build.rolldownOptions.input = input;
            if (cfg.build.rolldownOptions.output && !Array.isArray(cfg.build.rolldownOptions.output)) {
                cfg.build.rolldownOptions.output.dir = outDir;
            }
        }
    }
    return cfg;
};

export default async ({ mode } = {}) => {
    if (mode === "capacitor" || mode === "capacitor-explorer") {
        const { createCapacitorSkuConfig } = await import("../CWSP-document/vite.config.js");
        return createCapacitorSkuConfig("explorer");
    }
    if (mode === "explorer" || mode === "cw-explorer") {
        return createExplorerHostConfig("explorer");
    }
    if (mode === "crx") {
        return createExplorerHostConfig("crx");
    }
    if (mode === "neutralino") {
        return createExplorerHostConfig("neutralino");
    }
    return defineViewProject({
        name: "explorer-view",
        root: explorerRoot,
        defaultDevPort: 443,
        sslDir: "certs",
        pwa: true
    });
};
