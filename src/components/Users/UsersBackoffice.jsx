import React, { useEffect } from 'react';
import { useState } from 'react';

import fetchApi from '../../axios/axios';
import Table from '../Table/Table';
import usersBackoffice from './styles/UsersBackoffice.module.scss';

const UsersBackoffice = () => {

  const [userData, setUserData] = useState([]);
  const [getError, setGetError] = useState('Loading...');

  useEffect(() => {
    const getUsers = async() => {
      try {
        const {data} = await fetchApi({method: 'get', url: '/users'});
        const mapping = data.users.map(({firstName,lastName,email,id,roleId}) => {return({firstName,lastName,email,id,roleId})});
        setUserData(mapping);
        setGetError('');
      } catch (err) {
        setGetError('Ocurrió un error');
      };

    };
    getUsers();
  }, []);



  const editHandler = () => {
    
  }

  const handleDelete = () => {

  }

  return (
    <>
    { 
      getError == '' ? 
        <Table
          //For the h1
          title='Usuarios'
          //Names for the column for tHead
          tableHeader={['Nombre', 'Apellido', 'Email']}
          //Array for the rows
          tableRowsData={userData}
          //Names of properties to be extracted from data objects
          tableRowsProperties={['firstName', 'lastName', 'email']}
          //Array of objects for action buttons
          buttons={[
            {
              title: 'Editar', // Button text
              handler: editHandler, // handler function for onClick
              className: 'orange', // Class name for button styles. The classes are stored in the Table styles
            },
            {
              title: 'Eliminar',
              handler: handleDelete,
              className: 'white',
            },
          ]}
        />
      : 
        <p className={usersBackoffice.errorMessage}> {getError} </p>
    }
    </>
  );
};

export default UsersBackoffice;