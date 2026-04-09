

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByr8kJErH-_EDZh5MU22d9vTUNQ96psnM",
  authDomain: "the-admin-cbt-atform.firebaseapp.com",
  projectId: "the-admin-cbt-atform",
  storageBucket: "the-admin-cbt-atform.firebasestorage.app",
  messagingSenderId: "693194888118",
  appId: "1:693194888118:web:04139ad74af0fe000ca717",
  measurementId: "G-DNJ2Q2D27G"
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
