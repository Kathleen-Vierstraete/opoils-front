import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles.scss';

const UserDogsPart = ({
  thumbnail,
  title,
  slug,
}) => (
  <div className="dog-part">
    <div className="dog-images">
      <div className="main-image">
        <img src={thumbnail} alt="main-image" />
      </div>
    </div>
    <div className="dog-infos">
      <div className="dog-description">
        <h1>
          <NavLink
            to={`/${slug}`}>
              {title} &#8592;
          </NavLink> 
        </h1>
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
);

UserDogsPart.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default UserDogsPart;
