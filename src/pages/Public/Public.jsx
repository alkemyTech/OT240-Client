import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Login from '../../components/Login/Login.jsx';
import Register from '../../components/Register/Register.jsx';
import News from './News/News';
import NewsDetail from './NewsDetail/NewsDetail';
import { Activity } from '../../components/activities/Activity.jsx';
import { Activities } from '../../components/activities/Activities.jsx';
import ContactMe from '../../components/ContactMe/ContactMe.jsx';
import Home from './Home/Home.jsx';
import Members from './Members/Members.jsx';
import TestimonialPublic from './testimonial/TestimonialPublic.jsx';

const Public = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/nosotros' element={<Members />} />
        <Route path='novedades' element={<News />} />
        <Route path='novedades/:id' element={<NewsDetail />} />
        <Route path='/testimonios/*' element={<TestimonialPublic />} />
        <Route path='/contacto' element={<ContactMe />} />
        <Route path='/actividades' element={<Activities />} />
        <Route path='/actividades/:id' element={<Activity />} />
        {/* <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Register />} />
          <Route path='/actividades' element={<Activities />} />
          {/* <Route path='/' element={<Home />} />
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
