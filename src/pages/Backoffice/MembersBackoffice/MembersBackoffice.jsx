import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../../../components/Form/Form';
import MembersTable from './MembersTable/MembersTable';

const Backoffice = () => {
  return (
    <Routes>
      <Route path='/crear' element={<Form />} />
      <Route path='/editar' element={<Form />} />
      <Route path='/' element={<MembersTable />} />
    </Routes>
  );
};

export default Backoffice;
