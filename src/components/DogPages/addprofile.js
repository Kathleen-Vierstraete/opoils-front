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
                <button type="submit">Ajouter la photo</button>
              </form>
            </div>
            <div className="other-images">
              <div className="images">
                <form>
                  <img src={profile} alt="second-image" />
                  <button type="submit">Ajouter la photo</button>
                </form>
              </div>
              <div className="images">
                <form>
                  <img src={profile} alt="third-image" />
                  <button type="submit">Ajouter la photo</button>
                </form>
              </div>
              <div className="images">
                <form>
                  <img src={profile} alt="fourth-image" />
                  <button type="submit">Ajouter la photo</button>
                </form>
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
          <form>
            <Hobbies
            />
            <button
              type="submit"
            >
              Ajouter les hobbies
            </button>
          </form>
          </div>
          <div className="dog-description">
            <form>
              <label>Présentation</label>
              <input type="description" value="Texte de description" />
              <button type="submit">Ajouter une description</button>
            </form>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default AddDog;
