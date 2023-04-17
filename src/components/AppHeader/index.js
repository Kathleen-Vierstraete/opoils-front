import PropTypes from 'prop-types';
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
        {isLogged && (
          <ul className="list">
            <li className="item"><a href="/accueil" className="link">Accueil</a></li>
            <li className="item"><a href="/connexion" className="link">Connexion</a></li>
          </ul>
        )}
        {!isLogged && (
          <ul className="list">
            <li className="item"><a href="/accueil" className="link">Accueil</a></li>
            <li className="item"><a href="/connexion" className="link">Déconnexion</a></li>
            <li className="item"><a href="/mon-compte" className="link">Mon compte</a></li>
            <li className="item"><a href="/recherche-de-chien" className="link">Recherche chien</a></li>
            <li className="item"><a href="/recherche-de-proprietaire" className="link">Recherche Propriétaire</a></li>
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
