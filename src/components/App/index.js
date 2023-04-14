import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/accueil" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
