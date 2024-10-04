import { useState } from 'react';
import './Utilisateur.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Avatar  from '@mui/material/Avatar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connexion, deconnexion } from '../code/utilisateur-modele';

export default function Utilisateur({util}) {

  const gererConnexion = async () => {
    try {
      await connexion();
      toast.success('Connecté avec succès !');
    } catch (erreur) {
      console.error(erreur);
      toast.error('La connexion a échoué.');
    }
  }

  const gererDeconnexion = () => {
    deconnexion();
    toast.info('Déconnecté avec succès !');
  }

  return (
    <div className="Utilisateur">
      {util ? (
        <IconButton onClick={gererDeconnexion}>
          <LogoutIcon/>
      </IconButton>
      ) : (
        <IconButton onClick={gererConnexion}>
          <AccountCircleIcon style={{ fontSize: 40 }} />
        </IconButton>
      )}
      {util && (
        <div className='info-util'>
            <p>{util.displayName}</p>
            <Avatar
              className='avatar'
              alt={util.displayName}
              src={util.photoURL}
            />
        </div>
      )}
    </div>
  )
}