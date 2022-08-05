import React from 'react';
import Contacts from '../../components/Contacts/Contacts';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BackofficeCards from '../../components/BackofficeCards/BackofficeCards.jsx';
import { TestimonialBackoffice } from '../../components/testimonials/TestimonialBackoffice';
import NewsListBackoffice from './NewsListBackoffice/NewsListBackoffice';

import Categories from '../../components/Categories/Categories';
import { ActivitiesBackoffice } from '../../components/activities/ActivitiesBackoffice';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <>
      <Header />
      <Routes>
        <Route path='/' element={<BackofficeCards />} />
        <Route path='novedades' element={<NewsListBackoffice />} />
        <Route path='/testimonios' element={<TestimonialBackoffice />} />
        <Route path='/categorias' element={<Categories />} />
        <Route path='/contactos' element={<Contacts />} />
        <Route path='/actividades' element={<ActivitiesBackoffice />} />
      </Routes>
    </>
  );
};

export default Backoffice;
