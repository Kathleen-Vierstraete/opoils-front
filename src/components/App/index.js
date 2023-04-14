import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import Faq from '../WebsiteInfos/faq';
import Confidentiality from '../WebsiteInfos/confidentiality';
import Contact from '../WebsiteInfos/contact';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/termes-de-confidentialite" element={<Confidentiality />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
