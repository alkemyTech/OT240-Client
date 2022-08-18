import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import fetchApi from '../../axios/axios';
import { handleCreate, handleDelete, handleEdit } from '../../utils/formsHandlers';
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

  const createHandler = () => {
    handleCreate(navigate, {
      title: 'Crear usuario',
      options: {method: 'post', url:'/auth/register'},
      from: location,
      fields: {firstName: '', lastName: '', email: '', password: '', roleId: '' }
    });
  };

  return (
      getError == '' ? 
        <Table
          title='Usuarios'
          tableHeader={['Nombre', 'Apellido', 'Email']}
          tableRowsData={userData}
          tableRowsProperties={['firstName', 'lastName', 'email']}
          buttons={[
            {title: 'Editar', handler: editHandler, className: 'orange'},
            { title: 'Eliminar', handler: deleteHandler, className: 'white'},
          ]}
          addBtnHandler={createHandler}
        />
      : 
        <p className={usersBackoffice.errorMessage}> {getError} </p>
  );
};

export default UsersBackoffice;