import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles.scss';

const DogCard = ({
  name,
  presentation,
  main_picture,
  slug,
}) => (
  <div className="card">
    <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${main_picture}`} alt={name} />
    <div className="card-content">
      <h1>{name}</h1>
      <p>{presentation}</p>
      <NavLink
        to={`/chien/${slug}`}
        className="card-link"
      />
    </div>
  </div>
);

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  main_picture: PropTypes.string.isRequired,
  presentation: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default DogCard;
