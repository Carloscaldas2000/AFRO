// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWvPBVWhFEXJxMeFK19DlEptt3FV5mpzo",
  authDomain: "afro-d0ef6.firebaseapp.com",
  projectId: "afro-d0ef6",
  storageBucket: "afro-d0ef6.appspot.com",
  messagingSenderId: "784806937516",
  appId: "1:784806937516:web:361307b1121a15ac177009",
  measurementId: "G-VJ84D0X5L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Registration logic
const registerButton = document.getElementById("register");
registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-register").value;
  const password = document.getElementById("password-register").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registrado con éxito");
      console.log(userCredential);
    })
    .catch((error) => {
      alert(`Error de registro: ${error.message}`);
      console.log(error);
    });
});

// Login logic
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Obtener el nombre del usuario (en este caso, usaremos el email como nombre)
      const userName = userCredential.user.email;

      // Almacenar el nombre del usuario en localStorage para usarlo en la página de bienvenida
      localStorage.setItem("userName", userName);

      // Redirigir a la página de bienvenida
      window.location.href = "bienvenida.html";
    })
    .catch((error) => {
      alert(`Error al iniciar sesión: ${error.message}`);
      console.log(error);
    });
});
