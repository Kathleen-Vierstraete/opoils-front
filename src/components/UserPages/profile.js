import './styles.scss';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { findMember } from 'src/selectors/members';

import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import UsersDogsPart from './UsersDogsPart';
import memberprofile from '../../assets/img/memberprofile.png';

const UserProfile = ({
  isLogged,
}) => {
  const { slug } = useParams();
  const member = useSelector((state) => findMember(state.profiles.members, slug));
  const [hoverText, setHoverText] = useState(null);
 
  const handleMouseOver = () => {
    setHoverText(member.email);
  };

  const handleMouseLeave = () => {
    setHoverText(null);
  };

  return (
    <><AppHeader isLogged={isLogged} />
      <div className="user-profile">
        <div className="infos">
          <div className="user-part">
            <div className="user-images">
              <div className="main-image">
              {member.picture ? (
                <img src={`http://caroline-georges-server.eddi.cloud:8080/uploads/pictures/${member.picture}`} alt="main-image" />
              ) : (
                <img src={memberprofile} alt="user-image"/> 
              )}
                </div>
            </div>
            <div className="user-description">
              <h1>{member.username}</h1>
              <p>{member.presentation_member}</p>
              <h1 onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
              {hoverText || 'Contacter le propriétaire'}
               </h1>
              <h1>Département</h1>
              <p>{member.postal_code}</p>
            </div>
          </div>
          {member.dogs.map((dog) => (
            <UsersDogsPart key={dog.id} {...dog} />
          ))}
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
