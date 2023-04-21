import './styles.scss';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findProfile } from 'src/selectors/profiles';

import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

const UserProfile =({
  isLogged,
}) => {
  const { slug } = useParams();
  const profile = useSelector((state) => findProfile(state.profiles.list, slug));

  return (
    <><AppHeader isLogged={isLogged} />
      <div className="user-profile">
        <div className="infos">
          <div className="user-part">
            <div className="user-images">
              <div className="main-image">
                <img src={profile.thumbnail} alt="main-image" />
              </div>
            </div>
            <div className="user-description">
              <h1>{profile.title}</h1>
              <p>{profile.instructions}</p>
              <h1 className="contact"> <span>Contacter le propriétaire</span> </h1>
            </div>
          </div>
          <div className="dog-part">
            <div className="dog-images">
              <div className="main-image">
                <img src={profile.thumbnail} alt="main-image" />
              </div>
            </div>
            <div className="dog-infos">
              <div className="dog-description">
                <h1><a href="/snoopy">{profile.title} &#8592; </a></h1>
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
                <li>
                  <h2>Département</h2>
                </li>
                <p>Loiret</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
{/*         <img src={dog} alt="logo" /> */}
      <AppFooter />
    </>
  );
}
UserProfile.propTypes = {
  isLogged: PropTypes.bool,
};

UserProfile.defaultProps = {
  isLogged: false,
};

export default UserProfile;
