import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import style from './styles/NewsListBackoffice.module.scss';
import Form from '../../../components/Form/Form';
import { fetchNews } from '../../../redux/actions/news.actions';

const NewsListBackoffice = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

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

  return (
    <Routes>
      <Route path='/crear' element={<Form />} />
      <Route path='/editar' element={<Form />} />
      <Route
        path='/'
        element={
          <Table handleCreate={handleCreate} handleEdit={handleEdit} handleDelete={handleDelete} />
        }
      />
    </Routes>
  );
};

export default NewsListBackoffice;

function Table({ handleDelete, handleCreate, handleEdit }) {
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state) => state.news);

  React.useEffect(() => {
    dispatch(fetchNews({ url: '/news' }));
  }, [dispatch]);

  return (
    <section className={style.container}>
      <h1>Administrar Novedades</h1>
      {loading && 'Cargando...'}
      {!loading && error && <p className={style.error}>{error}</p>}
      {!loading && !entries.length && (
        <p className={style.empty}>No hay novedades que mostrar todavía! </p>
      )}
      {!loading && entries.length && (
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
