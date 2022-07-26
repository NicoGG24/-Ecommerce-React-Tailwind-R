// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUVOvRG9vGv1LyRXYiLmS35Me4Lk-fF5s",
  authDomain: "reactprojectr.firebaseapp.com",
  projectId: "reactprojectr",
  storageBucket: "reactprojectr.appspot.com",
  messagingSenderId: "596981042824",
  appId: "1:596981042824:web:98a848c547b105c580d93d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)