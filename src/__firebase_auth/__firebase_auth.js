// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuHDiyYz6zsLvF-O-R8xIJlocWGeR9aIM",
  authDomain: "project-9caf351a-cd23-4065-a01.firebaseapp.com",
  projectId: "project-9caf351a-cd23-4065-a01",
  storageBucket: "project-9caf351a-cd23-4065-a01.firebasestorage.app",
  messagingSenderId: "901676199187",
  appId: "1:901676199187:web:ce8cc9d59239670b89bee6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;