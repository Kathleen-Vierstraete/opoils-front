import './styles.scss';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findMember } from 'src/selectors/members';

import PropTypes from 'prop-types';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import SelectLocation from '../SearchPages/SelectLocation';
import UsersDogsPart from './UsersDogsPart';
import memberprofile from '../../assets/img/memberprofile.png';

const UserEdit = ({
  isLogged,
  location,
  accountDogs,
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
                <form>
                  {member.picture ? (
                  <img src={`http://caroline-georges-server.eddi.cloud:8080/uploads/pictures/${member.picture}`} alt="main-image" />
                  ) : (
                  <img src={memberprofile} alt="fourth-image"/> 
                  )}
                  <button type="submit">Modifier la photo</button>
                </form>
              </div>
            </div>
            <div className="user-description">
              <form>
                <label>Description</label>
                <input type="description" placeholder="Texte de description" required />
                <button type="submit">Modifier la description</button>
                </form>
                <form>
                  <label>Départements</label>
                    <SelectLocation location={location} />
                <button type="submit">Modifier le département</button>
              </form>
            </div>
          </div>
          {accountDogs.map((dogs) => (
            <UsersDogsPart key={dogs.id} {...dogs} />
          ))}
        </div>
      </div>
      <AppFooter />
    </>
  );
}

UserEdit.propTypes = {
  isLogged: PropTypes.bool,
};

UserEdit.defaultProps = {
  isLogged: false,
};

export default UserEdit;
