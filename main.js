// main.js

import { database } from "./firebase.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting traditionally

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Save to Firebase
    set(ref(database, 'users/' + username), {
      name: name,
      surname: surname,
      phone: phone,
      password: password
    })
    .then(() => {
      alert("Registration successful!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error writing to database:", error);
      alert("Something went wrong. Try again.");
    });
  });
});
