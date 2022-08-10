import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import style from './styles/NewsListBackoffice.module.scss';
import Form from '../../../components/Form/Form';

import fetchApi from '../../../axios/axios';

const NewsTable = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [news, setNews] = React.useState([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    let isMounted = true;
    const getNews = async () => {
      try {
        const { data } = await fetchApi({ method: 'get', url: '/news' });
        isMounted && setNews(data);
      } catch (err) {
        isMounted && setError(err.messsage);
      }
    };

    getNews();

    return () => (isMounted = false);
  }, []);

  const handleDelete = async (id) => {
    alert(`DELETE ID ${id}`);
  };

  const handleEdit = async ({ id, fields }) => {
    console.log(fields.content);
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
                <td>{new Date(createdAt).toLocaleDateString()}</td>
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
