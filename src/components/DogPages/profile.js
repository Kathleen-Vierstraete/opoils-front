import './styles.scss';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { findDog } from 'src/selectors/dogs';
import { NavLink } from 'react-router-dom';
import { FETCH_DOGS_PROFILES } from '../../actions/profiles';

import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import dogprofile from '../../assets/img/dogprofile.png';

const DogProfile = ({
  isLogged,
}) => {
  const { slug } = useParams();
  const dog = useSelector((state) => findDog(state.profiles.dogs, slug));
  const hobbies = dog.hobbies;
  const pictures = dog.pictures;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_DOGS_PROFILES });
  }, []);

  return (
    <><AppHeader isLogged={isLogged} />
      <div className="dog-profile">
        <div className="infos">
          <div className="dog-images">
            <h1>{dog.name}</h1>
            <div className="main-image">
              {dog.main_picture ? (
              <img src={`http://caroline-georges-server.eddi.cloud:8080/uploads/pictures/${dog.main_picture}`} alt="main-image" />
              ) : (
              <img src={dogprofile} alt="fourth-image"/> 
              )}
            </div>
            <div className="other-images">
              {pictures.map((picture) => (
                <div className="images" key={picture.id}>
                  <img src={`http://caroline-georges-server.eddi.cloud:8080/uploads/pictures/${picture.picture}`} alt="second-image" />
                </div>
              ))}
            </div>
          </div>
          <div className="dog-infos">
            <ul>
              <li>
                <h2>Taille</h2>
                <p>{dog.size}</p>
              </li>
              <li>
                <h2>Tempérament</h2>
                <p>{dog.personality}</p>
              </li>
              <li>
                <h2>Age</h2>
                <p>{dog.age} ans</p>
              </li>
              <li>
                <h2>Race</h2>
                <p>{dog.race}</p>
              </li>
              <li>
                <h2>Hobbies</h2>
                  <ul className="hobbies">
                    {hobbies.map((hobbie) => (
                      <li key={hobbie.id}>{hobbie.hobby}</li>
                    ))}
                  </ul>
              </li>
              <li><h2>Département</h2></li>
              <p>{dog.member.postal_code}</p>
              <li><h2>Propriétaire</h2></li>
              <NavLink
                to={`/${dog.member.slug}`}>
                {dog.member.slug} &#8592;
              </NavLink> 
            </ul>
          </div>
          <div className="dog-description">
            <h1>Presentation</h1>
            <p>{dog.presentation}</p>
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
