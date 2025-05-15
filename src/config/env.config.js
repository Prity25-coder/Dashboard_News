const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGEING_SENDER_ID,
  VITE_APP_ID,
  VITE_MEASUREMENT_ID,
} = import.meta.env;

const ENV_CONFIG = Object.freeze({
  apiKey: String(VITE_API_KEY),
  authDomain: String(VITE_AUTH_DOMAIN),
  projectId: String(VITE_PROJECT_ID),
  storageBucket: String(VITE_STORAGE_BUCKET),
  messagingSenderId: String(VITE_MESSAGEING_SENDER_ID),
  appId: String(VITE_APP_ID),
  measurementId: String(VITE_MEASUREMENT_ID),
});

export default ENV_CONFIG;
