import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import Faq from '../WebsiteInfos/faq';
import Confidentiality from '../WebsiteInfos/confidentiality';
import Contact from '../WebsiteInfos/contact';
import Mentions from '../WebsiteInfos/mentions';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/termes-de-confidentialite" element={<Confidentiality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Mentions />} />
      </Routes>
    </div>
  );
}

export default App;
