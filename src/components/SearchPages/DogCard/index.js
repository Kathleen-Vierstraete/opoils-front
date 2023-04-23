import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles.scss';

const DogCard = ({
  name,
  presentation,
  picture,
  id,
}) => (
  <div className="card">
    <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${picture}`} alt={name} />
    <div className="card-content">
      <h1>{name}</h1>
      <p>{presentation}</p>
      <NavLink
        to={`/${id}`}
        className="card-link"
      />
    </div>
  </div>
);

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  presentation: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default DogCard;
