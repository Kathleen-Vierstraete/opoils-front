import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles.scss';

const UserCard = ({
  username,
  city,
  picture,
  id,
}) => (
  <div className="card">
    <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${picture}`} alt={username} />
    <div className="card-content">
      <h1>{username}</h1>
      <p>{city}</p>
      <NavLink
        to={`/${id}`}
        className="card-link"
      />
    </div>
  </div>
);

UserCard.propTypes = {
  picture: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default UserCard;
