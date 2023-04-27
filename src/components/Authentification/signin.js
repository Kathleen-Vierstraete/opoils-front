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
    <><AppHeader isLogged={isLogged} />
      <div className="authentification-form">
        <div className="authentification-form-div">
          <div className="authentification-image" id="signin-image" />
          <div className="authentification-side-text">
            <h1>Bienvenue !</h1>
            {/* {isSuccess && <NavLink to="/connexion"><h1>Compte créé! Tu peux aller ici pour te connecter</h1></NavLink>} */}
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
