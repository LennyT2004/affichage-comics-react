import './Appli.scss';

import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { bd } from '../code/init';
import { ToastContainer } from 'react-toastify';

import Entete from './Entete';
import Comic from './Comic';
import ListeCommentaire from './ListeCommentaire';

export default function Appli() {
  const [comics, setComics] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(bd, 'jse-bandes'), orderBy('dpub', 'asc'));
      const querySnapshot = await getDocs(q);
      setComics(querySnapshot.docs.map(doc => {
        const data = doc.data();
        const nbrAime = data.aime ? data.aime.length : 0;
        return { id: doc.id, nbrAime, ...data };
      }));
    };
    fetchData();
  }, []);

  return (
    <div className="Appli">
      <Entete />
      <div className='post'>
        <Comic comics={comics} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} dpub={comics.length > 0 ? comics[currentIndex].dpub : null} />
        <ListeCommentaire comicId={comics.length > 0 ? comics[currentIndex].id : null} nbrAime={comics.length > 0 ? comics[currentIndex].nbrAime : 0} />
      </div>
      <ToastContainer />
    </div>
  )
}