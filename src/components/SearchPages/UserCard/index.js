import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles.scss';

const UserCard = ({
  thumbnail,
  title,
  instructions,
  slug,
}) => (
  <div className="card">
    <img src={thumbnail} alt={title} />
    <div className="card-content">
      <h1>{title}</h1>
      <p>{instructions}</p>
      <NavLink
        to={`/${slug}`}
        className="card-link"
      />
    </div>
  </div>
);

UserCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default UserCard;
