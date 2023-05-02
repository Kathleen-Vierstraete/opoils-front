import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import Field from './Field';
import cacher from '../../assets/img/cacher.png';
import oeil from '../../assets/img/oeil.png';
import './styles.scss';

const Signin = ({
  email,
  password,
  changeField,
  handleSignin,
  username,
  isLogged,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const passwordValue = useSelector((state) => state.user.password);

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [passwordIsValid, setPasswordIsValid] = useState({
    length: passwordValue.length >= 8,
    digit: /\d/.test(passwordValue),
    symbol: /[^A-Za-z0-9]/.test(passwordValue),
    uppercase: /[A-Z]/.test(passwordValue),
  });

  useEffect(() => {
    setPasswordIsValid({
      length: passwordValue.length >= 8,
      digit: /\d/.test(passwordValue),
      symbol: /[^A-Za-z0-9]/.test(passwordValue),
      uppercase: /[A-Z]/.test(passwordValue),
    });
  }, [passwordValue]);

  const handleSubmitSignin = (evt) => {
    evt.preventDefault();
    handleSignin();
    setIsSuccess(true);
  };


  return (
    <>
      <AppHeader isLogged={isLogged} />
      <div className="authentification-form">
        <div className="authentification-form-div">
          <div className="authentification-image" id="signin-image">
            <div className="password-div">
              <ul>
                <li>
                  <h1>Pour le mot de passe</h1>
                </li>
                <li>
                  {passwordIsValid.length ? <span className="greencheck">&#10003;</span> : null} Au moins 8 caractères
                </li>
                <li>
                  {passwordIsValid.digit ? <span className="greencheck">&#10003;</span> : null} Un chiffre
                </li>
                <li>
                  {passwordIsValid.symbol ? <span className="greencheck">&#10003;</span> : null} Un symbole
                </li>
                <li>
                  {passwordIsValid.uppercase ? <span className="greencheck">&#10003;</span> : null} Une majuscule
                </li>
              </ul>
            </div>
          </div>
          <div className="authentification-side-text">
            <h1>Bienvenue !</h1>
            {isSuccess ? (
              <NavLink to="/connexion">
                <h3>Compte créé! Vous pouvez cliquer ici pour vous connecter</h3>
              </NavLink>
            ) : (
              <h3>Veuillez remplir correctement les champs ci-dessous pour créer un compte. Ce message évolue si c'est bon.</h3>
            )}
            <div className="authentification-inputs">

              <form autoComplete="off" onSubmit={handleSubmitSignin}>
                <div className="inputs">
                  <Field
                    name="username"
                    type="username"
                    placeholder="Pseudo"
                    onChange={changeField}
                    value={username}
                  />
                  <Field
                    name="email"
                    type="email"
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
                  <button type="submit">Créer un compte</button>
                </div>
                <div className="password-signin" onClick={handleTogglePassword}>
                  {showPassword ? <img src={cacher} alt="hide" />
                    :
                  <img src={oeil} alt="show" />}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
};

Signin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string,
  changeField: PropTypes.func,
  handleSignin: PropTypes.func.isRequired,
};

Signin.defaultProps = {
  accountDogs: null,
  changeField: null,
  username: null,
};

export default Signin;
