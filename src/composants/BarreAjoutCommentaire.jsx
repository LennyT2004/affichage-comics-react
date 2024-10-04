import './BarreAjoutCommentaire.scss';

import Aime from './Aime';
import { creerComm } from '../code/comm-modele';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

export default function BarreAjoutCommentaire({ comms, setComms, nbrAime }) {

    async function ajouterComm(evt) {
        evt.preventDefault(); // Ajoutez cette ligne pour empêcher le rechargement de la page

        const texte = evt.target.texteComm.value;

        if (texte.trim() !== '') {
            evt.target.reset();

            const nouveauComm = {
                texte: texte
            };

            const idComm = await creerComm(nouveauComm);
            nouveauComm.id = idComm;

            setComms([...comms, nouveauComm]);
        }
    }

    return (
        <div className="BarreAjoutCommentaire">
            <Aime nbrAime={nbrAime}/>
            <form onSubmit={evt => ajouterComm(evt)}>
                <input
                    type="text"
                    placeholder='Ajouter un commentaire'
                    name='texteComm'
                    className='barreAjoutCommentaire'
                    autoComplete='off'
                    autoFocus={true}
                />
                <Button variant='contained' type='submit' className='btn-ajout-comm'>
                    <SendIcon style={{ fontSize: 24 }} />
                </Button>
            </form>
        </div>
    )
}