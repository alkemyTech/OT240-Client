import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <Router>
      <Routes>
        {/* <Route path='/' element={<Backoffice />} />
        <Route path='/backoffice' element={<Backoffice />} /> */}
      </Routes>
    </Router>
  );
};

export default Backoffice;
