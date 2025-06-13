// main.js
import { database } from "./firebase.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      await set(ref(database, 'users/' + username), {
        name: name,
        surname: surname,
        phone: phone,
        password: password
      });
      
      alert("Registration successful!");
      form.reset();
      window.location.href = "index.html"; // Redirect after successful registration
    } catch (error) {
      console.error("Error writing to database:", error);
      alert("Something went wrong. Try again.");
    }
  });
});