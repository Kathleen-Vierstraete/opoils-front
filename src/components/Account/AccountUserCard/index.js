import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles.scss';

const AccountUserCard = ({
  username,
  memberPicture,
  postalCode,
  slug,
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
        <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${memberPicture}`} alt="user-image" />
      </div>
      <div className="account-card-content">
        <ul className="account-infos">
          <li>Image</li>
          <li>{username}</li>
          <li>Description</li>
          <li>{postalCode}</li>
        </ul>
      </div>
      <div className="account-modification-link">
        <NavLink to={`/useredit/${slug}`}>
          Modifier la fiche
        </NavLink>
{/*         <NavLink to={`/${user.nickname}`}>
          Consulter
        </NavLink> */}
      </div>
    </div>
);


AccountUserCard.propTypes = {
  postalCode: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  memberPicture:PropTypes.string.isRequired,
};
export default AccountUserCard;
