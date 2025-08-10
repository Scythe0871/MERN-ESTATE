// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "abhiram-estate.firebaseapp.com",
  projectId: "abhiram-estate",
  storageBucket: "abhiram-estate.firebasestorage.app",
  messagingSenderId: "793365892408",
  appId: "1:793365892408:web:d0c97555cb5f38c28685cd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
