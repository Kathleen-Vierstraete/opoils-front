import './styles.scss';
import PropTypes from 'prop-types';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import AccountDogCard from './AccountDogCard';
import AccountUserCard from './AccountUserCard';
import profile from '../../assets/img/profile.png';

function Account({ isLogged, accountDogs,accountMember, id }) {
  return (
    <>
      <AppHeader isLogged={isLogged} />
      <div id="account-page">
        <div id="account-div">
          <div className="account-cards">
            {accountMember.map((member) => (
              <AccountUserCard key={member.id} {...member} />
            ))}
            {accountDogs.map((accountDog) => (
              <AccountDogCard key={accountDog.id} {...accountDog} />
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
  accountDogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};
Account.defaultProps = {
  accountDogs: null,
};
export default Account;
