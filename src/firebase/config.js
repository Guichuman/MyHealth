// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoBd8nXXV5DNmtqcPHkHKqP9snakt7FNg",
  authDomain: "myhealth-a10f5.firebaseapp.com",
  projectId: "myhealth-a10f5",
  storageBucket: "myhealth-a10f5.appspot.com",
  messagingSenderId: "1061819600186",
  appId: "1:1061819600186:web:ccaec4e3051c6a971f5403",
  measurementId: "G-TCDTGX9BX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)

export {auth}
export {db}
export {storage}