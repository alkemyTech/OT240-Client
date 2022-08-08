import React from 'react';

import usersBackoffice from './styles/UsersBackoffice.module.scss';

const UsersBackoffice = () => {

  //columnas nombre, apellido, email y las acciones para editar o eliminar al usuario.

    const mockUsers = [
        {
          firstName: 'Juan',
          lastName: 'Perez',
          email: 'correo@correo.com',
          roleId: 2,
          createdAt: '12/12/2018',
          id: 1,
        },
        {
          firstName: 'Francisco',
          lastName: 'Lopez',
          email: 'correo@correo.com',
          roleId: 2,
          createdAt: '12/12/2019',
          id: 2,
        },
        {
          firstName: 'Julieta',
          lastName: 'Garcia',
          email: 'correo@correo.com',
          roleId: 2,
          createdAt: '12/12/2020',
          id: 3,
        },
        {
          firstName: 'Agustina',
          lastName: 'Martinez',
          email: 'correo@correo.com',
          roleId: 2,
          createdAt: '12/12/2021',
          id: 4,
        },
        
      ];

  return (
    <div className={usersBackoffice.layout}>
      <h1>Usuarios registraddos</h1>
      <table className={usersBackoffice.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.length > 0 ? (
            mockUsers.map(({ firstName, lastName, email, roleId, createdAt,id }) => (
              //Pending: add expandable message section
              <tr key={id}>
                <td className={usersBackoffice.name}>{firstName} {lastName}</td>
                <td>{email}</td>
                <td>
                  <button>Editar</button>
                  <button>Borrar</button>
                </td>
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