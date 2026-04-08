/**
 * ============================================================
 * storage.js — Firebase Storage Upload Module
 * Handles PDF uploads for the Admin panel
 * ============================================================
 */

"use strict";

// ─── UPLOAD A PDF FILE TO FIREBASE STORAGE ───────────────────
/**
 * Upload a PDF and save its metadata to Firestore
 * @param {File}   file     - The selected File object
 * @param {Object} meta     - { faculty, level, course }
 * @param {Function} onProgress - Called with % progress (0-100)
 * @returns {Promise<string>} - Download URL
 */
async function uploadCoursePDF(file, meta, onProgress) {
  if (!file) throw new Error("No file selected.");
  if (file.type !== "application/pdf") throw new Error("Only PDF files are allowed.");
  if (file.size > 20 * 1024 * 1024) throw new Error("File size must be under 20 MB.");

  // Build storage path:  files/FacultyName/Level/CourseTitle/filename.pdf
  const safeName    = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const safeFaculty = meta.faculty.replace(/[^a-zA-Z0-9]/g, "_");
  const safeLevel   = meta.level.replace(/[^a-zA-Z0-9]/g, "_");
  const timestamp   = Date.now();
  const storagePath = `files/${safeFaculty}/${safeLevel}/${timestamp}_${safeName}`;

  return new Promise((resolve, reject) => {
    const ref    = storage.ref(storagePath);
    const upload = ref.put(file, {
      contentType: "application/pdf",
      customMetadata: {
        faculty: meta.faculty,
        level:   meta.level,
        course:  meta.course
      }
    });

    // Progress listener
    upload.on("state_changed",
      (snapshot) => {
        const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        if (onProgress) onProgress(pct);
      },
      (error) => {
        console.error("Upload error:", error);
        reject(error);
      },
      async () => {
        // Upload complete — get download URL
        try {
          const url = await upload.snapshot.ref.getDownloadURL();
          // Save metadata to Firestore
          await saveFileMeta({
            faculty:   meta.faculty,
            level:     meta.level,
            course:    meta.course,
            fileName:  file.name,
            fileURL:   url,
            fileSize:  file.size,
            uploadedBy: getCurrentUser()?.email || "admin"
          });
          resolve(url);
        } catch (err) {
          reject(err);
        }
      }
    );
  });
}

// ─── DELETE A FILE FROM STORAGE ──────────────────────────────
async function deleteCoursePDF(fileURL, docId) {
  try {
    // Delete from Storage
    const fileRef = storage.refFromURL(fileURL);
    await fileRef.delete();
    // Delete metadata from Firestore
    await deleteFileMeta(docId);
    showToast("File deleted successfully.", "success");
  } catch (error) {
    console.error("Delete error:", error);
    showToast("Error deleting file: " + error.message, "error");
  }
}

// ─── FORMAT FILE SIZE ─────────────────────────────────────────
function formatFileSize(bytes) {
  if (!bytes) return "Unknown size";
  if (bytes < 1024)        return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}
