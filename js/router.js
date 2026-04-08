/**
 * ============================================================
 * router.js — Single-Page App Navigation
 * Controls which page/section is shown at any time
 * ============================================================
 */

"use strict";

// All page IDs in the SPA
const PAGES = ["page-login", "page-home", "page-materials",
               "page-cbt-select", "page-cbt-exam", "page-results",
               "page-dashboard", "page-admin", "page-faculty-detail",
               "page-admin-login"];

// Page aliases → actual page IDs
const PAGE_MAP = {
  "login":          "page-login",
  "home":           "page-home",
  "materials":      "page-materials",
  "cbt":            "page-cbt-select",
  "cbt-exam":       "page-cbt-exam",
  "results":        "page-results",
  "dashboard":      "page-dashboard",
  "admin":          "page-admin",
  "faculty-detail": "page-faculty-detail",
  "admin-login":    "page-admin-login"
};

// Track current page
let currentPage = "login";

// ─── NAVIGATE TO PAGE ─────────────────────────────────────────
function navigateTo(pageName) {
  const pageId = PAGE_MAP[pageName] || pageName;

  // Auth guard — protect pages that need login
  const protectedPages = ["home","materials","cbt","cbt-exam","results","dashboard","faculty-detail"];
  const adminPages     = ["admin"];

  if (protectedPages.includes(pageName) && !auth.currentUser) {
    showToast("Please sign in to continue.", "info");
    pageName = "login";
    return;
  }
  if (adminPages.includes(pageName) && !isAdmin()) {
    navigateTo("admin-login");
    return;
  }

  // Hide all pages
  PAGES.forEach(p => {
    const el = document.getElementById(p);
    if (el) el.classList.remove("active");
  });

  // Show target page
  const target = document.getElementById(PAGE_MAP[pageName] || pageId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
    currentPage = pageName;

    // Trigger page-specific init
    onPageEnter(pageName);
  }
}

// ─── PAGE ENTER HOOKS ─────────────────────────────────────────
function onPageEnter(pageName) {
  switch (pageName) {
    case "home":
      initHomePage();
      break;
    case "materials":
      renderFacultyGrid();
      break;
    case "cbt":
      renderCBTCourses();
      break;
    case "dashboard":
      initDashboard();
      break;
    case "admin":
      initAdminPanel();
      break;
  }
}

// ─── UTILITY: Back navigation ─────────────────────────────────
function goBack(page) {
  navigateTo(page || "home");
}
