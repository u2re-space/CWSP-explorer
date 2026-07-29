/*
 * Filename: share-stage.ts
 * FullPath: modules/views/explorer-view/src/pwa/lib/share-stage.ts
 * Change date and time: 10.15.00_29.07.2026
 * Reason for changes: Worker-safe share-target staging without AI/Settings imports.
 */

/**
 * WHY: Slim Explorer SW + client drain must not pull CrossWord ExecutionCore / Settings.
 * INVARIANT: only Cache Storage + FormData/File — safe on ServiceWorkerGlobalScope.
 */

export const SHARE_CACHE_NAME = "share-target-data";
export const SHARE_CACHE_KEY = "/share-target-data";
export const SHARE_FILES_MANIFEST_KEY = "/share-target-files";
export const SHARE_FILE_PREFIX = "/share-target-file/";

const FILE_FIELD_NAMES = ["files", "mapped_files", "file", "image", "images", "media"] as const;

export type StagedShareMeta = {
    title: string;
    text: string;
    url: string;
    timestamp: number;
    fileCount: number;
};

export type StagedShareFileMeta = {
    key: string;
    name: string;
    type: string;
    size: number;
    lastModified?: number;
};

export type StagedSharePayload = {
    meta: StagedShareMeta;
    files: File[];
};

const isValidFile = (value: unknown): value is File =>
    typeof File !== "undefined" && value instanceof File && value.size >= 0 && Boolean(value.name);

/** Collect File entries from share-target FormData (known + unknown fields). */
export async function collectShareFiles(formData: FormData): Promise<File[]> {
    const seen = new Set<string>();
    const out: File[] = [];
    const add = (file: File) => {
        const key = `${file.name}:${file.size}:${file.type}:${(file as File & { lastModified?: number }).lastModified ?? 0}`;
        if (seen.has(key)) return;
        seen.add(key);
        out.push(file);
    };

    for (const field of FILE_FIELD_NAMES) {
        for (const value of formData.getAll(field)) {
            if (isValidFile(value)) add(value);
        }
    }

    const entries = Array.from((formData as FormData & { entries?: () => IterableIterator<[string, FormDataEntryValue]> }).entries?.() || []);
    for (const [, value] of entries) {
        if (isValidFile(value)) add(value);
    }
    return out;
}

export async function stageShareFromFormData(formData: FormData): Promise<boolean> {
    const files = await collectShareFiles(formData);
    const title = String(formData.get("title") || "").trim();
    const text = String(formData.get("text") || "").trim();
    const url = String(formData.get("url") || "").trim();
    const timestamp = Date.now();

    // Persist a text/url share as a .txt when there are no files.
    if (!files.length && (text || url || title)) {
        const body = [title && `Title: ${title}`, url && `URL: ${url}`, text].filter(Boolean).join("\n\n");
        files.push(new File([body || "shared"], `shared-${timestamp}.txt`, { type: "text/plain" }));
    }

    try {
        const cache = await caches.open(SHARE_CACHE_NAME);
        const meta: StagedShareMeta = {
            title,
            text,
            url,
            timestamp,
            fileCount: files.length
        };
        await cache.put(
            SHARE_CACHE_KEY,
            new Response(JSON.stringify(meta), { headers: { "Content-Type": "application/json" } })
        );

        const manifest: StagedShareFileMeta[] = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i]!;
            const key = `${SHARE_FILE_PREFIX}${timestamp}-${i}`;
            const headers = new Headers();
            headers.set("Content-Type", file.type || "application/octet-stream");
            headers.set("X-File-Name", encodeURIComponent(file.name || `file-${i}`));
            headers.set("X-File-Size", String(file.size || 0));
            headers.set("X-File-LastModified", String(file.lastModified ?? 0));
            await cache.put(key, new Response(file, { headers }));
            manifest.push({
                key,
                name: file.name || `file-${i}`,
                type: file.type || "application/octet-stream",
                size: file.size || 0,
                lastModified: file.lastModified
            });
        }

        await cache.put(
            SHARE_FILES_MANIFEST_KEY,
            new Response(JSON.stringify({ files: manifest, timestamp }), {
                headers: { "Content-Type": "application/json" }
            })
        );
        return true;
    } catch (err) {
        console.warn("[explorer-share] stage failed", err);
        return false;
    }
}

/** Read staged share files for the page (OPFS ingest). */
export async function loadStagedShareFiles(): Promise<StagedSharePayload | null> {
    try {
        const cache = await caches.open(SHARE_CACHE_NAME);
        const metaRes = await cache.match(SHARE_CACHE_KEY);
        const manRes = await cache.match(SHARE_FILES_MANIFEST_KEY);
        if (!manRes) return null;

        const meta: StagedShareMeta = metaRes
            ? ((await metaRes.json()) as StagedShareMeta)
            : { title: "", text: "", url: "", timestamp: Date.now(), fileCount: 0 };
        const man = (await manRes.json()) as { files?: StagedShareFileMeta[] };
        const files: File[] = [];
        for (const entry of man.files || []) {
            const res = await cache.match(entry.key);
            if (!res) continue;
            const blob = await res.blob();
            const nameHeader = res.headers.get("X-File-Name");
            const name = nameHeader ? decodeURIComponent(nameHeader) : entry.name;
            files.push(
                new File([blob], name || "shared-file", {
                    type: entry.type || blob.type || "application/octet-stream",
                    lastModified: entry.lastModified ?? Date.now()
                })
            );
        }
        if (!files.length && !meta.text && !meta.url) return null;
        return { meta, files };
    } catch (err) {
        console.warn("[explorer-share] load failed", err);
        return null;
    }
}

export async function clearStagedShare(): Promise<void> {
    try {
        await caches.delete(SHARE_CACHE_NAME);
    } catch {
        /* ignore */
    }
}
