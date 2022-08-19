import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../../../components/Form/Form';
import { Testimonials } from '../../../components/testimonials/Testimonials';
import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute';

const TestimonialPublic = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute allowedRoles={[1, 2]} />}>
        <Route path='/crear' element={<Form />} />
      </Route>
      <Route path='/' element={<Testimonials />} />
    </Routes>
  );
};

export default TestimonialPublic;
