import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import CV from './CV';
import Biography from './Biography';
import './style.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/cv" className="nav-link">CV</Link>
          <Link to="/biography" className="nav-link">Biography</Link>
        </nav>
        <Routes>
          <Route path="/cv" element={<CV />} />
          <Route path="/biography" element={<Biography />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
