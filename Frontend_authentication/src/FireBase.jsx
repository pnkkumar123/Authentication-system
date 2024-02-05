// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_Api_Key,
  authDomain: "authentication-75a33.firebaseapp.com",
  projectId: "authentication-75a33",
  storageBucket: "authentication-75a33.appspot.com",
  messagingSenderId: "480256240029",
  appId: "1:480256240029:web:1070fd2a808a1d65c6a774",
  measurementId: "G-NPN1EZD9RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;