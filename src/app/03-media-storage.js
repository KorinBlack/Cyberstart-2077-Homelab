/* IndexedDB storage for backgrounds and fonts. Shared scope; build with node scripts/build.cjs. */

var MEDIA_DATABASE_NAME = `terminal-startpage`;
var MEDIA_DATABASE_VERSION = 1;
var MEDIA_STORE_NAME = `media`;
var mediaDatabase = null;
async function openMediaDatabase() {
  return (
    mediaDatabase ||
    new Promise((e, t) => {
      let n = indexedDB.open(MEDIA_DATABASE_NAME, MEDIA_DATABASE_VERSION);
      n.onerror = () => t(n.error);
      n.onsuccess = () => {
        mediaDatabase = n.result;
        e(n.result);
      };
      n.onupgradeneeded = (e) => {
        let t = e.target.result;
        t.objectStoreNames.contains(MEDIA_STORE_NAME) ||
          t.createObjectStore(MEDIA_STORE_NAME, {
            keyPath: `id`,
          });
      };
    })
  );
}
async function storeMediaBlob(e, t, n) {
  console.log(
    `[mediaStorage] Storing media file: ${e}, type: ${n}, size: ${(t.size / 1024 / 1024).toFixed(2)} MB`,
  );
  let r = await openMediaDatabase();
  return new Promise((i, a) => {
    let o = r.transaction([MEDIA_STORE_NAME], `readwrite`).objectStore(MEDIA_STORE_NAME);
    let s = {
      id: e,
      blob: t,
      type: n,
      timestamp: Date.now(),
    };
    let c = o.put(s);
    c.onsuccess = () => {
      console.log(`[mediaStorage] Successfully stored media file: ${e}`);
      i();
    };
    c.onerror = () => {
      console.error(`[mediaStorage] Error storing media file:`, c.error);
      a(c.error);
    };
  });
}
async function readMediaBlob(e) {
  console.log(`[mediaStorage] Retrieving media blob: ${e}`);
  let t = await openMediaDatabase();
  return new Promise((n, r) => {
    let i = t.transaction([MEDIA_STORE_NAME], `readonly`).objectStore(MEDIA_STORE_NAME).get(e);
    i.onsuccess = () => {
      let t = i.result;
      if (t?.blob) {
        if (
          (console.log(
            `[mediaStorage] Retrieved blob: ${(t.blob.size / 1024 / 1024).toFixed(2)} MB, original type: ${t.blob.type}, stored type: ${t.type}`,
          ),
          !t.blob.type && t.type)
        ) {
          console.log(
            `[mediaStorage] Blob missing MIME type, recreating with stored type: ${t.type}`,
          );
          let e = new Blob([t.blob], {
            type: t.type,
          });
          console.log(`[mediaStorage] Recreated blob with type: ${e.type}`);
          n(e);
        } else n(t.blob);
      } else (console.log(`[mediaStorage] No blob found for id: ${e}`), n(null));
    };
    i.onerror = () => {
      console.error(`[mediaStorage] Error retrieving media blob:`, i.error);
      r(i.error);
    };
  });
}
async function deleteMediaBlob(e) {
  let t = await openMediaDatabase();
  return new Promise((n, r) => {
    let i = t.transaction([MEDIA_STORE_NAME], `readwrite`).objectStore(MEDIA_STORE_NAME).delete(e);
    i.onsuccess = () => n();
    i.onerror = () => r(i.error);
  });
}
