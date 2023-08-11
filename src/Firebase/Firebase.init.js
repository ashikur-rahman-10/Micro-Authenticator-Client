// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTPO3S71FHcZNjbrpQWlpDTRIkxOvgbZQ",
    authDomain: "micro-authenticator.firebaseapp.com",
    projectId: "micro-authenticator",
    storageBucket: "micro-authenticator.appspot.com",
    messagingSenderId: "6019399352",
    appId: "1:6019399352:web:26fd74fe8d6b69f7d97e4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;