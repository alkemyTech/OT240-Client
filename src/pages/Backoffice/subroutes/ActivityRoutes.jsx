import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ActivitiesBackoffice } from '../../../components/activities/ActivitiesBackoffice';
import Form from '../../../components/Form/Form';

const ActivitiesRoutes = () => {
    return (
      <Routes>
        <Route path='/crear' element={<Form />} />
        <Route path='/editar' element={<Form />} />
        <Route path='/' element={<ActivitiesBackoffice/>} />
      </Routes>
    );
  };
  
  export default ActivitiesRoutes;

