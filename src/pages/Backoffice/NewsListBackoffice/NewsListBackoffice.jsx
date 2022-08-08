import React from 'react';
import useNavigate from 'react-router-dom';

import style from './styles/NewsListBackoffice.module.scss';

import NewsForm from '../../../components/NewsForm/NewsForm';

import news from '../../../news.mock';
import fetchApi from '../../../axios/axios';

const NewsListBackoffice = () => {
  const [editing, setEditing] = React.useState(false);
  const [formIsOpen, setFormIsOpen] = React.useState(false);

  const [latestNews, setLatestNews] = React.useState([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    let isMounted = true;

    const getNews = async () => {
      try {
        const { data } = await fetchApi({ method: 'get', url: '/news' });
        isMounted && setLatestNews(data);
      } catch (err) {
        isMounted && setError('');
      }
    };

    getNews();

    return () => (isMounted = false);
  }, []);

  const handleDelete = async (id) => {
    alert(`DELETE ID ${id}`);
  };

  return (
    <>
      {!formIsOpen && (
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
              {latestNews.length &&
                latestNews.map((entry, i) => (
                  <tr key={i}>
                    <td>{entry.name}</td>
                    <td>{entry.image}</td>
                    <td>{entry.createdAt.split('.')[0].replace('T', ' ')}</td>
                    <td
                      onClick={() => {
                        setEditing(entry);
                        setFormIsOpen(true);
                      }}>
                      <button>Editar</button>
                    </td>
                    <td onClick={() => handleDelete(entry.id)}>
                      <button>Borrar</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button onClick={() => setFormIsOpen(true)} className={style.addBtn}>
            Agregar Novedad
          </button>
        </section>
      )}
      {formIsOpen && (
        <NewsForm existingNew={editing} setFormIsOpen={setFormIsOpen} setEditing={setEditing} />
      )}
    </>
  );
};

export default NewsListBackoffice;
