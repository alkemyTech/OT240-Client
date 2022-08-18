import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contacts from '../../components/Contacts/Contacts';
import Header from '../../components/Header/Header';
import BackofficeCards from '../../components/BackofficeCards/BackofficeCards.jsx';
import NewsListBackoffice from './NewsListBackoffice/NewsListBackoffice';
import Categories from './Categories/Categories';
import UsersBackoffice from '../../components/Users/UsersBackoffice';
import Organization from './Organization/Organization';
import Form from '../../components/Form/Form';
import ActivitiesRoutes from './subroutes/ActivityRoutes';
import TestimonialRoutes from './subroutes/TestimonialRoutes';
import MembersBackoffice from './MembersBackoffice/MembersBackoffice';

const Backoffice = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<BackofficeCards />} />
        <Route path='/novedades/*' element={<NewsListBackoffice />} />
        <Route path='/testimonios/*' element={<TestimonialRoutes />} />
        <Route path='/categorias/*' element={<Categories />} />
        <Route path='/contactos' element={<Contacts />} />
        <Route path='/actividades/*' element={<ActivitiesRoutes />} />
        <Route path='/usuarios' element={<UsersBackoffice />} />
        <Route path='/usuarios/editar' element={<Form />} />
        <Route path='/usuarios/crear' element={<Form />} />
        <Route path='/miembros/*' element={<MembersBackoffice />} />
        <Route path='/organizacion/*' element={<Organization />} />
      </Routes>
    </>
  );
};

export default Backoffice;
