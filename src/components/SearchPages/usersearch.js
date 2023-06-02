import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FETCH_MEMBERS_PROFILES } from '../../actions/profiles';
import UserCard from './UserCard';
import search from '../../assets/img/search.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import SelectLocation from './SelectLocation';

const SearchUser = ({ members, isLogged }) => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const [selectedDepartement, setDepartement] = useState('');
  const location = useSelector((state) => state.location);

  useEffect(() => {
    dispatch({ type: FETCH_MEMBERS_PROFILES });
  }, []);

  /* I used Object here because it's global and it takes all the content of the fetched array but I don't think global is a good thing for security a little bit like var instead of let and const but it helps to get results from profiles array instead of checking index by index, I added toLowerCase so uppercase doesn't mess up the filter, without this the filter wouldn't find the right words if there's an uppercase mismatch*/

  /* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object */
  /* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some */

  const filteredProfiles = members.filter((profile) => {
    const matchesSearchInput = Object.values(profile).some((value) =>
      typeof value === 'string' && value.toLowerCase().includes(searchInput.toLowerCase()));

    const matchesDepartement = !selectedDepartement || profile.postal_code === selectedDepartement;
    return matchesSearchInput && matchesDepartement;
  });

  const handleSelectDepartement = (departement) => {
    setDepartement(departement);
  };
  return (
    <>
      <AppHeader isLogged={isLogged} />
      <div id="user-search-page">
        <div className="search-div">
          <div id="user-searchbar">
            <div className="searchbar">
              <input
                type="text"
                placeholder="Rechercher"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <NavLink to="/recherche-de-proprietaire">
                <img src={search} alt="search-image" />
              </NavLink>
            </div>
            <div className="select-div">
              <div className="select-elem location">
                <SelectLocation onSelect={handleSelectDepartement} location={location} />
              </div>
            </div>
            </div>
          {filteredProfiles && (
            <div className="cards">
              {filteredProfiles.map((profile) => (
                <UserCard key={profile.id} {...profile} />
              ))}
            </div>
          )}
          </div>
        </div>
      <AppFooter />
    </>
  );
};

SearchUser.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};


SearchUser.defaultProps = {
  profiles: null,
};

export default SearchUser;
