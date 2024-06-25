// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQXgXekbbT48fTo8zzFTkfXGHKPnUxJ5I",
  authDomain: "netflixgpt-deade.firebaseapp.com",
  projectId: "netflixgpt-deade",
  storageBucket: "netflixgpt-deade.appspot.com",
  messagingSenderId: "607683448215",
  appId: "1:607683448215:web:89272f700e15af102ec8d2",
  measurementId: "G-LJTC1L93B5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const database = getFirestore(app);
