import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import style from './styles/Categories.module.scss';
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
    const options = { type: 'Categoria', id, name, url: `/categories/${id}` };
    handleDelete(navigate, options);
  };

  const createHandler = async () => {
    handleCreate(navigate, {
      title: 'Crear Categoria',
      fields: { name: '', description: '' },
      options: { method: 'post', url: `/categories` },
      from: location,
    });
  };

  const editHandler = async (tableRow) => {
    const { id, name, description } = tableRow;
    handleEdit(navigate, {
      id,
      title: 'Editar Categoria',
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
              title='Categorias'
              tableHeader={['Titulo', 'Descripcion']}
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
