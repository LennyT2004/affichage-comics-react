import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Initialize Firebase
export const appli = initializeApp(firebaseConfig);

// Initialiser Firestore
export const bd = getFirestore(appli);

// Initialiser Firebase Authentication
export const firebaseAuth = getAuth(appli);

// Initialiser l'authentification fédérée avec Google (GoogleAuthProvider)
export const googleProvider = new GoogleAuthProvider();

// Raccourcis pour les collections utilisées
export const collUtilisateurs = "jse-utilisateurs";
export const collBandes = "jse-bandes";
export const collComms = "commentaires";