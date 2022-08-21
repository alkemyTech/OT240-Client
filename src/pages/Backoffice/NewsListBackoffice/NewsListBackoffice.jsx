import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import style from './styles/NewsListBackoffice.module.scss';
import Form from '../../../components/Form/Form';
import { fetchNews } from '../../../redux/actions/news.actions';

import Table from '../../../components/Table/Table';
import { Loader } from '../../../components/loader/Loader';
import showAlert from '../../../services/alert';

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
    const result = await showAlert(
      {
        title: `Borrar novedad "${fields.name}"?`,
        text: `Esta operación no puede deshacerse!`,
        icon: 'warning',
      },
      {
        showCancelButton: true,
        iconColor: 'red',
      }
    );
    if (result.isConfirmed) {
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

  return (
    <div className={style.container}>
      <h1 className='backofficeTableHeader'> Administrar Novedades</h1>
      {loading ? (
        <div className={style.error}>
          <Loader />
        </div>
      ) : error ? (
        <p className={style.error}></p>
      ) : entries.length ? (
        <Table
          title='Novedades'
          tableHeader={['Titulo', 'Descripción', 'Fecha']}
          tableRowsData={entries}
          tableRowsProperties={['name', 'content', 'createdAt']}
          buttons={[
            { title: 'Editar', handler: handleEdit, className: 'white' },
            { title: 'Eliminar', handler: handleDelete, className: 'orange' },
          ]}
          loading={loading}
          addBtnHandler={handleCreate}
        />
      ) : (
        <p className={style.empty}>No se encontraron novedades</p>
      )}
      <button className='addEntry' onClick={handleCreate}>
        Agregar Novedades
      </button>
    </div>
  );
}
