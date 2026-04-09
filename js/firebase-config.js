
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBI91wjFuqmlsxDnoUEwaVyQp6PKGhg3kw",
  authDomain: "the-admin-cbt.firebaseapp.com",
  projectId: "the-admin-cbt",
  storageBucket: "the-admin-cbt.firebasestorage.app",
  messagingSenderId: "1017787142484",
  appId: "1:1017787142484:web:90580c9199432e8d16b8c1",
  measurementId: "G-8QQS29LPXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ── INITIALIZE FIREBASE ───────────────────────────────────────
firebase.initializeApp(firebaseConfig);

// ── SERVICE INSTANCES ─────────────────────────────────────────
const auth           = firebase.auth();
const db             = firebase.firestore();
const storage        = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// ── ADMIN CREDENTIALS ─────────────────────────────────────────
const ADMIN_USERNAME = "theadmin@18";
const ADMIN_PASSWORD = "Ayomide@18";

// ── FIRESTORE COLLECTION NAMES ────────────────────────────────
const COLLECTIONS = {
  USERS:   "users",
  FILES:   "files",
  RESULTS: "results"
};

// ── LOCALSTORAGE KEYS ─────────────────────────────────────────
const LS = {
  SESSION:  "cbt_session",   // stores { uid, name, email, photo, loginMethod }
  RESULTS:  "cbtResults",    // local fallback for scores
  ADMIN:    "cbt_admin"      // admin session flag
};
