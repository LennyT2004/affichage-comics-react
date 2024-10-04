import './Vote.scss';

import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function Vote({votesPositifs, votesNegatifs}) {
    const [isThumbsUpClicked, setIsThumbsUpClicked] = useState(false);
    const [isThumbsDownClicked, setIsThumbsDownClicked] = useState(false);

    return (
        <div className="Vote">
            <IconButton onClick={() => {
                if (isThumbsUpClicked) {
                    setIsThumbsUpClicked(false);
                } else {
                    setIsThumbsUpClicked(true);
                    setIsThumbsDownClicked(false);
                }
            }}>
                <ThumbUpIcon className={isThumbsUpClicked ? 'clicked-up' : ''} />
                <span>{votesPositifs}</span>
            </IconButton>
            <IconButton onClick={() => {
                if (isThumbsDownClicked) {
                    setIsThumbsDownClicked(false);
                } else {
                    setIsThumbsDownClicked(true);
                    setIsThumbsUpClicked(false);
                }
            }}>
                <ThumbDownIcon className={isThumbsDownClicked ? 'clicked-down' : ''} />
                <span>{votesNegatifs}</span>
            </IconButton>
        </div>
    )
}

export default Vote;