import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from '../../../components/Form/Form';
import ContactsTable from '../../../components/Contacts/Contacts';

const Contacts = () => {
  return (
    <>
      <Routes>
        <Route path='/crear' element={<Form />} />
        <Route path='/editar' element={<Form />} />
        <Route path='/' element={<ContactsTable />} />
      </Routes>
    </>
  );
};

export default Contacts;
