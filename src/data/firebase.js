// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAr86SHeSFcCwGIWHYP8TJiQ9AUyNmQcvQ",
  authDomain: "todo-will-ad5ac.firebaseapp.com",
  projectId: "todo-will-ad5ac",
  storageBucket: "todo-will-ad5ac.firebasestorage.app",
  messagingSenderId: "496742946644",
  appId: "1:496742946644:web:1b2adf4f07b5f1d856dac1",
  measurementId: "G-X0DSS7FE6Y"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
