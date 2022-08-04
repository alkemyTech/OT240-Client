import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from '../../components/Contacts/Contacts';
import Header from '../../components/Header/Header';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Backoffice />} />
        <Route path='/backoffice' element={<Backoffice />} /> */}
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  );
};

export default Backoffice;
