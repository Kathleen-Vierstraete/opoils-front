import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles.scss';

const AccountDogCard = ({
  name,
  age,
  race,
  main_picture,
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
      <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${main_picture}`} alt="main-image" />
    </div>
    <div className="account-card-content">
      <ul className="account-infos">
        <li>Images</li>
        <li>{name}</li>
        <li>{age} ans</li>
        <li>{race}</li>
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
  race: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  main_picture: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
};

export default AccountDogCard;
