import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
// Auth context
export const AuthContext = createContext();
//getAuth from firebase and parameter app from firebase.config.js file
const auth = getAuth(app);
// AuthProvider function
const AuthProvider = ({ children }) => {
  //user
  const [user, setUser] = useState(null);
  //loader
  const [loading, setLoading] = useState(true);

  //create user for email pass auth
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in email pass auth
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with GoogleAuthProvider
  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //login with GithubAuthProvider
  const githubLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //Update user profile for email pass auth user
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //value of AuthContext.Provider
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleLogin,
    githubLogin,
    updateUserProfile,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
