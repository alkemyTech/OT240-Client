import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Login from '../../components/Login/Login.jsx';
import Register from '../../components/Register/Register.jsx';
import { Activity } from '../../components/activities/Activity.jsx';
import { Activities } from '../../components/activities/Activities.jsx';

const Public = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Register />} />
          <Route path='/actividades' element={<Activities />} />
          {/* <Route path='/' element={<Home />} />
          <Route path='/testimonios' element={<Testimonials />} />
          <Route path='/nosotros' element={<News />} />
          <Route path='/novedades' element={<News />} />
          <Route path='/contacto' element={<News />} />
          <Route path='/contribuye' element={<News />} />
          <Route path='/staff' element={<News />} /> */}
          <Route path='/actividades/:id' element={<Activity />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Public;
