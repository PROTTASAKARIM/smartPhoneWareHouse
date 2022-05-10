// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBckGDRPM09lUyCD4sdsHYFNInaNI4tkfM",
  authDomain: "smartphn-warehouse.firebaseapp.com",
  projectId: "smartphn-warehouse",
  storageBucket: "smartphn-warehouse.appspot.com",
  messagingSenderId: "723875612373",
  appId: "1:723875612373:web:bec539271ed2a2becec45c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;