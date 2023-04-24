import './styles.scss';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findMember } from 'src/selectors/members';

import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

const UserProfile=({
  isLogged,
}) => {
  const { slug } = useParams();
  const member = useSelector((state) => findMember(state.profiles.members, slug));

  return (
    <><AppHeader isLogged={isLogged} />
      <div className="user-profile">
        <div className="infos">
          <div className="user-part">
            <div className="user-images">
              <div className="main-image">
                <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${member.picture}`} alt="main-image" />
              </div>
            </div>
            <div className="user-description">
              <h1>{member.username}</h1>
              <p>{member.presentation}</p>
              <h1 className="contact"> <span>Contacter le propriétaire</span> </h1>
            </div>
          </div>
          <div className="dog-part">
            <div className="dog-images">
              <div className="main-image">
                <img src="" alt="main-image" />
              </div>
            </div>
            <div className="dog-infos">
              <div className="dog-description">
                <h1><a href="/snoopy">{member.username} &#8592; </a></h1>
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
