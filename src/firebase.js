// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDxO3xNWg7knEId1u9ilVAboLH-lubERSM",
  authDomain: "dashboard-news-90fb1.firebaseapp.com",
  projectId: "dashboard-news-90fb1",
  storageBucket: "dashboard-news-90fb1.firebasestorage.app",
  messagingSenderId: "290045228265",
  appId: "1:290045228265:web:56b8890c4c2b227f4b2c78",
  measurementId: "G-WTRCLBVXYT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
