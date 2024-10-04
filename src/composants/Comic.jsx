// Comic.jsx
import './Comic.scss';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Comic({ comics, currentIndex, setCurrentIndex, dpub }) {
  const gererProchain = () => {
    if (currentIndex < comics.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const gererPrecedent = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const gererPremier = () => {
    setCurrentIndex(0);
  };

  const gererDernier = () => {
    if (comics.length > 0) {
      setCurrentIndex(comics.length - 1);
    }
  };

  const formatDate = (date) => {
    if (date) {
      const year = date.substring(0, 4);
      const month = date.substring(4, 6);
      const day = date.substring(6, 8);
      return `${year}-${month}-${day}`;
    }
    return null;
  };

  return (
    <div className="Comic">
      <div className='section-bande'>
        <div className='cont-central'>
          <IconButton className='bouton-fleche' onClick={gererPrecedent}>
            <KeyboardArrowLeftIcon style={{ fontSize: 48 }} />
          </IconButton>
          {comics.length > 0 && <img src={comics[currentIndex].url} alt="comic" />}
          <IconButton className='bouton-fleche' onClick={gererProchain}>
            <KeyboardArrowRightIcon style={{ fontSize: 48 }} />
          </IconButton>
        </div>
        <p>Publié le {formatDate(dpub)}</p>
        <div className='fleche-slide-complet'>
          <IconButton onClick={gererPremier}>
            <KeyboardDoubleArrowLeftIcon style={{ fontSize: 48 }} />
          </IconButton>
          <IconButton onClick={gererDernier}>
            <KeyboardDoubleArrowRightIcon style={{ fontSize: 48 }} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Comic;