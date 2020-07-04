// Import: Firebase Dependencies
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Config: Firebase Application Details
const config = {
  apiKey: "AIzaSyD76gO9HL_18ZNqmB3RZoGyNVfS4rDBW98",
  authDomain: "rizji-shop-db.firebaseapp.com",
  databaseURL: "https://rizji-shop-db.firebaseio.com",
  projectId: "rizji-shop-db",
  storageBucket: "rizji-shop-db.appspot.com",
  messagingSenderId: "684553937972",
  appId: "1:684553937972:web:02f7bf52fdf88b647d1661",
};

// Initialize: Firebase Config
firebase.initializeApp(config);

// Export: Firebase Firestore and Authentication
export const firestore = firebase.firestore();
export const auth = firebase.auth();

// Setup: Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Export: Google SignIn Popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Export: Default Firebase Library
export default firebase;
