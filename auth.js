// auth.js
import { auth, db } from "./firebase-init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, setDoc, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Sign Up
export async function signup(email, password, name) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", userCred.user.uid), {
    name,
    email,
    createdAt: serverTimestamp()
  });
  return userCred.user;
}

// Login
export async function login(email, password) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  await addDoc(collection(db, "events"), {
    type: "login",
    uid: userCred.user.uid,
    at: serverTimestamp()
  });
  return userCred.user;
}

// Logout
export async function logout() {
  await signOut(auth);
}



