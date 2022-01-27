import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebase = initializeApp({
  apiKey: "AIzaSyBdzSqp9V7Vn0FWutwfE8r-8Uph_9KBtoo",
  authDomain: "haik-e557d.firebaseapp.com",
  projectId: "haik-e557d",
  storageBucket: "haik-e557d.appspot.com",
  messagingSenderId: "902266079428",
  appId: "1:902266079428:web:3a5c501996582c1fc56191",
  measurementId: "G-K7GCH6CX2E",
});

export const auth = getAuth(firebase);

export const db = getFirestore(firebase);