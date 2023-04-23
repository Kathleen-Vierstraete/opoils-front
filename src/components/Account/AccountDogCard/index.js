import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles.scss';

const AccountDogCard = ({
  thumbnail,
  title,
  slug,
  id,
}) => (
  <div className="account-card">
    <div className="account-card-header">
      <div className="account-title">
        <h1 href="/vicky">{title}</h1>
      </div>
      <div className="account-delete-button">
        <button>x</button>
      </div>
    </div>
    <div className="account-card-image">
      <img src={thumbnail} alt="main-image" />
    </div>
    <div className="account-card-content">
      <ul className="account-infos">
        <li>Images</li>
        <li>Nom</li>
        <li>Age</li>
        <li>Race</li>
        <li>Hobbies</li>
        <li>Tempérament</li>
        <li>Description</li>
      </ul>
    </div>
    <div className="account-modification-link">
      <NavLink
        to={`/dogedit/${slug}`}
      >
        Modifier la fiche
      </NavLink>
      <NavLink
        to={`/${slug}`}
      >
        Consulter
      </NavLink>
    </div>
  </div>
);

AccountDogCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default AccountDogCard;
