<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBXVAmLb-ZS4fF4dEixgTgSxmorBjqbHpA",
    authDomain: "my-website-hani.firebaseapp.com",
    projectId: "my-website-hani",
    storageBucket: "my-website-hani.firebasestorage.app",
    messagingSenderId: "1025517016986",
    appId: "1:1025517016986:web:43eef2cc93edc060b88c23",
    measurementId: "G-CDHHGD6CP1"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>