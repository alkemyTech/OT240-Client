import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BackofficeCards from '../../components/BackofficeCards/BackofficeCards.jsx';
import Categories from '../../components/Categories/Categories';
const Backoffice = () => {
  return (
    // LayoutBackoffice
    <>
      <Header />
      <Routes>
        <Route path='/' element={<BackofficeCards />} />
        <Route path='/categories' element={<Categories />} />
        {/*<Route path='/backoffice' element={<Backoffice />} /> */}
      </Routes>
    </>
  );
};

export default Backoffice;
