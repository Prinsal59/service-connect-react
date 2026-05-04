import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// You can find this in your Firebase Console: Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
// Using initializeFirestore with experimentalForceLongPolling to fix "client is offline" issues
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export default app;
