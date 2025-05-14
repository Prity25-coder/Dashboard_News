// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBicw7_fg8ANsQcWx1CbSVRkzuJcDDbwk",
  authDomain: "dashboard-news-6dac6.firebaseapp.com",
  projectId: "dashboard-news-6dac6",
  storageBucket: "dashboard-news-6dac6.firebasestorage.app",
  messagingSenderId: "626659035048",
  appId: "1:626659035048:web:d743d9c8395b46aed0bf9d",
  measurementId: "G-PNFRNMJ1TG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
