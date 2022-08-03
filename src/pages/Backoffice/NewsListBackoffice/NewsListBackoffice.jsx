import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './styles/NewsListBackoffice.module.scss';
import api from '../../../axios/main';
import useFetchNews from '../../../hooks/useFetchNews';

const NewsListBackoffice = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState('');

  const { news, setNews, error: fetchError } = useFetchNews();

  const handleDelete = async (id) => {
    try {
      const { data } = await api.delete(`/news/${id}`);
      setNews((prev) => prev.filter((entry) => entry.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = async (id) => {
    navigate(`${id}`);
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
            news.map(({ name, image, createdAt, id }, i) => (
              <tr key={i}>
                <td>{name}</td>
                <td>{image}</td>
                <td>{createdAt.split('.')[0].replace('T', ' ')}</td>
                <td onClick={() => handleEdit(id)}>
                  <button>Editar</button>
                </td>
                <td onClick={() => handleDelete(id)}>
                  <button>Borrar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default NewsListBackoffice;
