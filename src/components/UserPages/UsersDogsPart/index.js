import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import dogprofile from '../../../assets/img/dogprofile.png';
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
      {main_picture ? (
        <img src={`http://caroline-georges-server.eddi.cloud:8080/uploads/pictures/${main_picture}`} alt="main-image" />
      ) : (
        <img src={dogprofile} alt="fourth-image"/> 
      )}
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
      </ul>
    </div>
  </div>
);

UserDogsPart.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  race: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  main_picture: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  presentation: PropTypes.string.isRequired,
};

export default UserDogsPart;
