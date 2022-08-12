import React from 'react';
import Contacts from '../../components/Contacts/Contacts';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BackofficeCards from '../../components/BackofficeCards/BackofficeCards.jsx';
import NewsListBackoffice from './NewsListBackoffice/NewsListBackoffice';
import Categories from '../../components/Categories/Categories';
import UsersBackoffice from '../../components/Users/UsersBackoffice';
import ActivitiesRoutes from './subroutes/ActivityRoutes';
import TestimonialRoutes from './subroutes/TestimonialRoutes';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <>
      <Header />
      <Routes>
        <Route path='/' element={<BackofficeCards />} />
        <Route path='/novedades/*' element={<NewsListBackoffice />} />
        <Route path='/testimonios/*' element={<TestimonialRoutes />} />
        <Route path='/categorias' element={<Categories />} />
        <Route path='/contactos' element={<Contacts />} />
        <Route path='/actividades/*' element={<ActivitiesRoutes />} />
        <Route path='/usuarios' element={<UsersBackoffice />} />
      </Routes>
    </>
  );
};

export default Backoffice;
