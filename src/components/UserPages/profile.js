import './styles.scss';
import firstimage from '../../assets/img/first-image.png';
import userimage from '../../assets/img/user.jpg';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

function UserProfile() {
  return (
    <><AppHeader />
      <div className="user-profile">
        <div className="infos">
          <div className="user-part">
            <div className="user-images">
              <div className="main-image">
                <img src={userimage} alt="main-image" />
              </div>
            </div>
            <div className="user-description">
              <h1>Vicky</h1>
              <p>Phasellus vitae elementum nulla, vel tincidunt lectus. Phasellus cursus id mauris eget vulputate. Suspendisse efficitur tellus vel leo aliquam dapibus id sed erat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam eros, porta sed dui eget, porta aliquet sapien. Aliquam sollicitudin metus nec consequat fermentum. Phasellus vitae elementum nulla, vel tincidunt lectus. Phasellus cursus id mauris eget vulputate. Suspendisse efficitur tellus vel leo aliquam dapibus id sed erat.
              Curabitur diam eros, porta sed dui eget, porta aliquet sapien.Curabitur diam eros, porta sed dui eget, porta aliquet sapien. Curabitur diam eros, porta sed dui eget, porta aliquet sapien.
              </p>
              <h1 className="contact"> <span>Contacter le propriétaire</span> </h1>
            </div>
          </div>
          <div className="dog-part">
            <div className="dog-images">
              <div className="main-image">
                <img src={firstimage} alt="main-image" />
              </div>
            </div>
            <div className="dog-infos">
              <div className="dog-description">
                <h1><a href="/snoopy">Snoopy &#8592; </a></h1>
                <p>Phasellus vitae elementum nulla, vel tincidunt lectus. Phasellus cursus id mauris eget vulputate. Suspendisse efficitur tellus vel leo aliquam dapibus id sed erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam eros, porta sed dui eget, porta aliquet sapien. Aliquam sollicitudin metus nec consequat fermentum. Phasellus vitae elementum nulla, vel tincidunt lectus. Phasellus cursus id mauris eget vulputate. Suspendisse efficitur tellus vel leo aliquam dapibus id sed erat. 
                </p>
              </div>
              <ul>
                <li>
                  <h2>Age</h2>
                  <p>2 ans</p>
                </li>
                <li>
                  <h2>Race</h2>
                  <p>West Highland white terrier</p>
                </li>
                <li>
                  <h2>Hobbies</h2>
                  <ul className="hobbies">
                    <li>Voler des chaussettes</li>
                    <li>Aboyer sur le facteur</li>
                    <li>Courir dans tous les sens</li>
                    <li>Se déguiser en Idefix</li>
                  </ul>
                </li>
                <li>
                  <h2>Département</h2>
                </li>
                <p>Loiret</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
{/*         <img src={dog} alt="logo" /> */}
      <AppFooter />
    </>
  );
}

export default UserProfile;
