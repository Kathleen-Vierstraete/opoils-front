
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findDog } from 'src/selectors/dogs';

import profile from '../../../assets/img/profile.png';

import '../styles.scss';

const ImagesField = ({
  isLogged,
}) => {
  const { slug } = useParams();
  const dog = useSelector((state) => findDog(state.profiles.dogs, slug));
  const pictures = dog.pictures;
  return (
    <div className="dog-images">
      <div className="main-image">
        <form>
          <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${dog.main_picture}`} alt="main-image" />
          <button type="submit">Enregistrer</button>
        </form>
      </div>
      <div className="other-images">
        <div className="images">
          <form>
            {/* verify if pictures are undefined or not and the option to show nothing instead of gettingg an error if empty so people can access the possibility to upload an image if there's none to begin with */}
            {pictures && pictures[0] && pictures[0].picture ? (
              <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${pictures[0]?.picture}`} alt="second-image" />
            ) : (
              <div className="empty-image-div">
                <img src={profile} alt="fourth-image"/>
                <p>Ajouter votre photo</p>
              </div>
            )}
          <button type="submit">Enregistrer</button>
          </form>
        </div>
        <div className="images">
          <form>
            {pictures && pictures[1] && pictures[1].picture ? (
              <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${pictures[1]?.picture}`} alt="second-image" />
            ) : (
              <div className="empty-image-div">
                <img src={profile} alt="fourth-image"/>
                <p>Ajouter votre photo</p>
              </div>
            )}
            <button type="submit">Enregistrer</button>
          </form>
        </div>
        <div className="images">
          <form>
            {pictures && pictures[2] && pictures[2].picture ? (
              <img src={`http://caroline-georges.vpnuser.lan:8090/uploads/pictures/${pictures[2]?.picture}`} alt="second-image" />
            ) : (
              <div className="empty-image-div">
                <img src={profile} alt="fourth-image"/>
                <p>Ajouter votre photo</p>
              </div>
            )}
            <button type="submit">Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default ImagesField;
