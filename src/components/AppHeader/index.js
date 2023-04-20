import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import texture from '../../assets/img/texture.png';
import logo from '../../assets/img/logo.png';
import './styles.scss';

const AppHeader = ({
  isLogged,
}) => {
  return (
    <div className="header-nav">
      <div id="link-home">
        <img className="logo" src={logo} alt="logo" />
        <a href="/accueil"></a>
      </div>
      <img className="texture" src={texture} alt="texture" />
      <label>
        <input type="checkbox" />
        <span className="menu"> <span className="hamburger"></span> </span>
        {!isLogged && (
          <ul className="list">
            <li className="item">
              <NavLink to="/accueil" className="link">Accueil</NavLink>
            </li>
            <li className="item">
              <NavLink to="/connexion" className="link">Connexion</NavLink></li>
          </ul>
        )}
        {isLogged && (
          <ul className="list">
            <li className="item">
              <NavLink to="/accueil" className="link">Accueil</NavLink></li>
            <li className="item">
              <NavLink to="/recherche-de-chien" className="link">Recherche chien</NavLink>
              </li>
            <li className="item">
              <NavLink to="/recherche-de-proprietaire" className="link">Recherche Proprietaire</NavLink>
              </li>
            <li className="item">
              <NavLink to="/mon-compte" className="link">Mon compte</NavLink>
              </li>
            <li className="item">
              <NavLink to="/connexion" className="link">Deconnexion</NavLink>
              </li>
          </ul>
        )}
      </label>
    </div>
  );
};

AppHeader.propTypes = {
  isLogged: PropTypes.bool,
};

AppHeader.defaultProps = {
  isLogged: false,
};

export default AppHeader;
