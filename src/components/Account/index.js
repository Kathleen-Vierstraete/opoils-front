import './styles.scss';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import firstimage from '../../assets/img/first-image.png';
import profile from '../../assets/img/profile.png';
import user from '../../assets/img/user.jpg';

function Account() {
  return (
    <><AppHeader />
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
            <div className="account-card">
              <div className="account-card-header">
                <div className="account-title">
                  <h1 href="/vicky">Snoopy</h1>
                </div>
                  <div className="account-delete-button">
                    <button>x</button>
                  </div>
              </div>
              <div className="account-card-image">
                <img src={firstimage} alt="main-image" />
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
                <a href="/dogedit">Modifier la fiche</a>
                <a href="/Snoopy">Consulter</a>
              </div>
            </div>
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

export default Account;
