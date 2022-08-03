import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NewsListBackoffice from './NewsListBackoffice/NewsListBackoffice';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <Routes>
      {/* <Route path='/' element={<Backoffice />} />
        <Route path='/backoffice' element={<Backoffice />} /> */}
      <Route path='novedades' element={<NewsListBackoffice />} />
    </Routes>
  );
};

export default Backoffice;
