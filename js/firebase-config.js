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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
