import PropTypes from 'prop-types';

import '../styles.scss';

const Hobbies = ({
  hobbie1,
  hobbie2,
  hobbie3,
  hobbie4,
}) => (
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
