import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { TestimonialBackoffice } from '../../components/testimonials/TestimonialBackoffice';

import { ActivitiesBackoffice } from '../../components/activities/ActivitiesBackoffice';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Backoffice />} />
        <Route path='/backoffice' element={<Backoffice />} /> */}
        <Route path='/testimonios' element={<TestimonialBackoffice />} />
        <Route path='/actividades' element={<ActivitiesBackoffice />} />
      </Routes>
    </>
  );
};

export default Backoffice;
