// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { removeUser } from "../slice/userSlice";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqXUwligH_-gDIbSkKSmbsb74wmuH_Ym8",
  authDomain: "netflix-clone-43ee6.firebaseapp.com",
  projectId: "netflix-clone-43ee6",
  storageBucket: "netflix-clone-43ee6.appspot.com",
  messagingSenderId: "617186518748",
  appId: "1:617186518748:web:673ef9f3836e17a13f3619",
  measurementId: "G-XGTM0L8DHV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export const signUp = async (email, password, displayName) => {
  try {
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userData.user;
    await updateProfile(user, { displayName });
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const signIn = async (email, password, setSignInError) => {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);
    const user = await userData.user;
    return user;
  } catch (error) {
    console.error(error);
    setSignInError("Invalid Credentials");
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};

export { auth };
