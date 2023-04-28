import './styles.scss';
import profile from '../../assets/img/profile.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import InfosField from './InfosField/index';
import Hobbies from './InfosField/hobbies';

function AddDog({isLogged}) {
  return (
    <><AppHeader isLogged={isLogged} />
      <div className="dog-profile">
        <div className="infos">
          <div className="dog-images">
            <div className="main-image">
              <form>
                <img src={profile} alt="main-image" />
              </form>
            </div>
            <div className="other-images">
              <div className="images">
              </div>
              <div className="images">
              </div>
              <div className="images">
              </div>
            </div>
          </div>
          <div className="dog-infos">
            <form>
              <InfosField
              />
              <button
                type="submit"
              >
                Ajouter les informations
              </button>
            </form>
          </div>
          <div className="dog-description">
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default AddDog;
