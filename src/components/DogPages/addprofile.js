import './styles.scss';
import profile from '../../assets/img/profile.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

function AddDog({isLogged}) {
  return (
    <><AppHeader isLogged={isLogged} />
      <div className="dog-profile">
        <div className="infos">
          <div className="dog-images">
            <h1>Nom</h1>
            <form className="name-form">
              <input type="nom" placeholder="Nom" value="Snoopy" />
              <button type="submit">Ajouter</button>
            </form>
            <div className="main-image">
              <img src={profile} alt="main-image" />
            </div>
            <div className="other-images">
              <img src={profile} alt="second-image" />
              <img src={profile} alt="third-image" />
              <img src={profile} alt="fourth-image" />
            </div>
            <button type="submit">Ajouter les photos</button>
          </div>
          <div className="dog-infos">
            <form>
              <ul>
                <li>
                  <label>Taille</label>
                </li>
                <select name="Taille">
                  <option value="">--Choisir un gabarit--</option>
                  <option value="1">Petit</option>
                  <option value="2">Moyen</option>
                  <option value="2">Grand</option>
                </select>
                <li>
                  <label>Tempérament</label>
                </li>
                <select name="Taille">
                  <option value="">--Choisir un caractère--</option>
                  <option value="1">Calme</option>
                  <option value="2">Adaptable</option>
                  <option value="2">Energique</option>
                </select>
                <li>
                  <label>Age</label>
                </li>
                <input type="age" placeholder="Age" value="2" />
                <li>
                  <label>Race</label>
                </li>
                <input type="race" placeholder="Race" value="West Highland white terrier" />
                <li>
                  <label>Hobbies</label>
                  <ul className="hobbies">
                    <li><input type="Obi-wan" placeholder="Obi-wan" value="Obi-wan" /></li>
                    <li><input type="Hobbie2" placeholder="Hobbie2" value="Hobbie2" /></li>
                    <li><input type="Hobbie3" placeholder="Hobbie3" value="Hobbie3" /></li>
                    <li><input type="Hobbie4" placeholder="Hobbie4" value="Hobbie4" /></li>
                  </ul>
                </li>
              </ul>
              <button type="submit">Ajouter les informations</button>
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
