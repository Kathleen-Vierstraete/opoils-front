import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findDog } from 'src/selectors/dogs'
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
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [age, setAge] = useState('');
  const [race, setRace] = useState('');
  const [personality, setPersonality] = useState('');
  const [presentation, setPresentation] = useState('');

  const handleSubmitInfos = (event) => {
    event.preventDefault();
    const dog = { name, size, age, race, personality, presentation };
      dispatch(addNewDog(dog));
    console.log('submitNewdog');
  };

  const { slug } = useParams();
  const dog = useSelector((state) => findDog(state.profiles.dogs, slug));
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
