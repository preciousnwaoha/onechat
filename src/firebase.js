// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGRFmznWPZS8o7TI53o0KBXVDTGqX1HqU",
  authDomain: "onechat-c4d9f.firebaseapp.com",
  projectId: "onechat-c4d9f",
  storageBucket: "onechat-c4d9f.appspot.com",
  messagingSenderId: "83080347471",
  appId: "1:83080347471:web:0196e60187022c2de44f3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);