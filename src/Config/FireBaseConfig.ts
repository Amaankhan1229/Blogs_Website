// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBQsxdVc7EHxA1-Yebp4krXjQDGyOW_by0",
  authDomain: "blogwebsite-e67c7.firebaseapp.com",
  projectId: "blogwebsite-e67c7",
  storageBucket: "blogwebsite-e67c7.appspot.com",
  messagingSenderId: "130198883404",
  appId: "1:130198883404:web:7f4947535f813b7717f8e9",
  measurementId: "G-6CH8KTJ379"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);

export {createUserWithEmailAndPassword, signInWithEmailAndPassword,db, auth}