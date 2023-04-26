import './styles.scss';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findMember } from 'src/selectors/members';

import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import UsersDogsPart from './UsersDogsPart';

const UserProfile = ({
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
              <p>{member.presentation_member}</p>
              <h1 className="contact"> <span>Contacter le propriétaire</span> </h1>
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
