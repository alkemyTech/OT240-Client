import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../../../components/Form/Form';
import { TestimonialBackoffice } from '../../../components/testimonials/TestimonialBackoffice';

const TestimonialRoutes = () => {
    return (
      <Routes>
        <Route path='/crear' element={<Form />} />
        <Route path='/editar' element={<Form />} />
        <Route path='/' element={<TestimonialBackoffice/>} />
      </Routes>
    );
  };
  
  export default TestimonialRoutes;

