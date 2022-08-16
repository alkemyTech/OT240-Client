import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import fetchApi from '../../axios/axios';
import { handleDelete, handleEdit } from '../../utils/formsHandlers';
import Table from '../Table/Table';
import usersBackoffice from './styles/UsersBackoffice.module.scss';

const UsersBackoffice = () => {

  const location = useLocation();
  const navigate = useNavigate();
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

  const editHandler = (user) => {

    handleEdit(navigate, {
          title: 'Editar Usuario', 
          fields: {
              firstName: user.firstName, 
              lastName: user.lastName, 
              email: user.email, 
              roleId: user.roleId
            },
          options: {method: 'put', url: `/users/${user.id}`},
          from: location
        });
  };

  const deleteHandler = (user) => {
    handleDelete(navigate, {
      type: 'usuario',
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      url: `/users/${user.id}`
    });
  };

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
              handler: deleteHandler,
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