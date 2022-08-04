import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './Contacts';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <Router>
      <Routes>
        {/* <Route path='/' element={<Backoffice />} />
        <Route path='/backoffice' element={<Backoffice />} /> */}
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default Backoffice;
