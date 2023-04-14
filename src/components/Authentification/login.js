import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import './styles.scss';

function Login() {
  return (
    <><AppHeader />
      <div className="authentification-form">
        <div className="authentification-form-div">
          <div className="authentification-image" id="login-image" />
          <div className="authentification-side-text">
            <h1>Bonjour !</h1>
            <div className="authentification-inputs">
              <label>email</label>
              <input type="email" placeholder="example@test.com" />
              <label>mot de passe</label>
              <input type="password" placeholder="mot de passe" />
              <button type="submit">connexion</button>
              <a href="/inscription"><h2>Pas de compte ? Venez vous inscrire ici ! </h2></a>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default Login;
