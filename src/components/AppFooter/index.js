import './styles.scss';
import youtube from '../../assets/img/youtube.png';
import instagram from '../../assets/img/instagram.png';
import facebook from '../../assets/img/facebook.png';

function AppFooter() {
  return (
    <footer>
      <div className="nav-div">
        <div className="footer-nav-section" id="nav-left">
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="nav-section" id="nav-middle">
          <ul>
            <li><a href="/mentions-legales">Mentions légales</a></li>
            <li><a href="/termes-de-confidentialite">Confidentialité</a></li>
          </ul>
        </div>
        <div className="nav-section" id="nav-right">
          <ul>
            <li><a href="#"><img src={facebook} alt="facebook-logo"></img></a></li>
            <li><a href="#"><img src={youtube} alt="youtube-logo"></img></a></li>
            <li><a href="#"><img src={instagram} alt="instagram-logo"></img></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
