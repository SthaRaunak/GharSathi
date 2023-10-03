// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "gharsathi-29cce.firebaseapp.com",
    projectId: "gharsathi-29cce",
    storageBucket: "gharsathi-29cce.appspot.com",
    messagingSenderId: "270476118910",
    appId: "1:270476118910:web:7c9935f30b932f3001c12f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);