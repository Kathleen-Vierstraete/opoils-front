import './styles.scss';
import search from '../../assets/img/search.png';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import firstimage from '../../assets/img/first-image.png';

function SearchDog() {
  return (
    <><AppHeader />
        <div id="dog-search-page">
          <div className="search-div">
            <div id="dog-searchbar">
              <input type="text" placeholder="Rechercher" />
              <a href="#">
              <img src={search} alt="search-image" />
              </a>
            </div>
            <div className="cards">
              <div className="card">
                <img src={firstimage} alt="main-image" />
                <div className="card-content">
                  <h1>Snoopy</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="/snoopy" class="button">
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={firstimage} alt="main-image" />
                <div className="card-content">
                  <h1>Snoopy</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="/snoopy" class="button">
                  </a>
                </div>
              </div>
              <div className="card">
              <img src={firstimage} alt="main-image" />
                <div className="card-content">
                  <h1>Snoopy</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="/snoopy" class="button"></a>
                </div>
              </div>
              <div className="card">
              <img src={firstimage} alt="main-image" />
                <div className="card-content">
                  <h1>Snoopy</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="/snoopy" class="button"></a>
                </div>
              </div>
              <div className="card">
              <img src={firstimage} alt="main-image" />
                <div className="card-content">
                  <h1>Snoopy</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="/snoopy" class="button"></a>
                </div>
              </div>
              <div className="card">
              <img src={firstimage} alt="main-image" />
                <div className="card-content">
                  <h1>Snoopy</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="#" class="button"></a>
                </div>
              </div>
              <div className="card">
              <img src={firstimage} alt="main-image" />
                <div className="card-content">
                  <h1>Snoopy</h1>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                  </p>
                  <a href="#" class="button"></a>
                </div>
              </div>
              <div className="card">
              <img src={firstimage} alt="main-image" />
                <div className="card-content">
                  <h1>Snoopy</h1>
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

export default SearchDog;
