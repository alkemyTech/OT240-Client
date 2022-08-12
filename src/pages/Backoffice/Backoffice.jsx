import React from 'react';
import Contacts from '../../components/Contacts/Contacts';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BackofficeCards from '../../components/BackofficeCards/BackofficeCards.jsx';
import { TestimonialBackoffice } from '../../components/testimonials/TestimonialBackoffice';
import NewsListBackoffice from './NewsListBackoffice/NewsListBackoffice';
import Categories from './Categories/Categories';
import { ActivitiesBackoffice } from '../../components/activities/ActivitiesBackoffice';
import UsersBackoffice from '../../components/Users/UsersBackoffice';
import Organization from './Organization/Organization';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <>
      <Header />
      <Routes>
        <Route path='/' element={<BackofficeCards />} />
        organizacion
        <Route path='/testimonios' element={<TestimonialBackoffice />} />
        <Route path='/categorias/*' element={<Categories />} />
        <Route path='/contactos' element={<Contacts />} />
        <Route path='/actividades' element={<ActivitiesBackoffice />} />
        <Route path='/usuarios' element={<UsersBackoffice />} />
        <Route path='/organizacion/*' element={<Organization />} />
      </Routes>
    </>
  );
};

export default Backoffice;
