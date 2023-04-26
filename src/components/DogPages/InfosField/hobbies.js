import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findDog } from 'src/selectors/dogs';

import '../styles.scss';

const Hobbies = ({
  hobbie1,
  hobbie2,
  hobbie3,
  hobbie4,
}) => {
  const { slug } = useParams();
  const dog = useSelector((state) => findDog(state.profiles.dogs, slug));
  const hobbies = dog.hobbies;
  return (
    <ul>
      <li>
        <label>Hobbies</label>
        <ul className="hobbies">
          <li>
            <input 
              type={hobbie1}
              placeholder="hobbie1"
            />
          </li>
          <li>
            <input
              type={hobbie2}
              placeholder="hobbie2"
            />
          </li>
          <li>
            <input
              type={hobbie3}
              placeholder="hobbie3"
            />
          </li>
          <li>
            <input
              type={hobbie4}
              placeholder="hobbie4"
            />
          </li>
        </ul>
      </li>
    </ul>
  );
};

Hobbies.propTypes = {
  hobbie1: PropTypes.string,
  hobbie2: PropTypes.string,
  hobbie3: PropTypes.string,
  hobbie4: PropTypes.string,
  placeholder: PropTypes.string,
};

Hobbies.defaultProps = {

  hobbie1: null,
  hobbie2: null,
  hobbie3: null,
  hobbie4: null,
  placeholder: null,

};

export default Hobbies;
