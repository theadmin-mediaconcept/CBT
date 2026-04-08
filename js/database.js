/**
 * ============================================================
 * database.js — Firestore Database Operations
 * Handles: user data, CBT results, file metadata
 * ============================================================
 */

"use strict";

// ═══════════════════════════════════════════════════════════
//  RESULTS — Save & Fetch CBT scores
// ═══════════════════════════════════════════════════════════

/**
 * Save a CBT result for the current user
 * @param {Object} result - { courseId, courseCode, courseName, total, correct, wrong, skipped, pct }
 */
async function saveResult(result) {
  const user = getCurrentUser();
  if (!user) {
    // Fallback to localStorage if not logged in
    saveResultLocal(result);
    return;
  }
  try {
    await db.collection(COLLECTIONS.RESULTS).add({
      userId:     user.uid,
      userName:   user.displayName,
      userEmail:  user.email,
      courseId:   result.courseId,
      courseCode: result.courseCode,
      courseName: result.courseName,
      total:      result.total,
      correct:    result.correct,
      wrong:      result.wrong,
      skipped:    result.skipped,
      pct:        result.pct,
      date:       firebase.firestore.FieldValue.serverTimestamp(),
      dateStr:    new Date().toISOString()
    });
    // Also keep local cache
    saveResultLocal(result);
    updateLandingStats();
  } catch (error) {
    console.error("Error saving result:", error);
    // Still save locally if Firebase fails
    saveResultLocal(result);
  }
}

/**
 * Get all CBT results for current user from Firestore
 */
async function getUserResults() {
  const user = getCurrentUser();
  if (!user) return getResultsLocal();

  try {
    const snapshot = await db.collection(COLLECTIONS.RESULTS)
      .where("userId", "==", user.uid)
      .orderBy("date", "desc")
      .limit(100)
      .get();

    const results = [];
    snapshot.forEach(doc => {
      results.push({ id: doc.id, ...doc.data() });
    });
    return results;
  } catch (error) {
    console.error("Error fetching results:", error);
    return getResultsLocal();
  }
}

/**
 * Get aggregate stats for dashboard
 */
async function getUserStats() {
  const results = await getUserResults();
  if (!results.length) return { total: 0, avg: 0, best: 0, courses: {} };

  const avg  = Math.round(results.reduce((s, r) => s + (r.pct || 0), 0) / results.length);
  const best = Math.max(...results.map(r => r.pct || 0));

  // Group by course
  const courses = {};
  results.forEach(r => {
    if (!courses[r.courseId]) courses[r.courseId] = [];
    courses[r.courseId].push(r.pct || 0);
  });

  return { total: results.length, avg, best, courses };
}

// ═══════════════════════════════════════════════════════════
//  FILES — Save & Fetch uploaded material metadata
// ═══════════════════════════════════════════════════════════

/**
 * Save uploaded file metadata to Firestore
 */
async function saveFileMeta(meta) {
  try {
    const docRef = await db.collection(COLLECTIONS.FILES).add({
      faculty:    meta.faculty,
      level:      meta.level,
      course:     meta.course,
      fileName:   meta.fileName,
      fileURL:    meta.fileURL,
      fileSize:   meta.fileSize || 0,
      uploadedBy: meta.uploadedBy || "admin",
      uploadedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving file meta:", error);
    throw error;
  }
}

/**
 * Get all files, optionally filtered by faculty/level
 */
async function getFiles(filters = {}) {
  try {
    let query = db.collection(COLLECTIONS.FILES);
    if (filters.faculty) query = query.where("faculty", "==", filters.faculty);
    if (filters.level)   query = query.where("level",   "==", filters.level);
    query = query.orderBy("uploadedAt", "desc");

    const snapshot = await query.get();
    const files = [];
    snapshot.forEach(doc => files.push({ id: doc.id, ...doc.data() }));
    return files;
  } catch (error) {
    console.error("Error fetching files:", error);
    return [];
  }
}

/**
 * Delete a file record from Firestore
 */
async function deleteFileMeta(docId) {
  try {
    await db.collection(COLLECTIONS.FILES).doc(docId).delete();
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
}

/**
 * Get a single user's profile from Firestore
 */
async function getUserProfile(uid) {
  try {
    const doc = await db.collection(COLLECTIONS.USERS).doc(uid).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

// ═══════════════════════════════════════════════════════════
//  LOCAL STORAGE FALLBACK
// ═══════════════════════════════════════════════════════════
function getResultsLocal() {
  try { return JSON.parse(localStorage.getItem("cbtResults") || "[]"); }
  catch { return []; }
}

function saveResultLocal(result) {
  const all = getResultsLocal();
  all.unshift({ ...result, date: new Date().toISOString() });
  localStorage.setItem("cbtResults", JSON.stringify(all.slice(0, 200)));
}

async function getResults() {
  return await getUserResults();
}

async function clearHistory() {
  const user = getCurrentUser();
  if (!confirm("Clear all your test history? This cannot be undone.")) return;

  try {
    if (user) {
      const snapshot = await db.collection(COLLECTIONS.RESULTS)
        .where("userId", "==", user.uid).get();
      const batch = db.batch();
      snapshot.forEach(doc => batch.delete(doc.ref));
      await batch.commit();
    }
    localStorage.removeItem("cbtResults");
    renderTracking();
    updateLandingStats();
    showToast("History cleared.", "info");
  } catch (error) {
    showToast("Error clearing history.", "error");
  }
}
