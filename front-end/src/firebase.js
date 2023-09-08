import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIb5BPHjQqZIStsQOXxdgEOzaijhz70tM",
  authDomain: "feb2023-691fb.firebaseapp.com",
  projectId: "feb2023-691fb",
  storageBucket: "feb2023-691fb.appspot.com",
  messagingSenderId: "473297121492",
  appId: "1:473297121492:web:8e9aa897dc7cd5dd830b41",
  measurementId: "G-9HQTLXLSRM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
