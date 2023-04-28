import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import { addNewDog } from '../../actions/profiles';
import PropTypes from 'prop-types';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import AccountDogCard from './AccountDogCard';
import AccountUserCard from './AccountUserCard';
import profile from '../../assets/img/profile.png';
import InfosField from '../DogPages/InfosField';


const Account = ({
  isLogged,
  accountDogs,
  accountMember,
  handleNewDog,

}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [age, setAge] = useState('');
  const [race, setRace] = useState('');
  const [personality, setPersonality] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const dog = { name, size, age, race, personality };
      dispatch(addNewDog(dog));
    console.log('submitNewdog');
  };
  const handleSubmitDog = (evt) => {
    evt.preventDefault();
    handleNewDog();
  };
  return (
    <>
      <AppHeader isLogged={isLogged} />
      <div id="account-page">
        <div id="account-div">
          <div className="account-cards">
            {accountMember.map((member) => (
              <AccountUserCard key={member.id} {...member} />
            ))}
            {accountDogs.map((accountDog) => (
              <AccountDogCard key={accountDog.id} {...accountDog} />
            ))}
            <div className="account-card">
              <div className="account-card-header">
                <div className="account-title">
                  <h1>Créer une fiche chien</h1>
                </div>
                <div className="account-delete-button">
                </div>
              </div>
              <div className="account-card-image">
                <img src={profile} alt="main-image" />
              </div>
              <div className="account-modification-link">
              <form >
                <InfosField
                  name={name}
                  size={size}
                  age={age}
                  race={race}
                  personality={personality}
                  setName={setName}
                  setSize={setSize}
                  setAge={setAge}
                  setRace={setRace}
                  setPersonality={setPersonality}
                  required
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                >
                  Ajouter les informations
                </button>
                <button
                  type="submit"
                  onClick={handleSubmitDog}
                >
                  Enregistrer ce chien
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

Account.propTypes = {
  accountDogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
  name: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleNewDog: PropTypes.func.isRequired,
};
Account.defaultProps = {
  accountDogs: null,
};
export default Account;
