import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TestimonialBackoffice } from '../../components/testimonials/Testimonial';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    
      <Routes>
        {/* <Route path='/' element={<Backoffice />} />
        <Route path='/backoffice' element={<Backoffice />} /> */}
        <Route path='/testimonios' element={<TestimonialBackoffice />} />
      </Routes>
    
  );
};

export default Backoffice;
