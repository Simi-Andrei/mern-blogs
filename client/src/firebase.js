// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-64ad6.firebaseapp.com",
  projectId: "mern-blog-64ad6",
  storageBucket: "mern-blog-64ad6.appspot.com",
  messagingSenderId: "634350698274",
  appId: "1:634350698274:web:caf2a39e7f6623f97cef7b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
