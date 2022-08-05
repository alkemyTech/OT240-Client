import React from 'react';

import style from './styles/NewsListBackoffice.module.scss';

import news from '../../../news.mock';

const NewsListBackoffice = () => {
  const handleDelete = async (id) => {
    alert(`DELETE ID ${id}`);
  };

  const handleEdit = async (id) => {
    alert(`EDIT ID ${id}`);
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
