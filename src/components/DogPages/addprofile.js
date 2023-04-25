import './styles.scss';
import profile from '../../assets/img/profile.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import InfosField from './InfosField';

function AddDog({isLogged}) {
  return (
    <><AppHeader isLogged={isLogged} />
      <div className="dog-profile">
        <div className="infos">
          <div className="dog-images">
            <form>
              <h1>Nom</h1>
              <input type="nom" placeholder="Nom" value="Snoopy" />
              <button type="submit">Ajouter</button>
            </form>
            <div className="main-image">
              <form>
                <img src={profile} alt="main-image" />
                <button type="submit">Enregistrer</button>
              </form>
            </div>
            <div className="other-images">
              <div className="images">
                <form>
                  <img src={profile} alt="second-image" />
                  <button type="submit">Enregistrer</button>
                </form>
              </div>
              <div className="images">
                <form>
                  <img src={profile} alt="third-image" />
                  <button type="submit">Enregistrer</button>
                </form>
              </div>
              <div className="images">
                <form>
                  <img src={profile} alt="fourth-image" />
                  <button type="submit">Enregistrer</button>
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
              Enregistrer les modifications
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
