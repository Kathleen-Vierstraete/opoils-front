import AppHeader from '../AppHeader';
import './styles.scss';
import youtube from '../../assets/img/youtube.png';
import instagram from '../../assets/img/instagram.png';
import facebook from '../../assets/img/facebook.png';
import dog from '../../assets/img/dog.png';

function HomePage() {
  return (
    <><AppHeader />
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
            <img className="dogimg" src={dog} alt="dog-image" />
            <div className="nav-section" id="nav-up">
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/mentions-legales">Mentions légales</a></li>
                <li><a href="/politique-de-confidentialite">Politique de Confidentialité</a></li>
              </ul>
            </div>
            <div className="nav-section" id="nav-bottom">
              <ul>
                <li><a href="#"><img src={facebook} alt="facebook-logo" /></a></li>
                <li><a href="#"><img src={youtube} alt="youtube-logo" /></a></li>
                <li><a href="#"><img src={instagram} alt="instagram-logo" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
