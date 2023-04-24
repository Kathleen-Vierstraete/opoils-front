import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles.scss';

const AccountDogCard = ({
  name,
  slug,
}) => (
  <div className="account-card">
    <div className="account-card-header">
      <div className="account-title">
        <h1 href="">{name}</h1>
      </div>
      <div className="account-delete-button">
        <button>x</button>
      </div>
    </div>
    <div className="account-card-image">
      <img src="" alt="main-image" />
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
        to={`/dogedit/chien/${slug}`}
      >
        Modifier la fiche
      </NavLink>
      <NavLink
        to={`/chien/${slug}`}
      >
        Consulter
      </NavLink>
    </div>
  </div>
);

AccountDogCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default AccountDogCard;
