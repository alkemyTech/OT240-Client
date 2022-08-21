import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { loadUsers } from '../../redux/actions/user.actions';
import { handleCreate, handleDelete, handleEdit } from '../../utils/formsHandlers';
import Table from '../Table/Table';
import { Loader } from '../loader/Loader';
import styles from './styles/UsersBackoffice.module.scss';
import showAlert from '../../services/alert';
import fetchApi from '../../axios/axios';

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

  const deleteHandler = async (fields) => {
    const result = await showAlert(
      {
        title: `Borrar usuario "${fields.email}"?`,
        text: `Esta operación no puede deshacerse!`,
        icon: 'warning',
      },
      {
        showCancelButton: true,
        iconColor: 'red',
      }
    );
    // TODO: REDUX
    if (result.isConfirmed) {
      try {
        await fetchApi({ method: 'delete', url: `users/${fields.id}` });
        window.location.reload();
      } catch (err) {
        window.alert(err);
      }
    }
  };

  const createHandler = () => {
    handleCreate(navigate, {
      title: 'Crear usuario',
      options: { method: 'post', url: '/auth/register' },
      from: location,

      fields: { firstName: '', lastName: '', email: '', password: '', roleId: '' },
    });
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : users.length ? (
        <Table
          title='Usuarios'
          tableHeader={['Nombre', 'Apellido', 'Email']}
          tableRowsData={users}
          tableRowsProperties={['firstName', 'lastName', 'email']}
          buttons={[
            { title: 'Editar', handler: editHandler, className: 'white' },
            { title: 'Eliminar', handler: deleteHandler, className: 'orange' },
          ]}
          loading={loading}
          addBtnHandler={createHandler}
        />
      ) : (
        <p className={styles.empty}>No se encontraron usuarios</p>
      )}
    </div>
  );
};

export default UsersBackoffice;
