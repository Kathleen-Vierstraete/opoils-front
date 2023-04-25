import './styles.scss';
import PropTypes from 'prop-types';
import secondimage from '../../assets/img/second-image.png';
import thirdimage from '../../assets/img/third-image.png';
import fourthimage from '../../assets/img/fourth-image.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import InfosField from './InfosField';

const DogEdit = ({
  isLogged,
}) =>
(
  <><AppHeader isLogged={isLogged} />
    <div className="dog-profile">
      <div className="infos">
        <div className="dog-images">
            <form>
            <label>Nom</label>
            <input type="nom" placeholder="Nom" required />
            <button className="button-name" type="submit">Enregistrer le nom</button>
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
                <button type="submit">Enregistrer</button>
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
        <form>
          <InfosField
          
          />
          <button
            type="submit"
          >
            Enregistrer les modifications
          </button>
        </form>
        <div className="dog-description">
          <form>
            <label>Présentation</label>
            <input
              type="description"
              placeholder="Présentation"
              required />
            <button type="submit">Modifier la description</button>
          </form>
        </div>
      </div>
    </div>
    <AppFooter />
  </>
  );

DogEdit.propTypes = {
  isLogged: PropTypes.bool,
};
DogEdit.defaultProps = {
  isLogged: false,
};
export default DogEdit;
