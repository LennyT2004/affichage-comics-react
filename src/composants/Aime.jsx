import './Aime.scss';
import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Aime({ nbrAime }) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="Aime">
            <IconButton onClick={() => setIsClicked(!isClicked)}>
                <FavoriteIcon className={isClicked ? 'clicked' : ''} style={{ fontSize: 40 }} />
            </IconButton>
            <p>{nbrAime}</p>
        </div>
    )
}