import React from 'react';
import Table from '../Table/Table';
//import usersBackoffice from './styles/UsersBackoffice.module.scss';

const UsersBackoffice = () => {
  return (
    <>
      <Table
        //Para usarse en el h1
        title='Usuarios'
        //Nombres de las columnas para el tHead
        tableHeader={['Nombre', 'Apellido', 'Email']}
        //Array de datos de las entidades a partir de los cuales armar las filas de la tabla
        tableRowsData={mockUsers}
        //Nombres de las propiedades a extraerse de los objetos de datos
        tableRowsProperties={['firstName', 'lastName', 'email']}
        //Array de objetos para botones de accion
        buttons={[
          {
            title: 'Editar', // Texto del botón
            handler: handleEdit, // handler function para el evento onClick, que permite integracion con el form-reutilizable
            className: 'orange', // Nombre de clase para estilos del botón. Las clases se guardan en los estilos de Table
          },
          {
            title: 'Eliminar',
            handler: handleDelete,
            className: 'white',
          },
        ]}
      />
    </>
  );
};

export default UsersBackoffice;

function handleEdit() {
  // Onclick
}

function handleDelete() {}

const mockUsers = [
  {
    firstName: 'Juan',
    lastName: 'Perez',
    phone: '+543795854695',
    email: 'juan@hotmail.com',
    roleId: 1,
    id: 1,
  },
  {
    firstName: 'Natalia',
    lastName: 'Fernandez',
    phone: '+543794254595',
    email: 'natif@hotmail.com',
    id: 2,
  },
  {
    firstName: 'Romina',
    lastName: 'Gutierrez',
    phone: '+543395854885',
    email: 'rominaa@yahoo.com.ar',
    id: 3,
  },
  {
    firstName: 'Matias',
    lastName: 'Gomez',
    phone: '+543394564585',
    email: 'matiasg@outlook.com',
    id: 4,
  },
  {
    firstName: 'Romina',
    lastName: 'Gutierrez',
    phone: '+543542854885',
    email: 'jbmautista@hotmail.com',
    id: 5,
  },
  {
    firstName: 'Peedro',
    lastName: 'Gutierrez',
    phone: '+543395854885',
    email: 'romiAaa@yahoo.com.ar',
    id: 6,
  },
];
