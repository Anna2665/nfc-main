// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCjnpNOZ4_79CiswFiwBk1ZYIc6-K59IJ8",
  authDomain: "nfc-cards-20f21.firebaseapp.com",
  projectId: "nfc-cards-20f21",
  storageBucket: "nfc-cards-20f21.firebasestorage.app",
  messagingSenderId: "227066343452",
  appId: "1:227066343452:web:14fdd204de371964786fd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//submit
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event){
  event.preventDefault()

 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;

 const adminEmail = "admin@asynctap.com";

 signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Logging in...");

      // Redirect based on role
      if (email.toLowerCase() === adminEmail.toLowerCase()) {
        window.location.href = "admin.html";
      } else {
        window.location.href = "Loggedin.html";
      }
    })
    .catch((error) => {
      alert(error.message);
    });

})


