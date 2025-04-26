import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

// Create AuthContext
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Initialize Firebase Authentication
const auth = getAuth(app);

// Create GoogleAuthProvider instance
const googleProvider = new GoogleAuthProvider();

// Define the AuthProvider component
const AuthProvider = ({ children }) => {
  // Initialize state variables for loading and user
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  // console.log(loading, user);

  // Function to create a new user with email and password
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to sign in an existing user with email and password
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function to sign in with Google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Function to sign out the current user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Function to update the user's profile information
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // Function to send a password reset email
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // useEffect hook to listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // Define the value object to be provided by the AuthContext
  const authInfo = {
    loading,
    setLoading,
    user,
    setUser,
    createNewUser,
    userLogin,
    googleSignIn,
    logOut,
    updateUserProfile,
    resetPassword,
  };

  // Return the AuthContext.Provider with the value and children
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// Export the AuthProvider component as the default export
export default AuthProvider;