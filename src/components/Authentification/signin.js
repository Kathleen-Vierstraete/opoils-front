import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import Field from './Field';
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
                <li>Au moins 6 caractères</li>
                <li>Un chiffre</li>
                <li>Un symbole</li>
              </ul>
            </div>
          </div>
          <div className="authentification-side-text">
            <h1>Bienvenue !</h1>
            {isSuccess ? (
              <NavLink to="/connexion">
                <p>Compte créé! Tu peux aller ici pour te connecter</p>
              </NavLink>
            ) : (
              <h3>Veuillez remplir correctement les champs ci-dessous pour créer un compte. Ce message évolue si c'est bon.</h3>
            )}
            <div className="authentification-inputs">
              <form autoComplete="off" onSubmit={handleSubmitSignin}>
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
                  type="password"
                  placeholder="Mot de Passe"
                  onChange={changeField}
                  value={password}
                />
                <button type="submit">Créer un compte</button>
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
  username: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignin: PropTypes.func.isRequired,
};

export default Signin;
