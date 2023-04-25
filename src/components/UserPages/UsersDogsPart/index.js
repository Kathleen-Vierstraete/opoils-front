import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { saveMembersProfiles } from '../../../actions/profiles';
import '../styles.scss';

const UserDogsPart = ({
  name,
  slug,
  age,
  race,
  size,
  personality,
  presentation,
  main_picture,
  
}) => (
  <div className="dog-part">
    <div className="dog-images">
      <div className="main-image">
        <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${main_picture}`} alt="main-image" />
      </div>
    </div>
    <div className="dog-infos">
      <div className="dog-description">
        <h1>
          <NavLink
            to={`/chien/${slug}`}>
              {name} &#8592;
          </NavLink> 
        </h1>
        <p>{presentation}</p>
      </div>
        <ul>
          <li>
            <h2>Taille</h2>
            <p>{size}</p>
          </li>
          <li>
            <h2>Tempérament</h2>
            <p>{personality}</p>
          </li>
          <li>
            <h2>Age</h2>
            <p>{age} ans</p>
          </li>
          <li>
            <h2>Race</h2>
            <p>{race}</p>
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
        </ul>
    </div>
  </div>
);

UserDogsPart.propTypes = {
  name:PropTypes.string.isRequired,
  slug:PropTypes.string.isRequired,
  age:PropTypes.number.isRequired,
  race:PropTypes.string.isRequired,
  size:PropTypes.string.isRequired,
  main_picture:PropTypes.string.isRequired,
  personality:PropTypes.string.isRequired,
  presentation:PropTypes.string.isRequired,
};

export default UserDogsPart;
