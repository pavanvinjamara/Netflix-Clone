
import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAQ5awMr8D2r9zxXJSElOYnaMIlhRqnuTI",
  authDomain: "react-netflix-clone-e0a39.firebaseapp.com",
  projectId: "react-netflix-clone-e0a39",
  storageBucket: "react-netflix-clone-e0a39.appspot.com",
  messagingSenderId: "1062976991751",
  appId: "1:1062976991751:web:592952799643cb192bb0a2",
  measurementId: "G-2RZ58179C4"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);