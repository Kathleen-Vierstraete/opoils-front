import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userimage from '../../../assets/img/user.jpg';
import '../styles.scss';

const AccountUserCard = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="account-card">
      <div className="account-card-header">
        <div className="account-title">
          <h1>{user.pseudo}</h1>
        </div>
        <div className="account-delete-button">
          <button>x</button>
        </div>
      </div>
      <div className="account-card-image">
        <img src={userimage} alt="user-image" />
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
        <NavLink to="/useredit">
          Modifier la fiche
        </NavLink>
{/*         <NavLink to={`/${user.nickname}`}>
          Consulter
        </NavLink> */}
      </div>
    </div>
  );
};

export default AccountUserCard;
