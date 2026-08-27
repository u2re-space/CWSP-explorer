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
