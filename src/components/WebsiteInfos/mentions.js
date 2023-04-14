import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import './styles.scss';

function Mentions() {
  return (
    <><AppHeader />
      <div id="website-sumary">
        <div id="infos-div">
          <div id="main-text">
            <h1>Mentions légales</h1>
            <p> Ce site est édité par [Nom de la société], société [forme juridique] au capital de [montant] euros, immatriculée au Registre du Commerce et des Sociétés de [ville] sous le numéro [numéro RCS], dont le siège social est situé à [adresse].</p>
          </div>
          <div id="second-text">
          <ul>
            <li><h1>Directeur de la publication :</h1></li>
            <li><a>[Nom du directeur de la publication]</a></li>
            <li><h1>Adresse email</h1></li>
            <li><a>[Adresse email]</a></li>
            <li><h1>Hébergeur du site :</h1></li>
            <li><a>[Nom de l'hébergeur]</a></li>
          </ul>
            <h2>Le présent site est soumis au droit français.</h2>
          <ul>
            <li><h1>Protection des données personnelles :</h1></li>
            <li><p>Les données personnelles collectées sur ce site sont destinées à [Nom de la société]. Elles sont collectées dans le but de [objectifs de la collecte]. Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous écrivant à l'adresse suivante : [adresse postale] ou par email à [adresse email].</p></li>
            <li><h1>Propriété intellectuelle :</h1></li>
            <li><p>Tous les éléments du présent site (notamment les textes, graphismes, logos, vidéos, icônes, sons, logiciels...) sont la propriété exclusive de [Nom de la société] ou de ses partenaires et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction ou utilisation totale ou partielle de ces éléments est strictement interdite sans autorisation préalable et écrite de [Nom de la société].</p></li>
            <li><h1>Liens hypertextes :</h1></li>
            <li><p>Les liens hypertextes présents sur ce site et renvoyant à des sites tiers ne sauraient engager la responsabilité de [Nom de la société]. Nous déclinons toute responsabilité quant au contenu de ces sites tiers.</p></li>
            <li><h1>Droits d'auteur :</h1></li>
            <li><p>Les contenus publiés sur ce site sont la propriété exclusive de [Nom de la société]. Toute reproduction ou utilisation totale ou partielle de ces contenus est strictement interdite sans autorisation préalable et écrite de [Nom de la société].</p></li>
          </ul>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default Mentions;
