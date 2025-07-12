// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3t85HI4Bo1qO5zgSvwq2aHfPIDUWFRMQ",
  authDomain: "clone-132f6.firebaseapp.com",
  projectId: "clone-132f6",
  storageBucket: "clone-132f6.firebasestorage.app",
  messagingSenderId: "474548393499",
  appId: "1:474548393499:web:c7a6431c141922bbcc8abe",
};

// Initialize Firebas
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = app.firestore();
