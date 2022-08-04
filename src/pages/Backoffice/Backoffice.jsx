import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';

import { ActivitiesBackoffice } from '../../components/activities/ActivitiesBackoffice';

const Backoffice = () => {
  return (
    // LayoutBackoffice
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Backoffice />} />
        <Route path='/backoffice' element={<Backoffice />} /> */}

        <Route path='/actividades' element={<ActivitiesBackoffice />} /> 
      </Routes>
    </>
  );
};

export default Backoffice;
