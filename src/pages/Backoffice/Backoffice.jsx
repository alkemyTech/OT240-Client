import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { TestimonialBackoffice } from '../../components/testimonials/TestimonialBackoffice';

import NewsListBackoffice from './NewsListBackoffice/NewsListBackoffice';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <Routes>
      {/* <Route path='/' element={<Backoffice />} />
        <Route path='/backoffice' element={<Backoffice />} /> */}
      <Route path='novedades' element={<NewsListBackoffice />} />
      <Route path='/testimonios' element={<TestimonialBackoffice />} />
    </Routes>
  );
};

export default Backoffice;
