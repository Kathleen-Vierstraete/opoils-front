import PropTypes from 'prop-types';

import '../styles.scss';

const Presentation = ({
  presentation,
  setPresentation,

}) => {
  return (
    <ul>
      <li >
        <label>Présentation</label>
          <input
          className="presentation"
          type="text"
          placeholder="presentation"
          name="presentation"
          value={presentation}
          onChange={(e) => setPresentation(e.target.value)}
          required
          />
      </li>
    </ul>
  );
};

export default Presentation;
