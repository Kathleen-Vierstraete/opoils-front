import { NavLink } from 'react-router-dom';
import AppHeader from '../AppHeader';
import './styles.scss';
import youtube from '../../assets/img/youtube.png';
import instagram from '../../assets/img/instagram.png';
import facebook from '../../assets/img/facebook.png';
/* import dog from '../../assets/img/dog.png'; */

function HomePage( {isLogged} ) {
  return (
    <><AppHeader isLogged={isLogged} />
      <div id="website-description">
        <div className="nav-div">
          <div id="main-text">
            <h1>Bienvenue sur notre site de rencontre pour chien !</h1>
            <p> Vous cherchez un meilleur ami pour votre loulou ? Vous êtes au bon endroit ! Notre site de rencontre pour chien est spécialement conçu pour aider les propriétaires de chiens à trouver des partenaires pour leurs chiens. Nous savons que les chiens sont plus heureux lorsqu'ils ont des compagnons, alors nous avons créé une communauté où les propriétaires de chiens peuvent se rencontrer et organiser des rendez-vous pour leurs compagnons à quatre pattes.
            </p>
          </div>
          <div id="second-text">
            <h1>Comment ça marche ?</h1>
            <p> C'est simple ! Tout d'abord, créez un profil pour votre chien en ajoutant des informations telles que son nom, sa race, son âge et ses préférences en matière de jeux et de promenades. Ensuite, vous pouvez parcourir les profils d'autres chiens et rechercher des partenaires potentiels pour votre toutou. Si vous trouvez un chien qui semble être un bon match, vous pouvez envoyer un message à son propriétaire et organiser une rencontre pour vos chiens.
            </p>
          </div>
          <div className="nav">
              {/*<img className="dogimg" src={dog} alt="dog-image" /> */}
            <div className="nav-section" id="nav-up">
              <ul>
                <li>
                  <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/mentions-legales">Mentions légales</NavLink>
                </li>
                <li>
                  <NavLink to="/politique-de-confidentialite">Politique de Confidentialité</NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-section" id="nav-bottom">
              <ul>
                <li>
                  <NavLink to=""><img src={facebook} alt="facebook-logo" /></NavLink>
                </li>
                <li>
                  <NavLink to=""><img src={youtube} alt="youtube-logo" /></NavLink>
                </li>
                <li>
                  <NavLink to=""><img src={instagram} alt="instagram-logo" /></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
