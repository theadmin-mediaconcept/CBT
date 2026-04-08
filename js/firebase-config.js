/**
 * ============================================================
 * FIREBASE CONFIGURATION
 * The Admin Student CBT Platform — Full-Stack Version
 * ============================================================
 * SETUP INSTRUCTIONS:
 * 1. Go to https://console.firebase.google.com
 * 2. Create a new project called "admin-cbt-platform"
 * 3. Enable: Authentication > Google Sign-In
 * 4. Enable: Firestore Database
 * 5. Enable: Storage
 * 6. Go to Project Settings > Your Apps > Add Web App
 * 7. Copy your firebaseConfig object and paste below
 * ============================================================
 */

// ─── REPLACE THIS WITH YOUR OWN FIREBASE CONFIG ─────────────
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_AUTH_DOMAIN",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// ─── INITIALIZE FIREBASE ─────────────────────────────────────
firebase.initializeApp(firebaseConfig);

// ─── EXPORT SERVICE INSTANCES ────────────────────────────────
const auth      = firebase.auth();
const db        = firebase.firestore();
const storage   = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// ─── ADMIN CREDENTIALS ───────────────────────────────────────
// These are checked against Firestore for security
const ADMIN_USERNAME = "theadmin@18";
const ADMIN_PASSWORD = "Ayomide@18";

// ─── FIRESTORE COLLECTION NAMES ──────────────────────────────
const COLLECTIONS = {
  USERS:   "users",
  FILES:   "files",
  RESULTS: "results"
};
