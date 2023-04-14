import './styles.scss';
import firstimage from '../../assets/img/first-image.png';
import userimage from '../../assets/img/user.jpg';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

function UserEdit() {
  return (
    <><AppHeader />
      <div className="user-profile">
        <div className="infos">
          <div className="user-part">
            <div className="user-images">
              <div className="main-image">
                <form>
                  <img src={userimage} alt="main-image" />
                  <button type="submit">Modifier la photo</button>
                </form>
              </div>
            </div>
            <div className="user-description">
              <form>
                <label>Vicky</label>
                <input type="description" placeholder="Texte de description" />
                <button type="submit">Modifier la description</button>
                  <label>Départements</label>
                  <select name="location">
                    <option value="">--Choisir un département--</option>
                      <optgroup label="Hauts-de-France">
                        <option value="1">Aisne</option>
                        <option value="2">Nord</option>
                        <option value="3">Oise</option>
                        <option value="4">Pas-de-Calais</option>
                        <option value="5">Somme</option>
                      </optgroup>
                      <optgroup label="Centre-Val de Loire">
                        <option value="6">Cher</option>
                        <option value="7">Indre</option>
                        <option value="8">Indre-et-Loire</option>
                        <option value="8">Loir-et-Cher</option>
                        <option value="8">Loiret</option>
                      </optgroup>
                  </select>
              </form>
            </div>
          </div>
          <div className="dog-part">
            <div className="dog-images">
              <div className="main-image">
                <img src={firstimage} alt="main-image" />
              </div>
            </div>
            <div className="dog-infos">
              <div className="dog-description">
              <h1><a href="/snoopy">Snoopy &#8592; </a></h1>
                <p>Phasellus vitae elementum nulla, vel tincidunt lectus. Phasellus cursus id mauris eget vulputate. Suspendisse efficitur tellus vel leo aliquam dapibus id sed erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam eros, porta sed dui eget, porta aliquet sapien. Aliquam sollicitudin metus nec consequat fermentum. Phasellus vitae elementum nulla, vel tincidunt lectus. Phasellus cursus id mauris eget vulputate. Suspendisse efficitur tellus vel leo aliquam dapibus id sed erat. 
                </p>
              </div>
                <ul>
                  <li>
                    <h2>Age</h2>
                    <p>2 ans</p>
                  </li>
                  <li>
                    <h2>Race</h2>
                    <p>West Highland white terrier</p>
                  </li>
                  <li>
                    <h2>Hobbies</h2>
                    <ul className="hobbies">
                      <li>Voler des chaussettes</li>
                      <li>Aboyer sur le facteur</li>
                      <li>Courir dans tous les sens</li>
                      <li>Se déguiser en Idefix</li>
                    </ul>
                  </li>
                  <li><h2>Département</h2></li>
                  <p>Loiret</p>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default UserEdit;
