import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { firebaseAuth, googleProvider, bd, collUtilisateurs } from "./init";
import { doc, setDoc } from "firebase/firestore";

/**
 * Permet à un utilisateur de se connecter en utilisant l'authentification
 * fédérée Google.
 */
export function connexion() {
  return signInWithPopup(firebaseAuth, googleProvider);
}

export function deconnexion() {
  signOut(firebaseAuth);
}


/**
 * 
 * @param {function} mutateurUtil 
 * @return void.
 */

export function observerEtatConnexion(mutateurUtil) {
  onAuthStateChanged(firebaseAuth, u => {
    if(u) {
      setDoc(doc(bd, collUtilisateurs, u.uid),
      {
        nomComplet: u.displayName,
        avatar: u.photoURL,
        dcc: (new Date()).getTime(),
        courriel: u.email
      },
      {merge: true}
      )
    }
    mutateurUtil(u)
  })
}