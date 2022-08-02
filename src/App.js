import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Profile from './pages/Profile';
import Footer from './components/Footer/Footer';
import Contacts from './pages/Backoffice/Contacts';

function App() {
  return (
    <Router>
      {
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='/my-profile' element={<Profile />} />
          <Route path='/backoffice/contacts' element={<Contacts />} />
        </Routes>
      }
      <Footer />
    </Router>
  );
}

export default App;
