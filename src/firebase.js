// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJqKqvt_5mskmMkzc7Bs9yRDqJStgImI8",
  authDomain: "todo-app-yt-cdf25.firebaseapp.com",
  projectId: "todo-app-yt-cdf25",
  storageBucket: "todo-app-yt-cdf25.appspot.com",
  messagingSenderId: "434895226328",
  appId: "1:434895226328:web:1f9deea23db2b936035ead"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db= getFirestore(app)