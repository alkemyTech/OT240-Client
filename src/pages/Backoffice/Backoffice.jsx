import React from 'react';
import Contacts from '../../components/Contacts/Contacts';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BackofficeCards from '../../components/BackofficeCards/BackofficeCards.jsx';
import { TestimonialBackoffice } from '../../components/testimonials/TestimonialBackoffice';
import Categories from '../../components/Categories/Categories';
const Backoffice = () => {
  return (
    // LayoutBackoffice
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Backoffice />} />
        <Route path='/backoffice' element={<Backoffice />} /> */}
        <Route path='/' element={<BackofficeCards />} />
        <Route path='/categorias' element={<Categories />} />
        <Route path='/contactos' element={<Contacts />} />
        {/*<Route path='/backoffice' element={<Backoffice />} /> */}
        <Route path='/testimonios' element={<TestimonialBackoffice />} />
      </Routes>
    </>
  );
};

export default Backoffice;
