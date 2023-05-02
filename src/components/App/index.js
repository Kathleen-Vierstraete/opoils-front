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
import UserProfile from '../UserPages/profile';
import UserEdit from '../UserPages/editprofile';
import UserSearch from '../SearchPages/usersearch';
import DogSearch from '../SearchPages/dogsearch';
import Loading from './Loading';

import { fetchMembersProfiles, fetchDogsProfiles, sendNewAccount, submitNewDog, fetchAccountDogsProfiles } from '../../actions/profiles';
import { fetchRegions, fetchDepartements } from '../../actions/location';
import { changeLoginField, submitLogin } from '../../actions/user';

function App() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.profiles.dogs);
  const members = useSelector((state) => state.profiles.members);
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const usernameValue = useSelector((state) => state.user.username);
  const isLogged = useSelector((state) => state.user.isLogged);
  const dogName = useSelector((state) => [...state.profiles.accountDogs, dogName]);
  const accountDogs = useSelector((state) => state.profiles.accountDogs);
  const accountMember = useSelector((state) => state.profiles.accountMember);
  const isProfilesLoaded = useSelector((state) => state.profiles.isProfilesLoaded);

  useEffect(() => {
    dispatch(fetchRegions());
    dispatch(fetchDepartements());

    if (isLogged) {
      dispatch(fetchMembersProfiles());
      dispatch(fetchDogsProfiles());
      dispatch(fetchAccountDogsProfiles());
    }
  }, [dispatch, isLogged]);

  if (!isProfilesLoaded && isLogged) {
    return <Loading />;
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/accueil" element={<HomePage isLogged={isLogged} />} />
        <Route
          path="/connexion"
          element={(
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
            />
          )}
        />
        <Route path="/faq" element={<Faq isLogged={isLogged} />} />
        <Route path="/politique-de-confidentialite" element={<Confidentiality isLogged={isLogged} />} />
        <Route path="/contact" element={<Contact isLogged={isLogged} />} />
        <Route path="/mentions-legales" element={<Mentions isLogged={isLogged} />} />
        <Route
          path="/inscription"
          element={(
            <Signin
              email={emailValue}
              password={passwordValue}
              username={usernameValue}
              isLogged={isLogged}
              changeField={(newValue, identifier) => {
                dispatch(changeLoginField(newValue, identifier));
              }}
              handleSignin={() => {
                dispatch(sendNewAccount(emailValue, usernameValue, passwordValue));
              }}
            />
          )}
        />

        <Route 
          path="/mon-compte" 
          element={(
            <Account
              accountDogs={accountDogs}
              accountMember={accountMember}
              isLogged={isLogged} 
              handleNewDog={() => {
                dispatch(submitNewDog());
              }}
            />
            )}
            />
        <Route path="/chien/:slug" element={<DogProfile isLogged={isLogged} dogs={dogs} />} />
        <Route path="/dogedit/chien/:slug" element={<DogEdit isLogged={isLogged} />} />
        <Route path="/useredit/:slug" element={<UserEdit isLogged={isLogged} accountDogs={accountDogs} accountMember={accountMember} />} />
        <Route path="/:slug" element={<UserProfile isLogged={isLogged} members={members} />} />
        <Route path="/recherche-de-chien" element={<DogSearch dogs={dogs} isLogged={isLogged} />} />
        <Route path="/recherche-de-proprietaire" element={<UserSearch members={members} isLogged={isLogged} />} />
      </Routes>
    </div>
  );
}

export default App;
