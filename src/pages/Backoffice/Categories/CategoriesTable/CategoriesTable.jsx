import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from '../../../../components/Table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories, deleteCategory } from '../../../../redux/actions/categories.actions';

const CategoriesTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { categories, loading, error } = useSelector((state) => state.categories);

  const handleDelete = async (fields) => {
    const confirmDelete = window.confirm(
      `Desea borrar la categoria "${fields.name}"?\nEsta operación no puede deshacerse!`
    );
    if (confirmDelete) {
      dispatch(deleteCategory({ url: `/categories/${fields.id}`, method: 'delete' }));
    }
  };

  const handleEdit = async (fields) => {
    const { name, description, id } = fields;
    navigate('editar', {
      state: {
        title: 'Editar Categoría',
        fields: { name, description },
        options: { method: 'put', url: `/categories/${id}` },
        from: location,
      },
    });
  };

  const handleCreate = async () => {
    navigate('crear', {
      state: {
        title: 'Ingresar Categoría',
        options: { method: 'post', url: `/categories` },
        from: location,
        fields: { name: '', description: '' },
      },
    });
  };

  useEffect(() => {
    dispatch(loadCategories({ method: 'get', url: '/categories' }));
  }, [dispatch]);

  return error ? (
    <p>Algo salió mal..</p>
  ) : (
    <Table
      title='Categorias'
      tableHeader={['Titulo', 'Descripción']}
      tableRowsData={categories}
      tableRowsProperties={['name', 'description']}
      buttons={[
        { title: 'Editar', handler: handleEdit, className: 'white' },
        { title: 'Eliminar', handler: handleDelete, className: 'orange' },
      ]}
      loading={loading}
      addBtnHandler={handleCreate}
    />
  );
};

export default CategoriesTable;
