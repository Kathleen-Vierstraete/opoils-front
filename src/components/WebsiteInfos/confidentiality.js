import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import './styles.scss';

function Confidentiality({isLogged}) {
  return (
    <><AppHeader isLogged={isLogged} />
      <div className="websiteinfos-sumary">
        <div className="websiteinfos-infos-div">
          <div className="websiteinfos-main-text">
            <h1>Termes de confidentialité</h1>
            <p> Nous sommes conscients de l'importance de la protection de la vie privée de nos utilisateurs et nous nous engageons à protéger les informations personnelles que nous collectons.</p>
          </div>
          <div className="websiteinfos-second-text">
              <ul>
                <li><h1>Collecte d'informations personnelles :</h1></li>
                <li><p>Nous collectons des informations personnelles lorsque vous vous inscrivez sur notre site ou lorsque vous utilisez nos services. Ces informations peuvent inclure votre nom, votre adresse e-mail, votre adresse postale, votre numéro de téléphone et d'autres informations nécessaires pour vous fournir nos services.</p></li>
                <li><h1>Utilisation des informations personnelles :</h1></li>
                <li><p>Nous utilisons les informations personnelles que nous collectons pour vous fournir nos services, pour améliorer nos services, pour personnaliser votre expérience utilisateur et pour vous envoyer des informations sur nos produits et services. Nous ne partagerons pas vos informations personnelles avec des tiers sans votre consentement préalable.</p></li>
                <li><h1>Protection des informations personnelles :</h1></li>
                <li><p>Nous prenons des mesures de sécurité pour protéger les informations personnelles que nous collectons contre tout accès, utilisation ou divulgation non autorisée. Nous ne stockons pas vos informations personnelles plus longtemps que nécessaire pour fournir nos services ou pour se conformer aux exigences légales.</p></li>
                <li><h1>Cookies :</h1></li>
                <li><p>Nous utilisons des cookies pour améliorer votre expérience utilisateur sur notre site. Les cookies sont des petits fichiers de données qui sont stockés sur votre ordinateur ou votre appareil mobile lorsque vous visitez notre site. Vous pouvez configurer votre navigateur pour refuser les cookies ou pour vous informer quand un cookie est envoyé.</p></li>
                <li><h1>Modification de notre politique de confidentialité :</h1></li>
                <li><p>Nous pouvons modifier cette politique de confidentialité de temps à autre. Les modifications seront effectives dès leur publication sur notre site. Nous vous encourageons à consulter régulièrement notre politique de confidentialité pour être informé des changements éventuels.</p></li>
                <li><h1>Droit d'accès et de rectification :</h1></li>
                <li><p>Vous avez le droit d'accéder à vos informations personnelles et de les rectifier si nécessaire. Vous pouvez exercer ce droit en nous contactant à l'adresse e-mail suivante : [adresse e-mail] ou en nous écrivant à l'adresse postale suivante : [adresse postale].</p></li>
                <li><h1>Contact :</h1></li>
                <li><p>Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, vous pouvez nous contacter à l'adresse e-mail suivante : [adresse e-mail].</p></li>
              </ul>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default Confidentiality;
