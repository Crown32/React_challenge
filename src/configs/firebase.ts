import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0ZMbd4PPdtHK7hDTJu6KT6RsPWxtia28",
  authDomain: "react-challenge-474a8.firebaseapp.com",
  projectId: "react-challenge-474a8",
  storageBucket: "react-challenge-474a8.appspot.com",
  messagingSenderId: "943617595420",
  appId: "1:943617595420:web:08465d96a591bb00f367d9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);