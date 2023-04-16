import './styles.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FETCH_PROFILES } from '../../actions/profiles';
import Card from '../Card';
import search from '../../assets/img/search.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

const SearchDog = ({ profiles }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_PROFILES });
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <div id="dog-search-page">
        <div className="search-div">
          <div id="dog-searchbar">
            <input type="text" placeholder="Rechercher" />
            <a href="#">
              <img src={search} alt="search-image" />
            </a>
          </div>
          {profiles && (
            <div className="cards">
              {profiles.map((profile) => (
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

SearchDog.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

SearchDog.defaultProps = {
  profiles: null,
};

export default SearchDog;
