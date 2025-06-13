// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXVAmLb-ZS4fF4dEixgTgSxmorBjqbHpA",
  authDomain: "my-website-hani.firebaseapp.com",
  databaseURL: "https://my-website-hani-default-rtdb.firebaseio.com",
  projectId: "my-website-hani",
  storageBucket: "my-website-hani.firebasestorage.app",
  messagingSenderId: "1025517016986",
  appId: "1:1025517016986:web:43eef2cc93edc060b88c23",
  measurementId: "G-CDHHGD6CP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { database };
