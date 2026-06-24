import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // 👈 Ավելացավ սա

const firebaseConfig = {
  apiKey: "AIzaSyBdSXc2AT0qyN3XLvOIRJP1m72A4aNYHdk",
  authDomain: "amaranoc-fa025.firebaseapp.com",
  projectId: "amaranoc-fa025",
  storageBucket: "amaranoc-fa025.firebasestorage.app",
  messagingSenderId: "906060508450",
  appId: "1:906060508450:web:23db051677b223e37f497b",
  measurementId: "G-WVG8SHJBLG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const auth = getAuth(app); // 👈 Արտահանում ենք մուտքի համակարգը
export const googleProvider = new GoogleAuthProvider(); // 👈 Google-ի մատակարարը