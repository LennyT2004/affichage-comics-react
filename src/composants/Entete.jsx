import './Entete.scss';

import Utilisateur from './Utilisateur';

import { useEffect, useState } from 'react';
import { observerEtatConnexion } from '../code/utilisateur-modele.js';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Entete() {

  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(() => observerEtatConnexion(setUtilisateur),[]);

  return (
    <div className="Entete">
      <h1>Les comics à Dom</h1>
      <Utilisateur util={utilisateur}/>
    </div>
  )
}

export default Entete;