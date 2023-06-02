import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { deleteDog } from '../../../actions/profiles';
import { useDispatch} from 'react-redux';
import dogprofile from '../../../assets/img/dogprofile.png';
import '../styles.scss';

const AccountDogCard = ({
  name,
  age,
  race,
  main_picture,
  personality,
  slug,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (slug) => {
    dispatch(deleteDog(slug));
  };

  return (
    <div className="account-card">
      <div className="account-card-header">
        <div className="account-title">
          {name ? (
            <h1>{name}</h1>
          ) : (
            <h1>Nom non renseigné</h1>
          )}
        </div>
        <div className="account-delete-button">
          <button onClick={() => handleDelete(slug)}>x</button>
        </div>
      </div>
      <div className="account-card-image">
        {main_picture ? (
          <img src={`http://caroline-georges-server.eddi.cloud:8080/uploads/pictures/${main_picture}`} alt="main-image" />
        ) : (
          <img src={dogprofile} alt="fourth-image"/>
          )}
        </div>
      <div className="account-card-content">
        <ul className="account-infos">
          <li>
            {name ? (
              <h1>{name}</h1>
            ) : (
              <h1>Nom</h1>
            )}
          </li>
          <li><h1>Images</h1></li>
          <li>
            {age ? (
              <h1>{age} ans</h1>
            ) : (
              <h1>Age</h1>
            )}
          </li>
          <li>
            {race ? (
              <h1>{race}</h1>
            ) : (
              <h1>Race</h1>
            )}
          </li>
          <li><h1>Hobbies</h1></li>
          <li>
            {personality ? (
              <h1>{personality}</h1>
            ) : (
              <h1>Personnalité</h1>
            )}
          </li>
          <li><h1>Description</h1></li>
        </ul>
      </div>
      <div className="account-modification-link">
        <NavLink
          to={`/dogedit/chien/${slug}`}
        >
          Modifier la fiche
        </NavLink>
        <NavLink
          to={`/chien/${slug}`}
        >
          Consulter
        </NavLink>
      </div>
    </div>
  );
};

AccountDogCard.propTypes = {
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  main_picture: PropTypes.string,
  personality: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

AccountDogCard.defaultProps = {
  isLogged: false,
  main_picture: null,
};
export default AccountDogCard;
