import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import fetchApi from '../../axios/axios';
import { loadUsers } from '../../redux/actions/user.actions';
import { handleCreate, handleDelete, handleEdit } from '../../utils/formsHandlers';
import Table from '../Table/Table';
import usersBackoffice from './styles/UsersBackoffice.module.scss';

const UsersBackoffice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadUsers({ method: 'get', url: '/users' }));
  }, [dispatch]);

  const editHandler = (user) => {
    handleEdit(navigate, {
      title: 'Editar Usuario',
      fields: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        roleId: user.roleId,
      },
      options: { method: 'put', url: `/users/${user.id}` },
      from: location,
    });
  };

  const deleteHandler = (user) => {
    handleDelete(navigate, {
      type: 'usuario',
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      url: `/users/${user.id}`,
    });
  };

  const createHandler = () => {
    handleCreate(navigate, {
      title: 'Crear usuario',
      options: { method: 'post', url: '/auth/register' },
      from: location,
      fields: { firstName: '', lastName: '', email: '', password: '', roleId: '' },
    });
  };

  return error ? (
    <p className={usersBackoffice.errorMessage}> Algo salió mal..</p>
  ) : (
    <Table
      title='Usuarios'
      tableHeader={['Nombre', 'Apellido', 'Email']}
      tableRowsData={users}
      tableRowsProperties={['firstName', 'lastName', 'email']}
      buttons={[
        { title: 'Editar', handler: editHandler, className: 'orange' },
        { title: 'Eliminar', handler: deleteHandler, className: 'white' },
      ]}
      loading={loading}
      addBtnHandler={createHandler}
    />
  );
};

export default UsersBackoffice;
