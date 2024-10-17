// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5yWnkvDzI7inmiEs2vK3kIuxas2kddS8",
    authDomain: "bnb24-b0778.firebaseapp.com",
    projectId: "bnb24-b0778",
    storageBucket: "bnb24-b0778.appspot.com",
    messagingSenderId: "250384744526",
    appId: "1:250384744526:web:a533c4da4dca42e766431f",
    measurementId: "G-S8QJSREVEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const contact = document.getElementById('contact').value;




alert('Sign up successful!');

const submit = document.getElementById('submit').value;
submit.addEventListener("click", function (event) {

    event.preventDefault()
    alert(5)
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:1606718414.
    
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    const auth = getAuth();
createUserWithEmailAndPassword(auth, name, dob, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });

});

