// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {Firestore, getFirestore} from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOGah5AYNhrDeVZowMRuQzfnShdFhk1G4",
  authDomain: "banking-system-d3f1e.firebaseapp.com",
  projectId: "banking-system-d3f1e",
  storageBucket: "banking-system-d3f1e.appspot.com",
  messagingSenderId: "582844091972",
  appId: "1:582844091972:web:0dfb5d8ecf2db71b303611",
  measurementId: "G-EMC2152SBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);