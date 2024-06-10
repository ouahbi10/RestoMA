// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6QLMM2W9iiire1nkLODbi_yVtkYRqpXE",
  authDomain: "foodmar-38aff.firebaseapp.com",
  projectId: "foodmar-38aff",
  storageBucket: "foodmar-38aff.appspot.com",
  messagingSenderId: "901354422263",
  appId: "1:901354422263:web:dc2f0d8c7e1672d47478f2",
};
// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const database = getFirestore(firebaseapp);

export { database };
