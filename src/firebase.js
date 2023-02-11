// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOzt8nmPQJgNY7FrCHcLDYQybYWW72QN8",
  authDomain: "todofb-32f37.firebaseapp.com",
  projectId: "todofb-32f37",
  storageBucket: "todofb-32f37.appspot.com",
  messagingSenderId: "470465960931",
  appId: "1:470465960931:web:cde61eb177c27d12fb9ed6",
  measurementId: "G-FG7LKX8818",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
