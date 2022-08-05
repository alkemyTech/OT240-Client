import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BackofficeCards from '../../components/BackofficeCards/BackofficeCards.jsx';
import { TestimonialBackoffice } from '../../components/testimonials/TestimonialBackoffice';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <>
      <Header />
      <Routes>
        <Route path='/' element={<BackofficeCards />} />
        {/*<Route path='/backoffice' element={<Backoffice />} /> */}
        <Route path='/testimonios' element={<TestimonialBackoffice />} />
      </Routes>
    </>
  );
};

export default Backoffice;
