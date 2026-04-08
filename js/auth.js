/**
 * ============================================================
 * auth.js — Authentication Module
 * Handles: Google login, admin login, logout, session state
 * ============================================================
 */

"use strict";

// ─── AUTH STATE LISTENER ─────────────────────────────────────
// Called whenever login/logout happens anywhere in the app
auth.onAuthStateChanged(async (user) => {
  if (user) {
    // User is signed in — save/update their profile in Firestore
    await saveUserToFirestore(user);
    // Update all UI elements that show user info
    updateUserUI(user);
    // Show authenticated pages, hide login
    handleAuthenticatedState(user);
  } else {
    // No user — show login page
    handleUnauthenticatedState();
  }
});

// ─── GOOGLE SIGN IN ──────────────────────────────────────────
async function signInWithGoogle() {
  try {
    showLoadingSpinner("Signing in with Google...");
    const result = await auth.signInWithPopup(googleProvider);
    const user   = result.user;
    showToast("Welcome, " + user.displayName + "! 🎉", "success");
    // Redirect to home after short delay
    setTimeout(() => navigateTo("home"), 1000);
  } catch (error) {
    hideLoadingSpinner();
    console.error("Google sign-in error:", error);
    if (error.code === "auth/popup-closed-by-user") {
      showToast("Sign-in cancelled.", "info");
    } else {
      showToast("Sign-in failed: " + error.message, "error");
    }
  }
}

// ─── ADMIN LOGIN ─────────────────────────────────────────────
async function adminLogin(username, password) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Store admin session flag (in addition to normal auth)
    sessionStorage.setItem("isAdmin", "true");
    showToast("Admin access granted! 🔐", "success");
    setTimeout(() => navigateTo("admin"), 800);
    return true;
  } else {
    showToast("Invalid admin credentials.", "error");
    return false;
  }
}

// ─── SIGN OUT ────────────────────────────────────────────────
async function signOut() {
  try {
    sessionStorage.removeItem("isAdmin");
    await auth.signOut();
    showToast("Signed out successfully.", "info");
    navigateTo("login");
  } catch (error) {
    showToast("Sign-out error: " + error.message, "error");
  }
}

// ─── SAVE / UPDATE USER IN FIRESTORE ─────────────────────────
async function saveUserToFirestore(user) {
  try {
    const userRef = db.collection(COLLECTIONS.USERS).doc(user.uid);
    const doc     = await userRef.get();

    const userData = {
      name:         user.displayName || "Student",
      email:        user.email,
      profileImage: user.photoURL || "",
      lastLogin:    firebase.firestore.FieldValue.serverTimestamp()
    };

    if (!doc.exists) {
      // First time — set full profile + createdAt
      await userRef.set({
        ...userData,
        userId:    user.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    } else {
      // Returning user — just update lastLogin & photo
      await userRef.update(userData);
    }
  } catch (error) {
    console.error("Error saving user:", error);
  }
}

// ─── GET CURRENT USER ────────────────────────────────────────
function getCurrentUser() {
  return auth.currentUser;
}

// ─── CHECK IF ADMIN ──────────────────────────────────────────
function isAdmin() {
  return sessionStorage.getItem("isAdmin") === "true";
}

// ─── REQUIRE AUTH GUARD ──────────────────────────────────────
// Call this at the top of protected pages
function requireAuth() {
  if (!auth.currentUser) {
    navigateTo("login");
    return false;
  }
  return true;
}

// ─── REQUIRE ADMIN GUARD ─────────────────────────────────────
function requireAdmin() {
  if (!isAdmin()) {
    showToast("Admin access required.", "error");
    navigateTo("home");
    return false;
  }
  return true;
}

// ─── UI STATE HANDLERS ───────────────────────────────────────
function updateUserUI(user) {
  // Update avatar everywhere on the page
  document.querySelectorAll(".user-avatar-img").forEach(img => {
    img.src = user.photoURL || "Admin.png";
    img.alt = user.displayName;
  });
  document.querySelectorAll(".user-name-display").forEach(el => {
    el.textContent = user.displayName || "Student";
  });
  document.querySelectorAll(".user-email-display").forEach(el => {
    el.textContent = user.email;
  });
}

function handleAuthenticatedState(user) {
  // Hide login-only elements, show auth-only elements
  document.querySelectorAll(".hide-when-auth").forEach(el => {
    el.style.display = "none";
  });
  document.querySelectorAll(".show-when-auth").forEach(el => {
    el.style.display = "";
  });
}

function handleUnauthenticatedState() {
  document.querySelectorAll(".show-when-auth").forEach(el => {
    el.style.display = "none";
  });
  document.querySelectorAll(".hide-when-auth").forEach(el => {
    el.style.display = "";
  });
}
