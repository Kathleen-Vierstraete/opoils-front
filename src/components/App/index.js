import './styles.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { fetchProfiles } from '../../actions/profiles';
import { changeLoginField, submitLogin } from '../../actions/user';

function App() {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.list);
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.logged);
  const nickname = useSelector((state) => state.user.nickname);

  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/politique-de-confidentialite" element={<Confidentiality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route
          path="/connexion"
          element={
            <Login
              email={emailValue}
              password={passwordValue}
              changeField={(newValue, identifier) => {
                dispatch(changeLoginField(newValue, identifier));
              }}
              handleLogin={() => {
                dispatch(submitLogin());
              }}
              handleLogout={() => {
                console.log('handleLogout');
              }}
              isLogged={isLogged}
              loggedMessage={`Au revoir ${nickname}!`}
            />
              }
        />
        <Route path="/inscription" element={<Signin />} />
        <Route path="/mon-compte" element={<Account />} />
        <Route path="/:slug" element={<DogProfile />} />
        <Route path="/dogedit" element={<DogEdit />} />
        <Route path="/ajouter-un-chien" element={<DogAdd />} />
        <Route path="/useredit" element={<UserEdit />} />
        <Route path="/vicky" element={<UserProfile />} />
        <Route path="/recherche-de-chien" element={<DogSearch profiles={profiles} />} />
        <Route path="/recherche-de-proprietaire" element={<UserSearch profiles={profiles} />} />
      </Routes>
    </div>
  );
}

export default App;
