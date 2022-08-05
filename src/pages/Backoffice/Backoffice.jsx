import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from '../../components/Contacts/Contacts';
import Header from '../../components/Header/Header';
import { TestimonialBackoffice } from '../../components/testimonials/TestimonialBackoffice';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Backoffice />} />
        <Route path='/backoffice' element={<Backoffice />} /> */}
        <Route path='/contactos' element={<Contacts />} />
        <Route path='/testimonios' element={<TestimonialBackoffice />} />
      </Routes>
    </>
  );
};

export default Backoffice;
