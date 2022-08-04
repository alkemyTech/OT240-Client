import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Login from '../../components/Login/Login.jsx';

const Public = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/login' element={<Login />} />
          {/* <Route path='/' element={<Home />} />
          <Route path='/registro' element={<Testimonials />} />
          <Route path='/testimonios' element={<Testimonials />} />
          <Route path='/nosotros' element={<News />} />
          <Route path='/novedades' element={<News />} />
          <Route path='/contacto' element={<News />} />
          <Route path='/contribuye' element={<News />} />
          <Route path='/staff' element={<News />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default Public;
