/**
 * ============================================================
 * storage.js — Firebase Storage Upload
 * ============================================================
 */

"use strict";

async function uploadCoursePDF(file, meta, onProgress) {
  if (!file) throw new Error("No file selected.");
  if (file.type !== "application/pdf") throw new Error("Only PDF files are allowed.");
  if (file.size > 20 * 1024 * 1024) throw new Error("File size must be under 20 MB.");

  const safe  = s => s.replace(/[^a-zA-Z0-9._-]/g, "_");
  const path  = `files/${safe(meta.faculty)}/${safe(meta.level)}/${Date.now()}_${safe(file.name)}`;

  return new Promise((resolve, reject) => {
    const ref    = storage.ref(path);
    const upload = ref.put(file, { contentType: "application/pdf" });

    upload.on("state_changed",
      snap => { if (onProgress) onProgress(Math.round(snap.bytesTransferred / snap.totalBytes * 100)); },
      err  => reject(err),
      async () => {
        try {
          const url = await upload.snapshot.ref.getDownloadURL();
          await saveFileMeta({ ...meta, fileName: file.name, fileURL: url, fileSize: file.size,
            uploadedBy: getCurrentUser()?.email || "admin" });
          resolve(url);
        } catch (e) { reject(e); }
      }
    );
  });
}

async function deleteCoursePDF(fileURL, docId) {
  try {
    await storage.refFromURL(fileURL).delete();
    await deleteFileMeta(docId);
    showToast("File deleted.", "success");
  } catch (err) {
    showToast("Delete error: " + err.message, "error");
  }
}

function formatFileSize(bytes) {
  if (!bytes) return "—";
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / 1048576).toFixed(1) + " MB";
}
