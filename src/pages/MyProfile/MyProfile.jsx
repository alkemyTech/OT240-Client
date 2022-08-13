import React from 'react';

import MyProfileComponent from '../../components/MyProfileComponent/MyProfileComponent.jsx';
import Form from '../../components/Form/Form.jsx';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';

const MyProfile = () => {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<MyProfileComponent />} />
      <Route path='//editar' element={<Form />} />
    </Routes>
    <Footer/>
  </>
  );
};

export default MyProfile;