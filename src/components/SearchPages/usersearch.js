import './styles.scss';
import search from '../../assets/img/search.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import user from '../../assets/img/user.jpg';

function SearchUser() {
  return (
    <><AppHeader />
        <div id="user-search-page">
          <div className="search-div">
            <div id="user-searchbar">
              <input type="text" placeholder="Rechercher" />
              <a href="#">
              <img src={search} alt="search-image" />
              </a>
            </div>
            <div className="cards">
              <div className="card">
                <img src={user} alt="main-image" />
                <div className="card-content">
                  <h1>Vicky</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="/vicky" class="button">
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={user} alt="main-image" />
                <div className="card-content">
                  <h1>Vicky</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="/vicky" class="button">
                  </a>
                </div>
              </div>
              <div className="card">
              <img src={user} alt="main-image" />
                <div className="card-content">
                  <h1>Vicky</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="/vicky" class="button"></a>
                </div>
              </div>
              <div className="card">
              <img src={user} alt="main-image" />
                <div className="card-content">
                  <h1>Vicky</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="/vicky" class="button"></a>
                </div>
              </div>
              <div className="card">
              <img src={user} alt="main-image" />
                <div className="card-content">
                  <h1>Vicky</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="#" class="button"></a>
                </div>
              </div>
              <div className="card">
              <img src={user} alt="main-image" />
                <div className="card-content">
                  <h1>Vicky</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="#" class="button"></a>
                </div>
              </div>
              <div className="card">
              <img src={user} alt="main-image" />
                <div className="card-content">
                  <h1>Vicky</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="#" class="button"></a>
                </div>
              </div>
              <div className="card">
              <img src={user} alt="main-image" />
                <div className="card-content">
                  <h1>Vicky</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="#" class="button"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <AppFooter />
    </>
  );
}

export default SearchUser;
