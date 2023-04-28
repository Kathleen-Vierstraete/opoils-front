import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FETCH_DOGS_PROFILES } from '../../actions/profiles';
import DogCard from './DogCard';
import search from '../../assets/img/search.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import SelectLocation from './SelectLocation';

const SearchDog = ({ dogs, isLogged }) => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPersonality, setSelectedPersonality] = useState('');
  const location = useSelector((state) => state.location);

  useEffect(() => {
    dispatch({ type: FETCH_DOGS_PROFILES });
  }, []);

  /* I used Object here because it's global and it takes all the content of the fetched array but I don't think global is a good thing for security a little bit like var instead of let and const but it helps to get results from profiles array instead of checking index by index, I added toLowerCase so uppercase doesn't mess up the filter, without this the filter wouldn't find the right words if there's an uppercase mismatch */

  /* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object */
  /* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some */

  const filteredProfiles = dogs.filter((dog) => {
    const matchesSearchInput = Object.values(dog).some((value) =>
      typeof value === 'string' && value.toLowerCase().includes(searchInput.toLowerCase())
    );

    const matchedSize = !selectedSize || dog.size === selectedSize;
    const matchesPersonality = !selectedPersonality || dog.personality === selectedPersonality;
    // need to think adding filter location too if I have time
    return matchesSearchInput && matchedSize && matchesPersonality;
  });

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
              <NavLink to="/recherche-de-chien">
                <img src={search} alt="search-image" />
              </NavLink>
            </div>
            <div className="select-div">
              <div className="select-elem">
                <select name="Taille" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                  <option value="">Choisir un gabarit</option>
                  <option value="Petit">Petit</option>
                  <option value="Moyen">Moyen</option>
                  <option value="Grand">Grand</option>
                </select>
              </div>
              <div className="select-elem">
                <select name="Caractère" value={selectedPersonality} onChange={(e) => setSelectedPersonality(e.target.value)}>
                  <option value="">Choisir un caractère</option>
                  <option value="Calme">Calme</option>
                  <option value="Adaptable">Adaptable</option>
                  <option value="Energique">Energique</option>
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
                <DogCard key={profile.id} {...profile} />
              ))}
            </div>
          )}
        </div>
      </div>
      <AppFooter />
    </>
  );
};

SearchDog.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

SearchDog.defaultProps = {
  profiles: null,
};

export default SearchDog;
