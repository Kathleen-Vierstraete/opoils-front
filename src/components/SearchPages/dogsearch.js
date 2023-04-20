import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FETCH_PROFILES } from '../../actions/profiles';
import Card from '../Card';
import search from '../../assets/img/search.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import SelectLocation from './SelectLocation';

const SearchDog = ({ profiles, isLogged }) => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const location = useSelector((state) => state.location);

  useEffect(() => {
    dispatch({ type: FETCH_PROFILES });
  }, []);

  /* I used Object here because it's global and it takes all the content of the fetched array but I don't think global is a good thing for security a little bit like var instead of let and const but it helps to get results from profiles array instead of checking index by index, I added toLowerCase so uppercase doesn't mess up the filter, without this the filter wouldn't find the right words if there's an uppercase mismatch */

  /* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object */
  /* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some */

  const filteredProfiles = profiles.filter((profile) =>
    Object.values(profile).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchInput.toLowerCase()),
    ));

  return (
    <>
      <AppHeader isLogged={isLogged} />
      <div id="dog-search-page">
        <div className="search-div">
          <div id="dog-searchbar">
            <div className="searchbar">
              <input
                type="text"
                placeholder="Rechercher"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <NavLink to="/#">
                <img src={search} alt="search-image" />
              </NavLink>
            </div>
            <div className="select-div">
              <div className="select-elem">
              <select name="Taille">
                  <option value="">Choisir un gabarit</option>
                    <option value="1">Petit</option>
                    <option value="2">Moyen</option>
                    <option value="2">Grand</option>
                </select>
              </div>
              <div className="select-elem">
                <select name="Caractère">
                  <option value="">Choisir un caractère</option>
                      <option value="1">Calme</option>
                      <option value="2">Adaptable</option>
                      <option value="2">Energique</option>
                </select>
              </div>
              <div className="select-elem location">
                <SelectLocation location={location} />
              </div>
            </div>
          </div>
          {filteredProfiles && (
            <div className="cards">
              {filteredProfiles.map((profile) => (
                <Card key={profile.id} {...profile} />
              ))}
            </div>
          )}
        </div>
      </div>
      <AppFooter />
    </>
  );
};

/* added here the word prop for the filter, I only need this with Object but if I get rid of it I should remember to add what's needed here */

SearchDog.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      word: PropTypes.string.isRequired,
    }),
  ),
};

/* avoid some errors by messing around while working, profiles is never empty this way it doesn't need any value to work*/

SearchDog.defaultProps = {
  profiles: null,
};

export default SearchDog;
