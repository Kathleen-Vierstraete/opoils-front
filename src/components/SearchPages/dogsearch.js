import './styles.scss';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FETCH_PROFILES } from '../../actions/profiles';
import Card from '../Card';
import search from '../../assets/img/search.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

const SearchDog = ({ profiles }) => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

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
      <AppHeader />
      <div id="dog-search-page">
        <div className="search-div">
          <div id="dog-searchbar">
            <input
              type="text"
              placeholder="Rechercher"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <a href="#">
              <img src={search} alt="search-image" />
            </a>
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
