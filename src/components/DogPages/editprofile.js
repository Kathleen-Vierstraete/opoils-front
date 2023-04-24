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
            <h1>Nom</h1>
            <form>
              <input type="nom" placeholder="Nom" value={`${dog.name}`} />
            </form>
            <div className="main-image">
              <img src="" alt="main-image" />
            </div>
            <div className="other-images">
              <div className="images">
                <img src={secondimage} alt="second-image" />
              </div>
              <div className="images">
                <img src={thirdimage} alt="third-image" />
              </div>
              <div className="images">
                <img src={fourthimage} alt="fourth-image" />
              </div>
            </div>
          </div>
          <div className="dog-infos">
            <form>
              <ul>
                <li>
                  <label>Taille</label>
                </li>
                <select name="Taille">
                  <option value="">Choisir un gabarit</option>
                    <option value="1">Petit</option>
                    <option value="2">Moyen</option>
                    <option value="2">Grand</option>
                </select>
                <li>
                  <label>Tempérament</label>
                </li>
                <select name="Caractère">
                  <option value="">Choisir un caractère</option>
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
              <button type="submit">Enregistrer les modifications</button>
            </form>
          </div>
          <div className="dog-description">
            <form>
              <label>Présentation</label>
              <input 
                type="description" 
                value={`${dog.presentation}`}
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
