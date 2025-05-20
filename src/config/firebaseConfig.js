// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import ENV_CONFIG from "./env.config";

const firebaseConfig = ENV_CONFIG;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Set custom parameters for Google provider if needed
provider.setCustomParameters({
  prompt: "select_account",
});

export { auth, provider };
