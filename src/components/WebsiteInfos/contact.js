import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import './styles.scss';

function Contact() {
  return (
    <><AppHeader />
      <div className="websiteinfos-sumary">
        <div className="websiteinfos-infos-div">
          <div className="websiteinfos-main-text">
            <h1>Nous sommes ravis de vous aider !</h1>
            <p>  N'hésitez pas à nous contacter si vous avez des questions, des commentaires ou des préoccupations concernant notre site internet.</p>
          </div>
          <div className="websiteinfos-second-text">
              <ul>
                <li><h1>Vous pouvez nous contacter de plusieurs manières :</h1></li>
                <li><h1>Par e-mail :</h1></li>
                <li><p>Envoyez-nous un e-mail à [adresse e-mail] et nous vous répondrons dans les plus brefs délais.</p></li>
                <li><h1>Par téléphone :</h1></li>
                <li><p>Appelez-nous au [numéro de téléphone] pendant les heures d'ouverture et nous serons heureux de vous aider.</p></li>
                <li><h1>Par courrier :</h1></li>
                <li><p>Si vous préférez écrire, vous pouvez nous envoyer un courrier à l'adresse suivante : [adresse postale].</p></li>
                <li><h1>Vous pouvez également nous suivre sur les réseaux sociaux pour rester informé des dernières nouvelles et des promotions en cours.</h1></li>
                <li><h1>Nous sommes là pour vous aider et nous nous engageons à répondre à toutes vos demandes dans les plus brefs délais. Nous apprécions votre intérêt pour notre site internet et nous sommes impatients de vous aider !</h1></li>
              </ul>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default Contact;
