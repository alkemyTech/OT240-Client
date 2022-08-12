import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../../../components/Form/Form';
import { Testimonials } from '../../../components/testimonials/Testimonials';

const TestimonialPublic = () => {
    return (
      <Routes>
        <Route path='/crear' element={<Form />} />
        <Route path='/editar' element={<Form />} />
        <Route path='/' element={<Testimonials/>} />
      </Routes>
    );
  };

  export default TestimonialPublic;