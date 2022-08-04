import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BackofficeCards from '../../components/BackofficeCards/BackofficeCards.jsx';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <>
      <Header />
      <Routes>
        <Route path='/' element={<BackofficeCards />} />
        {/*<Route path='/backoffice' element={<Backoffice />} /> */}
      </Routes>
    </>
  );
};

export default Backoffice;
