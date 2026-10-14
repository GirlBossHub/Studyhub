import { auth } from "./firebase2.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const loginMessage = document.getElementById("loginMessage");
const signupMessage = document.getElementById("signupMessage");

function showMessage(element, message) {
  if (element) {
    element.textContent = message;
  }
}

function friendlyError(error) {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "This email already has an account. Please log in.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/invalid-credential":
      return "Your email or password is incorrect.";
    case "auth/weak-password":
      return "Please choose a stronger password.";
    case "auth/network-request-failed":
      return "Network problem. Check your internet and try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}

// Create a new student account
if (signupForm) {
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    showMessage(signupMessage, "Creating your account...");

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(result.user, {
        displayName: name
      });

      window.location.replace("dashboard.html");
    } catch (error) {
      showMessage(signupMessage, friendlyError(error));
    }
  });
}

// Log in an existing student
if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    showMessage(loginMessage, "Signing you in...");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      window.location.replace("dashboard.html");
    } catch (error) {
      showMessage(loginMessage, friendlyError(error));
    }
  });
}

// Sign out when a logout button is clicked
document.querySelectorAll("[data-logout]").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await signOut(auth);
      window.location.replace("login.html");
    } catch (error) {
      alert("We couldn't sign you out. Please try again.");
    }
  });
});
