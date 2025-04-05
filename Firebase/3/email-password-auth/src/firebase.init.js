// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// DONOT Share config in public
const firebaseConfig = {
  apiKey: "AIzaSyBblpJSgd5JwX_H7SaKtFegJTlwBHG4jvQ",
  authDomain: "email-password-auth-c2128.firebaseapp.com",
  projectId: "email-password-auth-c2128",
  storageBucket: "email-password-auth-c2128.firebasestorage.app",
  messagingSenderId: "571205664425",
  appId: "1:571205664425:web:0f9c8db1676b6c8909b3b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);