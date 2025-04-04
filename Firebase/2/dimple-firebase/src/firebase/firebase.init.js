// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVNwhh_azLXyq55j_k8qfijAAHQ-vA4Gc",
  authDomain: "simple-firebase-3d11a.firebaseapp.com",
  projectId: "simple-firebase-3d11a",
  storageBucket: "simple-firebase-3d11a.firebasestorage.app",
  messagingSenderId: "441287150127",
  appId: "1:441287150127:web:49466a85d71c52fecb94da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
