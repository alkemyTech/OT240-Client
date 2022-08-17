import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import fetchApi from '../../axios/axios';
import { handleDelete, handleEdit } from '../../utils/formsHandlers';
import style from './styles/MyProfileComponent.module.scss';

const MyProfileComponent = () => {

  const location = useLocation();
  const navigate = useNavigate();  
  const [userData, setUserData] = useState({});
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const getUsers = async() => {
      try {
        const {data} = await fetchApi({method: 'get', url: '/auth/me'});
        setUserData(data.user);
      } catch (err) {
        console.log(err);
        setFetchError(true);
      };
    };
    getUsers();
  }, []);

  const editHandler = () => {
    handleEdit(navigate, {
      title: 'Editar mi perfil', 
      fields: {
        firstName: userData.firstName, 
        lastName: userData.lastName, 
        email: userData.email
      },
      options: {method: 'put', url: `/users/${userData.id}`},
      from: location
    });
  };

  const deleteHandler = () => {
    handleDelete(navigate, {
      type: 'usuario',
      id: userData.id,
      name: `${userData.firstName} ${userData.lastName}`,
      url: `/users/${userData.id}`
    });
  };

  return (
    <>
      {
        !fetchError ? 
          <article className={style.articleDiv}>
              <h1></h1>
              <div>
                  <p className={style.title}>Mi perfil</p>
                  <div className={style.tableContainer}>
                      <div className={style.labelsContainer}>
                          <p> Nombre: </p>
                          <p> Apellido: </p>
                          <p> Email: </p>
                      </div>
                      <div className={style.userData}>
                          <p> {userData.firstName}</p>
                          <p> {userData.lastName}</p>
                          <p> {userData.email}</p>
                      </div>
                  </div>
                  <div className={style.buttonContainer}>
                    <button onClick={editHandler} className={style.editButton}> Editar </button>
                    <button onClick={deleteHandler} className={style.deleteButton}> Eliminar mi cuenta</button>
                  </div>
              </div>
          </article>
        
        :
        <div className={style.error}>
          <p> Ocurrió un error</p>
        </div>
      }
    </>
  );
};

export default MyProfileComponent;