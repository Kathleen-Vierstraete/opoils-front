import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../SearchPages/styles.scss';

const Card = ({
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
      <Link
        to={`/${slug}`}
        className="card-link"
      />
    </div>
  </div>
);

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
