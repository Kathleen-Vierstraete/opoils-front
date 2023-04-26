import PropTypes from 'prop-types';
import { sendNewAccount, createNewAccount} from 'src/actions/profiles';
import { changeLoginField } from 'src/actions/user';
import { useDispatch } from 'react-redux';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import './styles.scss';

const Signin = ({
  handleSignin,
  isLogged,
  changeField,
}) => {
  const dispatch = useDispatch();
  const handleSubmitSignin = (evt) => {
    evt.preventDefault();
    handleSignin();
    const email = evt.target.email.value;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch((createNewAccount(email, username, password)))
    dispatch(sendNewAccount(email, username, password));
    console.log('envoyé');
  };

  return (
  <>
    <AppHeader isLogged={isLogged} />
    <div className="authentification-form">
      <div className="authentification-form-div">
        <div className="authentification-image" id="signin-image" />
        <div className="authentification-side-text">
          <h1>Bienvenue !</h1>
          <div className="authentification-inputs">
            <form autoComplete="off" onSubmit={handleSubmitSignin}>
              <label>email</label>
              <input
                onChange={changeField}
                type="email"
                name="email"
                placeholder="example@test.com"
                required
              />
              <label>pseudo</label>
              <input 
                onChange={changeField}
                type="username"
                name="username"
                placeholder="vanilledu33"
                required
              />
              <label>mot de passe</label>
              <input
                onChange={changeField}
                type="password"
                name="password"
                placeholder="Min 6 caractères de long"
                required
              />
              <button type="submit">inscription</button>
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
  handleSignin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

Signin.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Signin;
