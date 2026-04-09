/**
 * ============================================================
 * router.js — SPA Navigation & Page Management
 * ============================================================
 */

"use strict";

const PAGES = [
  "page-login", "page-register", "page-home", "page-materials",
  "page-faculty-detail", "page-cbt-select", "page-cbt-exam",
  "page-results", "page-dashboard", "page-admin", "page-admin-login"
];

const PAGE_MAP = {
  "login":          "page-login",
  "register":       "page-register",
  "home":           "page-home",
  "materials":      "page-materials",
  "faculty-detail": "page-faculty-detail",
  "cbt":            "page-cbt-select",
  "cbt-exam":       "page-cbt-exam",
  "results":        "page-results",
  "dashboard":      "page-dashboard",
  "admin":          "page-admin",
  "admin-login":    "page-admin-login"
};

let currentPage = "";

// ── NAVIGATE ──────────────────────────────────────────────────
function navigateTo(pageName) {
  // Protected pages require login
  const protected_ = ["home","materials","faculty-detail","cbt","cbt-exam","results","dashboard"];
  const adminOnly  = ["admin"];

  if (protected_.includes(pageName) && !isLoggedIn()) {
    showToast("Please sign in to continue.", "info");
    pageName = "login";
  }
  if (adminOnly.includes(pageName) && !isAdmin()) {
    navigateTo("admin-login");
    return;
  }

  const pageId = PAGE_MAP[pageName] || pageName;

  // Hide all pages
  PAGES.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("active");
  });

  // Show target
  const target = document.getElementById(pageId);
  if (!target) { console.warn("Page not found:", pageId); return; }

  target.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  currentPage = pageName;

  // Run page-specific init
  onPageEnter(pageName);

  // Show/hide header
  const header = document.getElementById("site-header");
  if (header) {
    const noHeader = ["login", "register", "admin-login", "cbt-exam"];
    header.style.display = noHeader.includes(pageName) ? "none" : "";
  }
}

// ── PAGE ENTER HOOKS ──────────────────────────────────────────
function onPageEnter(name) {
  switch (name) {
    case "home":           initHomePage();      break;
    case "materials":      renderFacultyGrid(); break;
    case "cbt":            renderCBTCourses();  break;
    case "dashboard":      initDashboard();     break;
    case "admin":          initAdminPanel();    break;
  }
}
