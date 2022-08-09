import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import style from './styles/NewsListBackoffice.module.scss';
import Form from '../../../components/Form/Form';
import news from '../../../news.mock';

const NewsTable = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    alert(`DELETE ID ${id}`);
  };

  const handleEdit = async ({ id, fields }) => {
    navigate('editar', {
      state: {
        id,
        title: 'Editar Novedad',
        fields,
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
    <section className={style.container}>
      <h1>Administrar Novedades</h1>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>URL imagen</th>
            <th>Fecha Creacion</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {news.length &&
            news.map(({ name, image, createdAt, id, content }, i) => (
              <tr key={i}>
                <td>{name}</td>
                <td>{image}</td>
                <td>{createdAt.split('.')[0].replace('T', ' ')}</td>
                <td onClick={() => handleEdit({ id, fields: { name, image, content } })}>
                  <button>Editar</button>
                </td>
                <td onClick={() => handleDelete(id)}>
                  <button>Borrar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={handleCreate} className={style.addBtn}>
        Agregar Novedad
      </button>
    </section>
  );
};

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
