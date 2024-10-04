import './Commentaire.scss';
import Vote from './Vote';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Commentaire({utilComm, texteComm, votesPositifs, votesNegatifs}) {

  return (
    <div className="Commentaire">
      <div className='comm'>
        <div>
          <div className='ident-util'>
            <AccountCircleIcon style={{ fontSize: 40 }} />
            <h3>{utilComm}</h3>
          </div>
          {/* <p>{texte}</p> */}
          <p>{texteComm}</p>
        </div>
        <Vote votesPositifs={votesPositifs} votesNegatifs={votesNegatifs} />
      </div>
    </div>
  )
}