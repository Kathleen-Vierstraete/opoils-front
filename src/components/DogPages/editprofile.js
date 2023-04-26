import './styles.scss';
import PropTypes from 'prop-types';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import InfosField from './InfosField';
import ImagesField from './ImagesField';
import Hobbies from './InfosField/hobbies';

const DogEdit = ({
  isLogged,
}) =>
(
  <><AppHeader isLogged={isLogged} />
    <div className="dog-profile">
      <div className="infos">
        <ImagesField />
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
          <form>
            <Hobbies
            />
            <button
              type="submit"
            >
              Enregistrer
            </button>
          </form>
        </div>
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
