import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import style from './styles/NewsListBackoffice.module.scss';
import Form from '../../../components/Form/Form';
import { fetchNews } from '../../../redux/actions/news.actions';

import Table from '../../../components/Table/Table';

const NewsListBackoffice = () => {
  return (
    <Routes>
      <Route path='/crear' element={<Form />} />
      <Route path='/editar' element={<Form />} />
      <Route path='/' element={<NewsTable />} />
    </Routes>
  );
};

export default NewsListBackoffice;

function NewsTable() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state) => state.news);

  const handleDelete = async (fields) => {
    const confirmDelete = window.confirm(
      `Desea borrar la novedad "${fields.name}"?\nEsta operación no puede deshacerse!`
    );
    if (confirmDelete) {
      dispatch(fetchNews({ url: `/news/${fields.id}`, method: 'delete' }));
    }
  };

  const handleEdit = async (fields) => {
    const { name, content, image, id } = fields;
    navigate('editar', {
      state: {
        title: 'Editar Novedad',
        fields: { name, content, image },
        options: { method: 'put', url: `/news/${id}` },
        from: location,
      },
    });
  };

  const handleCreate = async () => {
    navigate('crear', {
      state: {
        title: 'Crear Novedad',
        options: { method: 'post', url: `/news` },
        from: location,
        fields: { name: '', image: '', content: '' },
      },
    });
  };

  React.useEffect(() => {
    dispatch(fetchNews({ url: '/news' }));
  }, [dispatch]);

  return error ? (
    <p>Algo salió mal..</p>
  ) : (
    <Table
      title='Novedades'
      tableHeader={['Titulo', 'Fecha']}
      tableRowsData={entries}
      tableRowsProperties={['name', 'createdAt']}
      buttons={[
        { title: 'Editar', handler: handleEdit, className: 'white' },
        { title: 'Eliminar', handler: handleDelete, className: 'orange' },
      ]}
      loading={loading}
      addBtnHandler={handleCreate}
    />
  );
}
