import './styles.scss';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findProfile } from 'src/selectors/profiles';

import secondimage from '../../assets/img/second-image.png';
import thirdimage from '../../assets/img/third-image.png';
import fourthimage from '../../assets/img/fourth-image.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

const DogProfile = ({
  isLogged,
}) => {
  const { slug } = useParams();
  const profile = useSelector((state) => findProfile(state.profiles.list, slug));
  return (
    <><AppHeader isLogged={isLogged} />
      <div className="dog-profile">
        <div className="infos">
          <div className="dog-images">
            <h1>{profile.title}</h1>
            <div className="main-image">
              <img src={profile.thumbnail} alt="main-image" />
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
            <ul>
              <li>
                <h2>Taille</h2>
                <p>Petit</p>
              </li>
              <li>
                <h2>Tempérament</h2>
                <p>Adaptable</p>
              </li>
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
              <li><h2>Propriétaire</h2></li>
              <a href="/vicky">Vicky &#8592; </a>
            </ul>
          </div>
          <div className="dog-description">
            <h1>Presentation</h1>
            <p>{profile.instructions}</p>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

DogProfile.propTypes = {
  isLogged: PropTypes.bool,
};

DogProfile.defaultProps = {
  isLogged: false,
};
export default DogProfile;
