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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
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
