// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_1K4SVCtc95rJdcLIU_C_WV-tMnuqBS0",
  authDomain: "login-system-c3083.firebaseapp.com",
  projectId: "login-system-c3083",
  storageBucket: "login-system-c3083.firebasestorage.app",
  messagingSenderId: "1086041969811",
  appId: "1:1086041969811:web:eaa331934af20424932966",
  measurementId: "G-Q1MYHT3VZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);