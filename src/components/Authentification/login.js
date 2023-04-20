import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import Field from './Field';

import './styles.scss';
import { leaveSession } from '../../actions/user';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  const handleClick = () => {
    console.log('appuyé');
    handleLogout();
  };
  return (
    <><AppHeader isLogged={isLogged} />
      <div className="authentification-form">
        <div className="authentification-form-div">
          <div className="authentification-image" id="login-image" />
          {!isLogged && (
            <div className="authentification-side-text">
              <h1>Bonjour !</h1>
              <div className="authentification-inputs">
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <Field
                    name="email"
                    placeholder="Adresse Email"
                    value={email}
                    onChange={changeField}
                  />
                  <Field
                    name="password"
                    type="password"
                    placeholder="Mot de Passe"
                    onChange={changeField}
                    value={password}
                  />
                  <button type="submit">connexion</button>
                </form>
                <NavLink to="/inscription"><h2>Pas de compte ? Venez vous inscrire ici ! </h2></NavLink>
              </div>
            </div>
          )}
          {isLogged && (
            <div className="authentification-side-text">
              <h1>{loggedMessage}</h1>
              <div className="authentification-inputs">
                <button
                  type="button"
                  onClick={handleClick}
                >
                  Déconnexion
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <AppFooter />
    </>
  );
};

Login.propTypes = {

  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Login;
