import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SpaceWeather from './components/SpaceWeather';
import Home from './components/Home';
import Settings from './components/Settings';
import './styles.css';
import Photo from './components/Photo';

function App() {
  const [pages, setPages] = useState([
    { name: 'Home', path: '/' },
    { name: 'Space Weather', path: '/space-weather' },
    { name: 'Photo of the Day', path: '/POTD' }
  ]);

  const addPage = (name, path) => {
    setPages([...pages, { name, path }]);
  };

  return (
    <Router>
      <div className="App">
        <nav className="menu">
          <ul>
            {pages.map((page, index) => (
              <li key={index}>
                <Link to={page.path}>{page.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/settings">⚙️ Settings</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/space-weather" element={<SpaceWeather />} />
          <Route path='/POTD' element={<Photo />} />
          <Route path="/settings" element={<Settings addPage={addPage} />} />
          {/* Add more dynamic routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
