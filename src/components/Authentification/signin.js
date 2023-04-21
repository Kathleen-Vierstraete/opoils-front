import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import './styles.scss';

function Signin( {isLogged}) {
  return (
    <><AppHeader isLogged={isLogged} />
      <div className="authentification-form">
        <div className="authentification-form-div">
          <div className="authentification-image" id="signin-image" />
          <div className="authentification-side-text">
            <h1>Bienvenue !</h1>
            <div className="authentification-inputs">
              <form>
                <label>email</label>
                <input type="email" placeholder="example@test.com" />
                <label>pseudo</label>
                <input type="email" placeholder="vanilledu33" />
                <label>mot de passe</label>
                <input type="password" placeholder="Min 6 caractères de long" />
                <button type="submit">inscription</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default Signin;
