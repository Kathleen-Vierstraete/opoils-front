
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findDog } from 'src/selectors/dogs';

import secondimage from '../../../assets/img/second-image.png';
import thirdimage from '../../../assets/img/third-image.png';
import fourthimage from '../../../assets/img/fourth-image.png';

import '../styles.scss';

const ImagesField = ({
  isLogged,
}) => {
  const { slug } = useParams();
  const dog = useSelector((state) => findDog(state.profiles.dogs, slug));
  const pictures = dog.pictures;
  return (
    <div className="dog-images">
      <form>
        <label>Nom</label>
        <input type="nom" placeholder="Nom" required />
        <button className="button-name" type="submit">Enregistrer le nom</button>
      </form>
    <div className="main-image">
      <form>
        <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${dog.main_picture}`} alt="main-image" />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
    <div className="other-images">
      {pictures.map((picture) => (
      <div className="images" key={picture.id}>
        <form>
        <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${picture.picture}`} alt="second-image" />
        <button type="submit">Enregistrer</button>
        </form>
      </div>
      ))}
    </div>
  </div>
  );
};

export default ImagesField;
