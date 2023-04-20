import './styles.scss';
import PropTypes from 'prop-types';
import firstimage from '../../assets/img/first-image.png';
import secondimage from '../../assets/img/second-image.png';
import thirdimage from '../../assets/img/third-image.png';
import fourthimage from '../../assets/img/fourth-image.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

function DogProfile({
  isLogged,
  thumbnail,
  title,
  instructions,
}) {
  return (
    <><AppHeader isLogged={isLogged} />
      <div className="dog-profile">
        <div className="infos">
          <div className="dog-images">
            <h1>{title}</h1>
            <div className="main-image">
              <img src={thumbnail} alt="main-image" />
            </div>
            <div className="other-images">
              <img src={secondimage} alt="second-image" />
              <img src={thirdimage} alt="third-image" />
              <img src={fourthimage} alt="fourth-image" />
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
            <h1>Présentation</h1>
            <p>{instructions}</p>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

DogProfile.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default DogProfile;
