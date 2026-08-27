#!/usr/bin/env node
/*
 * Filename: stage-cw-explorer.mjs
 * FullPath: apps/CWSP-explorer/scripts/stage-cw-explorer.mjs
 * FIND:sku
 * Change date: 13.45.00_27.08.2026
 * Reason: Stage dedicated explorer PWA to runtime/fastify/apps/cw-explorer.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { rewriteVitePreloadBinding } from "../../CWSP-document/shared/vite-chunk-placement.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.dirname(path.dirname(root));
const src = path.join(root, "build/cw-explorer");
const dest = path.join(repoRoot, "runtime/fastify/apps/cw-explorer");

if (!fs.existsSync(path.join(src, "index.html"))) {
    console.error(`[stage-cw-explorer] missing ${src}/index.html — run build:cw-explorer first`);
    process.exit(1);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
if (fs.existsSync(dest)) {
    for (const name of fs.readdirSync(dest)) {
        if (name === "README.md") continue;
        fs.rmSync(path.join(dest, name), { recursive: true, force: true });
    }
} else {
    fs.mkdirSync(dest, { recursive: true });
}

for (const name of fs.readdirSync(src)) {
    fs.cpSync(path.join(src, name), path.join(dest, name), { recursive: true });
}

{
    const n = rewriteVitePreloadBinding(dest);
    if (n) console.log(`[stage-cw-explorer] rewrote ${n} vite-preload binding(s)`);
}

{
    const htmlPath = path.join(dest, "index.html");
    if (fs.existsSync(htmlPath)) {
        let html = fs.readFileSync(htmlPath, "utf8");
        if (!html.includes("pwa/icons/icon.svg")) {
            html = html.replace(
                "</head>",
                `    <link rel="icon" type="image/svg+xml" href="./pwa/icons/icon.svg" />
    <link rel="icon" type="image/png" sizes="512x512" href="./pwa/icons/icon.png" />
    <link rel="apple-touch-icon" href="./pwa/icons/apple-touch-icon.png" />
    <link rel="manifest" href="./pwa/manifest.json" />
  </head>`
            );
            fs.writeFileSync(htmlPath, html);
            console.log("[stage-cw-explorer] injected SKU favicons into index.html");
        }
    }
}

// WHY: browsers request /favicon.svg|/favicon.png at host root.
{
    const icons = path.join(dest, "pwa", "icons");
    const srcIcons = path.join(root, "src", "pwa", "icons");
    if (!fs.existsSync(path.join(icons, "icon.svg")) && fs.existsSync(srcIcons)) {
        fs.mkdirSync(icons, { recursive: true });
        fs.cpSync(srcIcons, icons, { recursive: true });
    }
    const srcManifest = path.join(root, "src", "pwa", "manifest.json");
    const destManifest = path.join(dest, "pwa", "manifest.json");
    if (!fs.existsSync(destManifest) && fs.existsSync(srcManifest)) {
        fs.mkdirSync(path.dirname(destManifest), { recursive: true });
        fs.cpSync(srcManifest, destManifest);
    }
    const copyFav = (fromName, toName) => {
        const from = path.join(icons, fromName);
        if (!fs.existsSync(from)) return;
        fs.cpSync(from, path.join(dest, toName));
    };
    copyFav("icon.svg", "favicon.svg");
    copyFav("icon.png", "favicon.png");
    copyFav("favicon.ico", "favicon.ico");
}

fs.writeFileSync(
    path.join(dest, ".sync-meta.json"),
    JSON.stringify(
        {
            syncedAt: new Date().toISOString(),
            source: "apps/CWSP-explorer/build/cw-explorer",
            host: "explorer.u2re.space",
            debugPath: "/explorer"
        },
        null,
        2
    ) + "\n"
);

console.log(`[stage-cw-explorer] ${src} → ${dest}`);
