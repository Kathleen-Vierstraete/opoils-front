import './styles.scss';
import { NavLink } from 'react-router-dom';
import youtube from '../../assets/img/youtube.png';
import instagram from '../../assets/img/instagram.png';
import facebook from '../../assets/img/facebook.png';

function AppFooter() {
  return (
    <footer>
      <div className="nav-div">
        <div className="footer-nav-section" id="nav-left">
          <ul>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-section" id="nav-middle">
          <ul>
            <li>
              <NavLink to="/mentions-legales">Mentions légales</NavLink>
            </li>
            <li>
              <NavLink to="/termes-de-confidentialite">Confidentialité</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-section" id="nav-right">
          <ul>
            <li><NavLink to="/#">
              <img src={facebook} alt="facebook-logo"></img></NavLink>
            </li>
            <li>
              <NavLink to="/#"><img src={youtube} alt="youtube-logo"></img></NavLink>
            </li>
            <li>
              <NavLink to="/#"><img src={instagram} alt="instagram-logo"></img></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
