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

  return (
    <>
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
      <section className={style.container}>
        <h1>Administrar Novedades</h1>
        {loading ? (
          <></>
        ) : error ? (
          <p className={style.error}>{error}</p>
        ) : !entries.length ? (
          <p className={style.empty}>No hay novedades que mostrar todavía! </p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Fecha Creacion</th>
                <th>Editar</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <TableRow
                  entry={entry}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  key={entry.id}
                />
              ))}
            </tbody>
          </table>
        )}
        <button onClick={handleCreate} className={style.addBtn}>
          Agregar Novedad
        </button>
      </section>
    </>
  );
}

function TableRow({ entry, handleEdit, handleDelete }) {
  const { name, image, createdAt, content, id } = entry;
  return (
    <tr key={id}>
      <td>{entry.name}</td>
      <td>{new Date(createdAt).toLocaleDateString()}</td>
      <td onClick={() => handleEdit({ id, name, image, content })}>
        <button>Editar</button>
      </td>
      <td onClick={() => handleDelete({ id, name })}>
        <button>Borrar</button>
      </td>
    </tr>
  );
}
