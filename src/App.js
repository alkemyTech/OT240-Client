import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News/News';
import Profile from './pages/Profile';
import Links from './components/Links/Links';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='page-content'>
          <Links />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/news' element={<News />} />
            <Route path='/my-profile' element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
