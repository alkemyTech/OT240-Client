import React from 'react';
import useNavigate from 'react-router-dom';

import style from './styles/NewsListBackoffice.module.scss';

import NewsForm from '../../../components/NewsForm/NewsForm';

import news from '../../../news.mock';

const NewsListBackoffice = () => {
  const [editing, setEditing] = React.useState(false);
  const [formIsOpen, setFormIsOpen] = React.useState(false);

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
              {news.length &&
                news.map((entry, i) => (
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
