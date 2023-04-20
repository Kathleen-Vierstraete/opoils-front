import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import './styles.scss';

function Faq({isLogged}) {
  return (
    <><AppHeader isLogged={isLogged} />
      <div className="websiteinfos-sumary">
        <div className="websiteinfos-infos-div">
          <div className="websiteinfos-main-text">
            <h1>Foire aux questions</h1>
            <p> Bienvenue sur la foire aux questions de notre site internet de rencontre pour chien ! Nous avons rassemblé ci-dessous les questions les plus fréquemment posées par nos utilisateurs, accompagnées de leurs réponses détaillées. Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter.</p>
          </div>
          <div className="websiteinfos-second-text">
              <ul>
                <li><h1>Q : Comment puis-je créer un profil pour mon chien sur votre site internet ?</h1></li>
                <li><p>R : Pour créer un profil pour votre chien sur notre site internet, veuillez suivre les étapes suivantes : (1) Créez un compte en fournissant vos informations personnelles ; (2) Ajoutez les informations de votre chien, y compris sa race, son âge et sa personnalité ; (3) Ajoutez des photos de votre chien. Une fois que votre profil est créé, vous pouvez commencer à chercher d'autres chiens compatibles pour des rencontres.</p></li>
                <li><h1>Q : Est-il possible de rechercher des chiens par région ou par race ?</h1></li>
                <li><p>R : Oui, vous pouvez rechercher des chiens par région ou par race en utilisant les options de recherche avancée sur notre site internet. Vous pouvez également filtrer les résultats en fonction de l'âge, du sexe et d'autres critères de recherche.</p></li>
                <li><h1>Q : Comment puis-je communiquer avec d'autres propriétaires de chiens sur votre site internet ?</h1></li>
                <li><p>R : Vous pouvez communiquer avec d'autres propriétaires de chiens sur notre site internet en utilisant notre messagerie intégrée. Une fois que vous avez trouvé un chien qui vous intéresse, vous pouvez envoyer un message à son propriétaire pour organiser une rencontre.</p></li>
                <li><h1>Q : Mon chien a-t-il besoin d'être vacciné pour participer aux rencontres organisées sur votre site internet ?</h1></li>
                <li><p>R : Nous recommandons fortement que tous les chiens participant aux rencontres sur notre site internet soient vaccinés et en bonne santé. Nous vous encourageons à consulter votre vétérinaire pour vous assurer que votre chien est à jour sur ses vaccins avant de participer à une rencontre.</p></li>
              </ul>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default Faq;
