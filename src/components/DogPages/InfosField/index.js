import PropTypes from 'prop-types';

import '../styles.scss';

const InfosField = ({
  size,
  personality,
  age,
  race,
  placeholder,
  hobbie1,
  hobbie2,
  hobbie3,
  hobbie4,
}) => (
    <ul>
      <li>
        <label>Taille</label>
        <select 
          name="Taille"
          type={size}
        >
          <option value="">Choisir un gabarit</option>
          <option value="1">Petit</option>
          <option value="2">Moyen</option>
          <option value="2">Grand</option>
        </select>
      </li>
      <li>
        <label>Tempérament</label>
        <select 
          name="Caractère"
          type={personality}
        >
          <option value="">Choisir un caractère</option>
          <option value="1">Calme</option>
          <option value="2">Adaptable</option>
          <option value="2">Energique</option>
        </select>
      </li>
      <li>
        <label>Age</label>
        <input
          type={age} 
          placeholder="age"
        />
      </li>
      <li>
        <label>Race</label>
        <input
          type={race}
          placeholder="race"
        />
      </li>
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

InfosField.propTypes = {
  size: PropTypes.string,
  personality: PropTypes.string,
  age: PropTypes.number,
  race: PropTypes.string,
  hobbie1: PropTypes.string,
  hobbie2: PropTypes.string,
  hobbie3: PropTypes.string,
  hobbie4: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

InfosField.defaultProps = {
  size: null,
  personality: null,
  age: null,
  race: null,
  hobbie1: null,
  hobbie2: null,
  hobbie3: null,
  hobbie4: null,
};

export default InfosField;
