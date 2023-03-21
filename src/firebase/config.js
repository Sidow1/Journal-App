// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZG9SVNvdYvZSvSABju2vcYubli1C7r4I",
  authDomain: "react-cursos-df95a.firebaseapp.com",
  projectId: "react-cursos-df95a",
  storageBucket: "react-cursos-df95a.appspot.com",
  messagingSenderId: "879144113458",
  appId: "1:879144113458:web:ca0b32da2023e98ce4b32b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);