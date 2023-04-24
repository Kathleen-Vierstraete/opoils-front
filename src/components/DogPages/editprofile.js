import './styles.scss';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findDog } from 'src/selectors/dogs';
import secondimage from '../../assets/img/second-image.png';
import thirdimage from '../../assets/img/third-image.png';
import fourthimage from '../../assets/img/fourth-image.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

const DogEdit = ({
  isLogged,
}) => {
  const { slug } = useParams();
  const dog = useSelector((state) => findDog(state.profiles.dogs, slug));

  return (
    <><AppHeader isLogged={isLogged} />
      <div className="dog-profile">
        <div className="infos">
          <div className="dog-images">
            <form>
              <label>Nom</label>
              <input type="nom" placeholder="Nom" required />
              <button className="button-name"type="submit">Enregistrer le nom</button>
            </form>           
            <div className="main-image">
              <form>
                <img src="" alt="main-image" />
                <button type="submit">Enregistrer</button>
              </form>
            </div>
            <div className="other-images">
              <div className="images">
              <form>
                <img src={secondimage} alt="second-image" />
                <button type="submit">Enregistrer le nom</button>
              </form>
              </div>
              <div className="images">
                <form>
                  <img src={thirdimage} alt="third-image" />
                  <button type="submit">Enregistrer</button>
                </form>
              </div>
              <div className="images">
                <form>
                  <img src={fourthimage} alt="fourth-image" />
                  <button type="submit">Enregistrer</button>
                </form>
              </div>
            </div>
          </div>
          <div className="dog-infos">
              <ul>
                <li>
                  <form>
                    <label>Taille</label>
                    <select name="Taille" required>
                      <option value="">Choisir un gabarit</option>
                        <option value="1">Petit</option>
                        <option value="2">Moyen</option>
                        <option value="2">Grand</option>
                    </select>
                    <button type="submit">Enregistrer les modifications</button>
                  </form>
                </li>
                <li>
                  <label>Tempérament</label>
                </li>
                <li>
                  <form>
                    <select name="Caractère" required>
                      <option value="">Choisir un caractère</option>
                          <option value="1">Calme</option>
                          <option value="2">Adaptable</option>
                          <option value="2">Energique</option>
                    </select>
                    <button type="submit">Enregistrer les modifications</button>
                  </form>
                </li>
                <li>
                  <form>
                    <label>Age</label>
                    <input type="age" placeholder="Age" required/>
                    <button type="submit">Enregistrer les modifications</button>
                  </form>
                </li>
                <li>
                  <form>
                    <label>Race</label>
                    <input type="race" placeholder="Race" required />
                    <button type="submit">Enregistrer les modifications</button>
                  </form>
                </li>
                <li>
                  <form>
                    <label>Hobbies</label>
                    <ul className="hobbies">
                      <li><input type="Hobbie1" placeholder="Hobbie 1" required/></li>
                      <li><input type="Hobbie2" placeholder="Hobbie 2" required/></li>
                      <li><input type="Hobbie3" placeholder="Hobbie 3" required/></li>
                      <li><input type="Hobbie4" placeholder="Hobbie 4" required/></li>
                      <button type="submit">Enregistrer les modifications</button>
                    </ul>
                  </form>
                </li>
              </ul>
          </div>
          <div className="dog-description">
            <form>
              <label>Présentation</label>
              <input 
                type="description" 
                placeholder="Présentation"
                required
              />
              <button type="submit">Modifier la description</button>
            </form>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
};

DogEdit.propTypes = {
  isLogged: PropTypes.bool,
};
DogEdit.defaultProps = {
  isLogged: false,
};
export default DogEdit;
