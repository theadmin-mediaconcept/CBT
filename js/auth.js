/**
 * ============================================================
 * auth.js — Authentication Module
 * Supports: Email/Password signup+login, Google sign-in,
 *           Admin login, Persistent session via localStorage
 * ============================================================
 */

"use strict";

// ── PERSISTENT SESSION HELPERS ────────────────────────────────

/**
 * Save user session to localStorage for persistence.
 * This means the user stays logged in across browser sessions.
 */
function saveSession(user, loginMethod) {
  const session = {
    uid:         user.uid,
    name:        user.displayName || user.email.split("@")[0],
    email:       user.email,
    photo:       user.photoURL || "",
    loginMethod: loginMethod || "email",
    savedAt:     Date.now()
  };
  localStorage.setItem(LS.SESSION, JSON.stringify(session));
}

/**
 * Get the saved session from localStorage.
 * Returns null if no session exists.
 */
function getSession() {
  try {
    const raw = localStorage.getItem(LS.SESSION);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

/** Remove the persisted session (on logout or data clear) */
function clearSession() {
  localStorage.removeItem(LS.SESSION);
  localStorage.removeItem(LS.ADMIN);
  sessionStorage.removeItem("isAdmin");
}

// ── FIREBASE AUTH STATE LISTENER ─────────────────────────────
// This fires on every page load. If Firebase already has a user
// (token still valid), it fires with that user immediately.
auth.onAuthStateChanged(async (user) => {
  hideLoadingSpinner();
  if (user) {
    // Firebase has a valid session — persist it and show app
    saveSession(user, user.providerData[0]?.providerId === "google.com" ? "google" : "email");
    await saveUserToFirestore(user);
    updateUserUI(user);
    handleAuthenticatedState();
  } else {
    // Firebase has no active session —
    // BUT we still check localStorage for a previously saved session.
    // Firebase will re-authenticate on next API call automatically
    // as long as the refresh token is valid.
    const session = getSession();
    if (session) {
      // Session exists in localStorage — user previously logged in.
      // Update UI with cached data while Firebase re-validates.
      updateUserUIFromSession(session);
      handleAuthenticatedState();
    } else {
      handleUnauthenticatedState();
    }
  }
});

// ── EMAIL / PASSWORD SIGN UP ──────────────────────────────────
async function signUpWithEmail(name, email, password) {
  try {
    showLoadingSpinner("Creating your account...");
    // Create the Firebase auth user
    const result = await auth.createUserWithEmailAndPassword(email, password);
    const user   = result.user;
    // Set display name
    await user.updateProfile({ displayName: name });
    saveSession(user, "email");
    await saveUserToFirestore(user);
    showToast("Account created! Welcome, " + name + " 🎉", "success");
    hideLoadingSpinner();
    setTimeout(() => navigateTo("home"), 800);
  } catch (error) {
    hideLoadingSpinner();
    const msg = getFriendlyAuthError(error.code);
    showToast(msg, "error");
  }
}

// ── EMAIL / PASSWORD SIGN IN ──────────────────────────────────
async function signInWithEmail(email, password) {
  try {
    showLoadingSpinner("Signing in...");
    const result = await auth.signInWithEmailAndPassword(email, password);
    const user   = result.user;
    saveSession(user, "email");
    showToast("Welcome back, " + (user.displayName || email.split("@")[0]) + "! 👋", "success");
    hideLoadingSpinner();
    setTimeout(() => navigateTo("home"), 800);
  } catch (error) {
    hideLoadingSpinner();
    showToast(getFriendlyAuthError(error.code), "error");
  }
}

// ── GOOGLE SIGN IN ────────────────────────────────────────────
async function signInWithGoogle() {
  try {
    showLoadingSpinner("Opening Google sign-in...");
    const result = await auth.signInWithPopup(googleProvider);
    const user   = result.user;
    saveSession(user, "google");
    await saveUserToFirestore(user);
    showToast("Welcome, " + user.displayName + "! 🎉", "success");
    hideLoadingSpinner();
    setTimeout(() => navigateTo("home"), 800);
  } catch (error) {
    hideLoadingSpinner();
    if (error.code !== "auth/popup-closed-by-user") {
      showToast(getFriendlyAuthError(error.code), "error");
    }
  }
}

// ── ADMIN LOGIN ───────────────────────────────────────────────
async function adminLogin(username, password) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    localStorage.setItem(LS.ADMIN, "true");
    sessionStorage.setItem("isAdmin", "true");
    showToast("Admin access granted! 🔐", "success");
    setTimeout(() => navigateTo("admin"), 800);
    return true;
  }
  showToast("Invalid admin credentials.", "error");
  return false;
}

// ── SIGN OUT ──────────────────────────────────────────────────
async function signOut() {
  try {
    clearSession();
    await auth.signOut();
    showToast("Signed out successfully.", "info");
    navigateTo("login");
  } catch (error) {
    // Even if Firebase signOut fails, clear local state
    clearSession();
    navigateTo("login");
  }
}

// ── PASSWORD RESET ────────────────────────────────────────────
async function sendPasswordReset(email) {
  try {
    await auth.sendPasswordResetEmail(email);
    showToast("Password reset email sent! Check your inbox.", "success");
  } catch (error) {
    showToast(getFriendlyAuthError(error.code), "error");
  }
}

// ── SAVE USER TO FIRESTORE ────────────────────────────────────
async function saveUserToFirestore(user) {
  if (!user) return;
  try {
    const ref = db.collection(COLLECTIONS.USERS).doc(user.uid);
    const doc = await ref.get();
    const data = {
      name:         user.displayName || user.email.split("@")[0],
      email:        user.email,
      profileImage: user.photoURL || "",
      lastLogin:    firebase.firestore.FieldValue.serverTimestamp()
    };
    if (!doc.exists) {
      await ref.set({
        ...data,
        userId:      user.uid,
        loginMethod: user.providerData[0]?.providerId === "google.com" ? "google" : "email",
        createdAt:   firebase.firestore.FieldValue.serverTimestamp()
      });
    } else {
      await ref.update(data);
    }
  } catch (err) {
    console.error("Firestore user save error:", err);
  }
}

// ── GETTERS ───────────────────────────────────────────────────
function getCurrentUser()  { return auth.currentUser; }
function isAdmin()         { return localStorage.getItem(LS.ADMIN) === "true" || sessionStorage.getItem("isAdmin") === "true"; }
function isLoggedIn()      { return !!(auth.currentUser || getSession()); }

// ── UI UPDATERS ───────────────────────────────────────────────
function updateUserUI(user) {
  const name  = user.displayName || user.email.split("@")[0];
  const email = user.email;
  const photo = user.photoURL || "assets/Admin.png";
  _applyUserUI(name, email, photo);
}

function updateUserUIFromSession(session) {
  const name  = session.name  || "Student";
  const email = session.email || "";
  const photo = session.photo || "assets/Admin.png";
  _applyUserUI(name, email, photo);
}

function _applyUserUI(name, email, photo) {
  document.querySelectorAll(".user-avatar-img").forEach(img  => { img.src = photo; img.alt = name; });
  document.querySelectorAll(".user-name-display").forEach(el => { el.textContent = name; });
  document.querySelectorAll(".user-email-display").forEach(el => { el.textContent = email; });
}

function handleAuthenticatedState() {
  document.querySelectorAll(".hide-when-auth").forEach(el => { el.style.display = "none"; });
  document.querySelectorAll(".show-when-auth").forEach(el  => { el.style.display = ""; });

  // If currently on login page, redirect to home
  const session = getSession();
  if (currentPage === "login" || !currentPage) {
    navigateTo("home");
  }
}

function handleUnauthenticatedState() {
  document.querySelectorAll(".show-when-auth").forEach(el  => { el.style.display = "none"; });
  document.querySelectorAll(".hide-when-auth").forEach(el  => { el.style.display = ""; });
}

// ── FRIENDLY ERROR MESSAGES ───────────────────────────────────
function getFriendlyAuthError(code) {
  const errors = {
    "auth/user-not-found":          "No account found with this email. Please sign up first.",
    "auth/wrong-password":          "Incorrect password. Please try again.",
    "auth/email-already-in-use":    "An account with this email already exists. Please log in.",
    "auth/weak-password":           "Password must be at least 6 characters.",
    "auth/invalid-email":           "Please enter a valid email address.",
    "auth/too-many-requests":       "Too many failed attempts. Please try again later.",
    "auth/network-request-failed":  "Network error. Please check your connection.",
    "auth/popup-blocked":           "Popup was blocked. Please allow popups for this site.",
    "auth/invalid-credential":      "Incorrect email or password. Please try again."
  };
  return errors[code] || "Authentication error. Please try again.";
}

// ── INIT: CHECK SESSION ON PAGE LOAD ─────────────────────────
// Run immediately to avoid flash of login page for returning users
(function checkExistingSession() {
  const session = getSession();
  if (session) {
    // Update UI immediately with cached data
    updateUserUIFromSession(session);
    // Don't navigate yet — wait for onAuthStateChanged to confirm
  }
})();
