import React, { useEffect, useState } from 'react';
import style from './styles/Categories.module.scss';
import { categoriesMock } from './mock/categories.mock';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesMock);
  }, []);

  const handleDelete = async (id) => {
    alert(`DELETE ID ${id}`);
  };

  const handleEdit = async (id) => {
    alert(`EDIT ID ${id}`);
  };

  return (
    <section className={style.container}>
      <h1>Administrar Categorias</h1>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descripción</th>
            <th>Fecha Creación</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {categories.length &&
            categories.map(({ name, description, createdAt, id }, i) => (
              <tr key={i}>
                <td>{name}</td>
                <td>{description}</td>
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

export default Categories;
