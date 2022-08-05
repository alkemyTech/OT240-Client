import React from 'react';

import usersBackoffice from './styles/UsersBackoffice.module.scss';

const UsersBackoffice = () => {

    const mockContacts = [
        {
          name: 'Juan Perez',
          createdAt: '12/12/2018',
          id: 1,
        },
        {
          name: 'Natalia Fernandez',
          createdAt: '24/12/2018',
          id: 2,
        },
        {
          name: 'Romina Gutierrez',
          createdAt: '01/05/2020',
          id: 3,
        },
        {
          name: 'Matias Gomez',
          createdAt: '10/11/2020',
          id: 4,
        },
        {
          name: 'Juan Bautista',
          createdAt: '12/06/2021',
          id: 5,
        },
        {
          name: 'Romina Alarcon',
          createdAt: '05/08/2022',
          id: 6,
        },
      ];

  return (
    <div className={usersBackoffice.layout}>
      <h1>Usuarios registraddos</h1>
      <table className={usersBackoffice.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha de creación</th>
          </tr>
        </thead>
        <tbody>
          {mockContacts.length > 0 ? (
            mockContacts.map(({ name, createdAt,id }) => (
              //Pending: add expandable message section
              <tr key={id}>
                <td className={usersBackoffice.name}>{name}</td>
                <td>{`${createdAt}`}</td>
              </tr>
            ))
          ) : (
            <p>No hay usuarios.</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersBackoffice;