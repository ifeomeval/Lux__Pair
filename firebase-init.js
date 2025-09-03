// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxPyOWnSTCq0TOJosdwz7xC4htioHI7pI",
  authDomain: "luxpair.firebaseapp.com",
  projectId: "luxpair",
  storageBucket: "luxpair.firebasestorage.app",
  messagingSenderId: "112896721008",
  appId: "1:112896721008:web:85594c09560538cc7c34b5",
  measurementId: "G-4T4WJ677S4"
};

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);

// Export Firebase services so other JS files can use them
export const auth = getAuth(app);
export const db = getFirestore(app);


