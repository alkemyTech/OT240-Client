import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import fetchApi from '../../axios/axios';
import { handleEdit } from '../../utils/formsHandlers';
import style from './styles/MyProfileComponent.module.scss';
import showAlert from '../../services/alert';

const MyProfileComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await fetchApi({ method: 'get', url: '/auth/me' });
        setUserData(data.user);
      } catch (err) {
        console.log(err);
        setFetchError(true);
      }
    };
    getUsers();
  }, []);

  const editHandler = () => {
    handleEdit(navigate, {
      title: 'Editar mi perfil',
      fields: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      },
      options: { method: 'put', url: `/users/${userData.id}` },
      from: location,
    });
  };

  const deleteHandler = async () => {
    const result = await showAlert(
      {
        title: `Seguro que quieres borrar tu cuenta?`,
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
        await fetchApi({ method: 'delete', url: `/users/${userData.id}` });
        sessionStorage.removeItem('token');
        window.location.reload();
      } catch (err) {
        window.alert(err);
      }
    }
  };

  return (
    <>
      {!fetchError ? (
        <article className={style.articleDiv}>
          <div>
            <h1>Mi perfil</h1>
            <div className={style.tableContainer}>
              <div className={style.labelsContainer}>
                <p> Nombre </p>
                <p> Apellido </p>
                <p> Email </p>
              </div>
              <div className={style.userData}>
                <p> {userData.firstName}</p>
                <p> {userData.lastName}</p>
                <p> {userData.email}</p>
              </div>
            </div>
            <div className={style.buttonContainer}>
              <button onClick={editHandler} className={style.editButton}>
                Editar
              </button>
              <button onClick={deleteHandler} className={style.deleteButton}>
                Eliminar
              </button>
            </div>
          </div>
        </article>
      ) : (
        <div className={style.error}>
          <p> Ocurrió un error</p>
        </div>
      )}
    </>
  );
};

export default MyProfileComponent;
