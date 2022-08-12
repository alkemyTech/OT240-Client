import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Form from '../../../components/Form/Form';
import Table from '../../../components/Table/Table';
import fetchApi from '../../../axios/axios';
import { handleEdit, handleDelete, handleCreate } from '../../../utils/formsHandlers';

const Categories = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const getCategories = async () => {
      try {
        const { data } = await fetchApi({ method: 'get', url: '/categories' });
        isMounted && setCategories(data.categories);
      } catch (err) {
        isMounted && setError(err.messsage);
      } finally {
        isMounted && setLoading(false);
      }
    };
    getCategories();

    return () => (isMounted = false);
  }, []);

  const deleteHandler = async (tableRow) => {
    const { id, name } = tableRow;
    const options = { type: 'Categoría', id, name, url: `/categories/${id}` };
    handleDelete(navigate, options);
  };

  const createHandler = async () => {
    handleCreate(navigate, {
      title: 'Crear Categoría',
      fields: { name: '', description: '' },
      options: { method: 'post', url: `/categories` },
      from: location,
    });
  };

  const editHandler = async (tableRow) => {
    const { id, name, description } = tableRow;
    handleEdit(navigate, {
      id,
      title: 'Editar Categoría',
      fields: { name, description },
      options: { method: 'put', url: `/categories/${id}` },
      from: location,
    });
  };

  return (
    <>
      <Routes>
        <Route path='/crear' element={<Form />} />
        <Route path='/editar' element={<Form />} />
        <Route
          path='/'
          element={
            <Table
              title='Categorías'
              tableHeader={['Titulo', 'Descripción']}
              tableRowsData={categories}
              tableRowsProperties={['name', 'description']}
              buttons={[
                { title: 'Editar', handler: editHandler, className: 'orange' },
                { title: 'Eliminar', handler: deleteHandler, className: 'white' },
              ]}
              loading={loading}
              addBtnHandler={createHandler}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Categories;
