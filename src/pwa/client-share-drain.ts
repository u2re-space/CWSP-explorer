/*
 * Filename: client-share-drain.ts
 * FullPath: modules/views/explorer-view/src/pwa/client-share-drain.ts
 * Change date and time: 10.16.00_29.07.2026
 * Reason for changes: Drain SW share-target cache into Explorer OPFS /user/.
 */

import { clearStagedShare, loadStagedShareFiles } from "./lib/share-stage";

type IngestHost = {
    getExplorerFileManager?: () => null | {
        operative?: { ingestFileIntoWorkspace?: (file: File, dest?: string) => Promise<void> };
        navigate?: (path: string) => void | Promise<void>;
    };
};

/**
 * Pull staged share-target files into OPFS `/user/` via the wired FileManager.
 * Clears the share cache after a successful ingest attempt.
 */
export async function drainShareTargetIntoExplorer(view: IngestHost, destPath = "/user/"): Promise<number> {
    const staged = await loadStagedShareFiles();
    if (!staged?.files?.length) {
        if (new URLSearchParams(location.search).has("shared")) {
            // Nothing staged — still clean query noise.
            try {
                const u = new URL(location.href);
                u.searchParams.delete("shared");
                history.replaceState(null, "", u.pathname + u.search + u.hash);
            } catch {
                /* ignore */
            }
        }
        return 0;
    }

    const fm = view.getExplorerFileManager?.();
    const ingest = fm?.operative?.ingestFileIntoWorkspace;
    if (!ingest) {
        console.warn("[explorer-share] FileManager not ready for ingest");
        return 0;
    }

    let written = 0;
    for (const file of staged.files) {
        try {
            await ingest.call(fm!.operative, file, destPath);
            written++;
        } catch (err) {
            console.warn("[explorer-share] ingest failed", file.name, err);
        }
    }

    await clearStagedShare();
    try {
        await fm?.navigate?.(destPath);
    } catch {
        /* ignore */
    }

    try {
        const u = new URL(location.href);
        if (u.searchParams.has("shared")) {
            u.searchParams.delete("shared");
            history.replaceState(null, "", u.pathname + u.search + u.hash);
        }
    } catch {
        /* ignore */
    }

    console.info(`[explorer-share] ingested ${written}/${staged.files.length} file(s) → ${destPath}`);
    return written;
}
