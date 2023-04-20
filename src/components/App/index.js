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
import Loading from './Loading';

import { fetchProfiles } from '../../actions/profiles';
import { fetchRegions, fetchDepartements } from '../../actions/location';
import { changeLoginField, submitLogin, keepSession } from '../../actions/user';

function App() {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.list);
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.isLogged);
  const nickname = useSelector((state) => state.user.nickname);

  const isProfilesLoaded = useSelector((state) => state.profiles.isProfilesLoaded);

  useEffect(() => {
    dispatch(fetchProfiles());
    dispatch(fetchRegions());
    dispatch(fetchDepartements());
  }, []);

  if (!isProfilesLoaded) {
    return <Loading />;
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/accueil" element={<HomePage isLogged={isLogged} />} />
        <Route path="/faq" element={<Faq isLogged={isLogged} />} />
        <Route path="/politique-de-confidentialite" element={<Confidentiality isLogged={isLogged} />} />
        <Route path="/contact" element={<Contact isLogged={isLogged} />} />
        <Route path="/mentions-legales" element={<Mentions isLogged={isLogged} />} />
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
              isLogged={isLogged}
              loggedMessage={`Au revoir ${nickname}!`}
            />
              }
        />
        <Route path="/inscription" element={<Signin isLogged={isLogged} />} />
        <Route path="/mon-compte" element={<Account isLogged={isLogged} />} />
        <Route path="/:slug" element={<DogProfile isLogged={isLogged} />} />
        <Route path="/dogedit" element={<DogEdit isLogged={isLogged} />} />
        <Route path="/ajouter-un-chien" element={<DogAdd isLogged={isLogged} />} />
        <Route path="/useredit" element={<UserEdit isLogged={isLogged} />} />
        <Route path="/vicky" element={<UserProfile isLogged={isLogged} />} />
        <Route path="/recherche-de-chien" element={<DogSearch profiles={profiles} isLogged={isLogged} />} />
        <Route path="/recherche-de-proprietaire" element={<UserSearch profiles={profiles} isLogged={isLogged} />} />
      </Routes>
    </div>
  );
}

export default App;
