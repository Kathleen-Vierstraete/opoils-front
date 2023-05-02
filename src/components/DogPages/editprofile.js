import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { findDog } from 'src/selectors/dogs';
import { updateDogInfos, sendUpdatedDogInfos } from '../../actions/profiles';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import InfosField from './InfosField';
import ImagesField from './ImagesField';
import Hobbies from './InfosField/hobbies';
import Presentation from './InfosField/presentation';

const DogEdit = ({
  isLogged,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const dog = useSelector((state) => findDog(state.profiles.accountDogs, slug));

  const [name, setName] = useState(dog.name);
  const [size, setSize] = useState(dog.size);
  const [age, setAge] = useState(dog.age);
  const [race, setRace] = useState(dog.race);
  const [personality, setPersonality] = useState(dog.personality);
  const [presentation, setPresentation] = useState(dog.presentation);

  const handleUpdateInfosSubmit = (event) => {
    event.preventDefault();
    const newDog = { name, size, age, race, personality, presentation };
    dispatch(updateDogInfos(slug, newDog));
    dispatch(sendUpdatedDogInfos(slug));
    navigate('/mon-compte');
  };

  return (
  <><AppHeader isLogged={isLogged} />
    <div className="dog-profile">
      <div className="infos">
        <ImagesField />
        <div className="dog-infos">
          <form>
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
              setPresentation={setPresentation}
            />
            <Presentation
              presentation={presentation}
              setPresentation={setPresentation}
            />
            <button
              onClick={handleUpdateInfosSubmit}
              type="submit"
            >
              Enregistrer les modifications
            </button>
          </form>
        </div>
        <div className="dog-description">
          <form>
            <Hobbies
            />
            <button
              type="submit"
            >
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
    <AppFooter />
  </>
  );
};
DogEdit.propTypes = {
  isLogged: PropTypes.bool,
};
DogEdit.defaultProps = {
  isLogged: false,
};
export default DogEdit;
