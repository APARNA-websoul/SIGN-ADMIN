// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0oJW1LCayBS5X9npqlSl0pNBmpTs6O_U",
  authDomain: "sign-matrimony.firebaseapp.com",
  databaseURL: "https://sign-matrimony-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sign-matrimony",
  storageBucket: "sign-matrimony.appspot.com",
  messagingSenderId: "527210636104",
  appId: "1:527210636104:web:e4785db209db6c0940497d",
  measurementId: "G-P523VV4ZWB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase(app);
const storage = getStorage(app);
export {db, auth, storage};