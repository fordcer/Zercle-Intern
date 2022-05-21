// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLF4VHdPcFbw9KJ1Z0u0oOjjAtcaT6Ni8",
  authDomain: "zercle-incubation-progra-c0d67.firebaseapp.com",
  projectId: "zercle-incubation-progra-c0d67",
  storageBucket: "zercle-incubation-progra-c0d67.appspot.com",
  messagingSenderId: "575345737187",
  appId: "1:575345737187:web:f205e6fa0e7916d019f4d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);