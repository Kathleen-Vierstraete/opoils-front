import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import memberprofile from '../../../assets/img/memberprofile.png';
import '../styles.scss';

const UserCard = ({
  username,
  city,
  picture,
  slug,
}) => (
  <div className="card">
    {picture ? (
    <img src={`http://caroline-georges-server.eddi.cloud:8080/uploads/pictures/${picture}`} alt={username} />
    ) : (
      <img src={memberprofile} alt="fourth-image"/> 
      )}
    <div className="card-content">
      <h1>{username}</h1>
      <p>{city}</p>
      <NavLink
        to={`/${slug}`}
        className="card-link"
      />
    </div>
  </div>
);

UserCard.propTypes = {
  picture: PropTypes.string,
  username: PropTypes.string.isRequired,
  city: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

UserCard.defaultProps = {
  picture: null,
  city: null,
};
export default UserCard;
