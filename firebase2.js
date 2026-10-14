import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

// Replace these example values with the configuration
// from YOUR StudyHub web app in Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyDJAfEPIsf0zz-QEWRElGwuIjYjf8VEHq0",
  authDomain: "studyhub-d00cd.firebaseapp.com",
  projectId: "studyhub-d00cd",
  storageBucket: "studyhub-d00cd.firebasestorage.app",
  messagingSenderId: "51618796922",
  appId: "1:51618796922:web:09b30d6a6b09f1cf2ef2c3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
