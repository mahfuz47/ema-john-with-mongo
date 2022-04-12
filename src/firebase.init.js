// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE_wZjKHmaSHm-qgUvDKRA9PZIg5e7Wwg",
  authDomain: "ema-john-simple-bfe57.firebaseapp.com",
  projectId: "ema-john-simple-bfe57",
  storageBucket: "ema-john-simple-bfe57.appspot.com",
  messagingSenderId: "394839775849",
  appId: "1:394839775849:web:bf2156fd833bffbd88e0f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
