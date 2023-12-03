// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d5b00.firebaseapp.com",
  projectId: "mern-estate-d5b00",
  storageBucket: "mern-estate-d5b00.appspot.com",
  messagingSenderId: "341783532755",
  appId: "1:341783532755:web:214bbf8f0e812c54b97026"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);