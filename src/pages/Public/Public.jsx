import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Login from '../../components/Login/Login.jsx';
import Register from '../../components/Register/Register.jsx';
import News from './News/News';
import NewsDetail from './NewsDetail/NewsDetail';
// import NewsSlider from '../../components/NewsSlider/NewsSlider.jsx';

const Public = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Register />} />
        <Route path='novedades/:id' element={<NewsDetail />} />
        <Route path='novedades' element={<News />} />
        {/* <Route path='/' element={<Home />} />
          <Route path='/testimonios' element={<Testimonials />} />
          <Route path='/nosotros' element={<News />} />
          <Route path='/novedades' element={<News />} />
          <Route path='/contacto' element={<News />} />
          <Route path='/contribuye' element={<News />} />
          <Route path='/staff' element={<News />} /> */}
      </Routes>
      {/* <NewsSlider /> */}
      <Footer />
    </>
  );
};

export default Public;
