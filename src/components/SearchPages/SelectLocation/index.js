import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DEPARTEMENTS, FETCH_REGIONS } from '../../../actions/location';

const SelectLocation = ({location, onSelect}) => {
  const dispatch = useDispatch();
  const departements = useSelector((state) => state.location.departements);
  const regions = useSelector((state) => state.location.regions);

  useEffect(() => {
    dispatch({ type: FETCH_DEPARTEMENTS });
    dispatch({ type: FETCH_REGIONS });
  }, []);

  const departementsByRegions = {};

  regions.forEach((region) => {
    departementsByRegions[region.nom] = [];
    departements.forEach((departement) => {
      if (departement.codeRegion === region.code) {
        departementsByRegions[region.nom].push(departement);
      }
    });
  });

  const handleChange = (e) => {
    const selectedDepartement = e.target.value;
    onSelect(selectedDepartement);
  };

  return (
    <select onChange={handleChange} >
      <option value="">Localisation</option>
      {Object.keys(departementsByRegions).map((region) => (
        <optgroup label={region} key={region}>
          {departementsByRegions[region].map((departement) => (
            <option value={departement.name} key={departement.code}>
              {departement.nom}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
};

SelectLocation.propTypes = {
  location: PropTypes.shape({
    region: PropTypes.string,
    departement: PropTypes.string,
  }),
};

SelectLocation.defaultProps = {
  location: null,
};

export default SelectLocation;
