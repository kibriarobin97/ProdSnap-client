// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEmUbTtakEM9knEEv3Z2Ex9drsCx6tE94",
  authDomain: "prodsnap-21fc9.firebaseapp.com",
  projectId: "prodsnap-21fc9",
  storageBucket: "prodsnap-21fc9.appspot.com",
  messagingSenderId: "733798831658",
  appId: "1:733798831658:web:de64a5a0f633a8b74b9553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;