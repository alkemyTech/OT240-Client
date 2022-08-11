import React from 'react';
import Table from '../Table/Table';
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
    <Table
      //Para usarse en el h1
      title='Usuarios'
      //Nombres de las columnas para el tHead
      tableHeader={['Nombre', 'Fecha de creación']}
      //Nombres de las propiedades a extraerse de los objetos de datos
      tableRowsProperties={['name', 'createdAt']}
      //Array de function handlers para los botones de acciones
      actions={[editButton, deleteButton]}
      //Array de datos de las entidades a partir de los cuales armar las filas de la tabla
      tableRowsData={mockContacts}
    />
  );
  // <div className={usersBackoffice.layout}>
  //   <h1>Usuarios registraddos</h1>
  //   <table className={usersBackoffice.table}>
  //     <thead>
  //       <tr>
  //         <th>Nombre</th>
  //         <th>Fecha de creación</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {mockContacts.length > 0 ? (
  //         mockContacts.map(({ name, createdAt,id }) => (
  //           //Pending: add expandable message section
  //           <tr key={id}>
  //             <td className={usersBackoffice.name}>{name}</td>
  //             <td>{`${createdAt}`}</td>
  //           </tr>
  //         ))
  //       ) : (
  //         <p>No hay usuarios.</p>
  //       )}
  //     </tbody>
  //   </table>
  // </div>
};

export default UsersBackoffice;

function editButton() {
  return <button></button>;
}

function deleteButton() {
  return <button></button>;
}

const mockUsers = [
  {
    name: 'Juan Perez',
    phone: '+543795854695',
    email: 'juan@hotmail.com',
    id: 1,
  },
  {
    name: 'Natalia Fernandez',
    phone: '+543794254595',
    email: 'natif@hotmail.com',
    id: 2,
  },
  {
    name: 'Romina Gutierrez',
    phone: '+543395854885',
    email: 'rominaa@yahoo.com.ar',
    id: 3,
  },
  {
    name: 'Matias Gomez',
    phone: '+543394564585',
    email: 'matiasg@outlook.com',
    id: 4,
  },
  {
    name: 'Juan Bautista',
    phone: '+543542854885',
    email: 'jbmautista@hotmail.com',
    id: 5,
  },
  {
    name: 'Romina Alarcon',
    phone: '+543395854885',
    email: 'romiAaa@yahoo.com.ar',
    id: 6,
  },
];
