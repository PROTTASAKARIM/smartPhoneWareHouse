// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDryVuCoXI-XF9AzFD8oL6_NBytB1TyvSk",
  authDomain: "smartphone-warehouse-c39ae.firebaseapp.com",
  projectId: "smartphone-warehouse-c39ae",
  storageBucket: "smartphone-warehouse-c39ae.appspot.com",
  messagingSenderId: "353227522719",
  appId: "1:353227522719:web:9e3aae29007ed1ab4418aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;