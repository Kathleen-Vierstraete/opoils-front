import './styles.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import userimage from '../../assets/img/user.jpg';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import SelectLocation from '../SearchPages/SelectLocation';
import UsersDogsPart from './UsersDogsPart';

function UserEdit({isLogged, location, accountDogs, accountMember }) {

  return (
    <><AppHeader isLogged={isLogged} />
      <div className="user-profile">
        <div className="infos">
          <div className="user-part">
            <div className="user-images">
              <div className="main-image">
                <form>
                  <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${accountMember.picture}`} alt="main-image" />
                  <button type="submit">Modifier la photo</button>
                </form>
              </div>
            </div>
            <div className="user-description">
              <form>
                <label></label>
                <input type="description" placeholder="Texte de description" />
                  <label>Départements</label>
                    <SelectLocation location={location} />
                <button type="submit">Modifier les modifications</button>
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
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
UserEdit.defaultProps = {
  favorites: null,
};

export default UserEdit;
