// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgTXpsCtyPI6yR_kSLwQpfZsFZiN6wYbw",
  authDomain: "genious-car-services-react.firebaseapp.com",
  projectId: "genious-car-services-react",
  storageBucket: "genious-car-services-react.appspot.com",
  messagingSenderId: "898604983971",
  appId: "1:898604983971:web:d36ce97c357b4dc3810116",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
