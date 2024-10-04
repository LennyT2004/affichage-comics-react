import './ListeCommentaire.scss';

import { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { lireComms } from '../code/comm-modele';

import Commentaire from './Commentaire';
import BarreAjoutCommentaire from './BarreAjoutCommentaire';

function ListeCommentaire({ comicId, nbrAime }) {
  const [comms, setComms] = useState([]);

  useEffect(() => {
    if (comicId) {
      afficherComms();
    }
  }, [comicId]);

  async function afficherComms() {
    const commsAffiches = await lireComms(comicId);

    setComms(commsAffiches.map(
      commAffiche => ({ id: commAffiche.id, ...commAffiche.data() })
    ))
  }

  return (
    <div className="ListeCommentaire">
      <div className="scrollableArea">
        <ul>
          {comms.map(comment => {
            if (comment.votes) {
              const votesPositifs = Object.values(comment.votes).filter(vote => vote === 1).length;
              const votesNegatifs = Object.values(comment.votes).filter(vote => vote === -1).length;

              return (
                <li key={comment.id}>
                  <Commentaire
                    utilComm = {comment.nomUtil}
                    texteComm = {comment.texte}
                    votesPositifs={votesPositifs}
                    votesNegatifs={votesNegatifs}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
      <BarreAjoutCommentaire comms={comms} setComms={setComms} nbrAime={nbrAime} />
    </div>
  )
}

export default ListeCommentaire;