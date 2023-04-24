import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import userimage from '../../../assets/img/user.jpg';
import '../styles.scss';

const AccountUserCard = ({
  username,
  picture,
}) => (
    <div className="account-card">
      <div className="account-card-header">
        <div className="account-title">
          <h1>{username}</h1>
        </div>
        <div className="account-delete-button">
          <button>x</button>
        </div>
      </div>
      <div className="account-card-image">
        <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${picture}`} alt="user-image" />
      </div>
      <div className="account-card-content">
        <ul className="account-infos">
          <li>Image</li>
          <li>Nom</li>
          <li>Description</li>
          <li>Département</li>
        </ul>
      </div>
      <div className="account-modification-link">
        <NavLink to={`/useredit/${username}`}>
          Modifier la fiche
        </NavLink>
{/*         <NavLink to={`/${user.nickname}`}>
          Consulter
        </NavLink> */}
      </div>
    </div>
);


AccountUserCard.propTypes = {
  username: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
};
export default AccountUserCard;
