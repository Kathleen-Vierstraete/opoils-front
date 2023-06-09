import PropTypes from 'prop-types';
import { leaveSession } from 'src/actions/user';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { persistor } from '../../store/index';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import Field from './Field';
import cacher from '../../assets/img/cacher.png';
import oeil from '../../assets/img/oeil.png';

import './styles.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  isLogged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const username = useSelector((state) => {
    const accountMember = state.profiles.accountMember;
    if (accountMember && accountMember.length > 0) {
      return accountMember[0].username;
    }
    return null;
  });

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(leaveSession());
    sessionStorage.removeItem('authToken');
    persistor.pause();
    persistor.flush().then(() => persistor.purge());
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
                <form onSubmit={handleSubmit}>
                  <div className="inputs">
                    <Field
                      name="email"
                      placeholder="Adresse Email"
                      value={email}
                      onChange={changeField}
                    />
                    <Field
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Mot de Passe"
                      onChange={changeField}
                      value={password}
                    />
                    <button type="submit">connexion</button>
                  </div>
                  <div className="password-login" onClick={handleTogglePassword}>
                    {showPassword ? <img src={cacher} alt="hide" />
                      :
                    <img src={oeil} alt="show" />}
                  </div>
                </form>
                <NavLink to="/inscription"><h2>Pas de compte ? Venez vous inscrire ici ! </h2></NavLink>
              </div>
            </div>
          )}
          {isLogged && (
            <div className="authentification-side-text">
              <h1>Au revoir {username}!</h1>
              <h3>Si vous venez de créer votre compte pensez à remplir votre profil</h3>
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
  isLogged: PropTypes.bool,
  username: PropTypes.string,
};

Login.defaultProps = {
  isLogged: false,
  username: null,
};

export default Login;
