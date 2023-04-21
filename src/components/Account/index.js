import './styles.scss';
import PropTypes from 'prop-types';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import AccountDogCard from './AccountDogCard';
import profile from '../../assets/img/profile.png';
import user from '../../assets/img/user.jpg';

function Account({isLogged, favorites}) {
  return (
    <>
      <AppHeader isLogged={isLogged} />
      <div id="account-page">
        <div id="account-div">
          <div className="account-cards">
            <div className="account-card">
              <div className="account-card-header">
                <div className="account-title">
                  <h1 href="/vicky">Vicky</h1>
                </div>
                <div className="account-delete-button">
                  <button>x</button>
                </div>
              </div>
              <div className="account-card-image">
                <img src={user} alt="user-image" />
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
                <a href="/useredit">Modifier la fiche</a>
                <a href="/Vicky">Consulter</a>
              </div>
            </div>
            {favorites.map((favorite) => (
              <AccountDogCard key={favorite.id} {...favorite} />
            ))}
            <div className="account-card">
              <div className="account-card-header">
                <div className="account-title">
                  <h1>Créer une fiche chien</h1>
                </div>
                <div className="account-delete-button">
                </div>
              </div>
              <div className="account-card-image">
                <img src={profile} alt="main-image" />
              </div>
              <div className="account-modification-link">
                <a href="/ajouter-un-chien">+</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

Account.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
Account.defaultProps = {
  favorites: null,
};
export default Account;
