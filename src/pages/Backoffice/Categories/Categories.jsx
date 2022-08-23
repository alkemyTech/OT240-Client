import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from '../../../components/Form/Form';
import CategoriesTable from './CategoriesTable/CategoriesTable';

const Categories = () => {
  return (
    <>
      <Routes>
        <Route path='/crear' element={<Form />} />
        <Route path='/editar' element={<Form />} />
        <Route path='/' element={<CategoriesTable />} />
      </Routes>
    </>
  );
};

export default Categories;
