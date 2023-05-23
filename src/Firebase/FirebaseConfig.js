// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs4faXbEu0PVNIaP04qUd34O0xttST8nE",
  authDomain: "assignment-10-chef-hunter-auth.firebaseapp.com",
  projectId: "assignment-10-chef-hunter-auth",
  storageBucket: "assignment-10-chef-hunter-auth.appspot.com",
  messagingSenderId: "113343575559",
  appId: "1:113343575559:web:1638f6c697cdaeb6181ca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;