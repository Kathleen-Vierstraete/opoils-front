import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import Faq from '../WebsiteInfos/faq';
import Confidentiality from '../WebsiteInfos/confidentiality';
import Contact from '../WebsiteInfos/contact';
import Mentions from '../WebsiteInfos/mentions';
import Login from '../Authentification/login';
import Signin from '../Authentification/signin';
import Account from '../Account';
import DogProfile from '../DogPages/profile';
import DogEdit from '../DogPages/editprofile';
import DogAdd from '../DogPages/addprofile';
import UserProfile from '../UserPages/profile';
import UserEdit from '../UserPages/editprofile';
import UserSearch from '../SearchPages/usersearch';
import DogSearch from '../SearchPages/dogsearch';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/termes-de-confidentialite" element={<Confidentiality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Signin />} />
        <Route path="/mon-compte" element={<Account />} />
        <Route path="/snoopy" element={<DogProfile />} />
        <Route path="/dogedit" element={<DogEdit />} />
        <Route path="/ajouter-un-chien" element={<DogAdd />} />
        <Route path="/useredit" element={<UserEdit />} />
        <Route path="/vicky" element={<UserProfile />} />
        <Route path="/recherche-de-chien" element={<DogSearch />} />
        <Route path="/recherche-de-proprietaire" element={<UserSearch />} />
      </Routes>
    </div>
  );
}

export default App;
