import { auth } from "./firebase2.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

document.body.style.visibility = "hidden";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace("login.html");
    return;
  }

  document.body.style.visibility = "visible";

  const userName = document.querySelector("[data-user]");

  if (userName) {
    userName.textContent = user.displayName || "Student";
  }
});
