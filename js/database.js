/**
 * ============================================================
 * database.js — Firestore Database Operations
 * ============================================================
 */

"use strict";

// ── SAVE CBT RESULT ───────────────────────────────────────────
async function saveResult(result) {
  // Always save locally first (instant + works offline)
  _saveLocal(result);
  updateLandingStats();

  // Then sync to Firestore if logged in
  const user = getCurrentUser();
  if (!user) return;

  try {
    const session = getSession();
    await db.collection(COLLECTIONS.RESULTS).add({
      userId:     user.uid,
      userName:   user.displayName || (session && session.name) || "Student",
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
  } catch (err) {
    console.error("Firestore save error:", err);
    // Local save already done — silently continue
  }
}

// ── GET USER RESULTS ──────────────────────────────────────────
async function getUserResults() {
  const user = getCurrentUser();

  // Try Firestore first if logged in
  if (user) {
    try {
      const snap = await db.collection(COLLECTIONS.RESULTS)
        .where("userId", "==", user.uid)
        .orderBy("date", "desc")
        .limit(100)
        .get();
      const results = [];
      snap.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
      if (results.length) return results;
    } catch (err) {
      console.error("Firestore fetch error:", err);
    }
  }

  // Fall back to localStorage
  return _getLocal();
}

// ── CLEAR HISTORY ─────────────────────────────────────────────
async function clearHistory() {
  if (!confirm("Clear all your test history? This cannot be undone.")) return;

  // Clear local
  localStorage.removeItem(LS.RESULTS);

  // Clear Firestore
  const user = getCurrentUser();
  if (user) {
    try {
      const snap  = await db.collection(COLLECTIONS.RESULTS).where("userId","==",user.uid).get();
      const batch = db.batch();
      snap.forEach(doc => batch.delete(doc.ref));
      await batch.commit();
    } catch (err) { console.error("Firestore clear error:", err); }
  }

  renderTracking();
  updateLandingStats();
  showToast("History cleared.", "info");
}

// ── FILE METADATA ─────────────────────────────────────────────
async function saveFileMeta(meta) {
  const ref = await db.collection(COLLECTIONS.FILES).add({
    faculty:    meta.faculty,
    level:      meta.level,
    course:     meta.course,
    fileName:   meta.fileName,
    fileURL:    meta.fileURL,
    fileSize:   meta.fileSize || 0,
    uploadedBy: meta.uploadedBy || "admin",
    uploadedAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  return ref.id;
}

async function getFiles(filters = {}) {
  try {
    let q = db.collection(COLLECTIONS.FILES);
    if (filters.faculty) q = q.where("faculty", "==", filters.faculty);
    if (filters.level)   q = q.where("level",   "==", filters.level);
    q = q.orderBy("uploadedAt", "desc");
    const snap  = await q.get();
    const files = [];
    snap.forEach(doc => files.push({ id: doc.id, ...doc.data() }));
    return files;
  } catch (err) {
    console.error("getFiles error:", err);
    return [];
  }
}

async function deleteFileMeta(docId) {
  await db.collection(COLLECTIONS.FILES).doc(docId).delete();
}

// ── LOCAL STORAGE HELPERS ─────────────────────────────────────
function _getLocal() {
  try { return JSON.parse(localStorage.getItem(LS.RESULTS) || "[]"); }
  catch { return []; }
}

function _saveLocal(result) {
  const all = _getLocal();
  all.unshift({ ...result, dateStr: new Date().toISOString() });
  localStorage.setItem(LS.RESULTS, JSON.stringify(all.slice(0, 200)));
}

// Alias used in legacy code
function getResultsLocal()     { return _getLocal(); }
function saveResultLocal(r)    { _saveLocal(r); }
async function getResults()    { return await getUserResults(); }
