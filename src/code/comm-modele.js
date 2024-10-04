import { doc, collection, setDoc, getDocs, query } from "firebase/firestore";
import { bd, collComms, collBandes } from "./init";

// Ajouter un commentaire
export async function creerComm(infoComm) {
    const refComm = doc(collection(bd, collComms));
    await setDoc(refComm, infoComm);
    return refComm.id;
}

// Lire tous les commentaires
export async function lireComms(idBande) {
    const lesComms = await getDocs(collection(bd, collBandes, idBande, collComms));
    return lesComms.docs;
}