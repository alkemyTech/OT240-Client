import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import fetchApi from '../../axios/axios';
import { fetchUser, logout } from '../../redux/actions/auth.action';
import style from './styles/MyProfileComponent.module.scss';
import showAlert from '../../services/alert';
import { useSelector, useDispatch } from 'react-redux';

const MyProfileComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  React.useEffect(() => {
    dispatch(fetchUser({ url: '/auth/me' }));
  }, []);

  const handleEdit = () => {
    const fields = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    user.roleId == 1 && (fields.roleId = user.roleId);

    navigate('editar', {
      state: {
        title: 'Editar mi perfil',
        fields,
        options: { method: 'put', url: `/users/${user.id}` },
        from: location,
      },
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
        await fetchApi({ method: 'delete', url: `/users/${user.id}` });
        dispatch(logout());
        sessionStorage.removeItem('token');
        navigate('/login');
      } catch (err) {
        window.alert(err);
      }
    }
  };

  return (
    <article className={style.articleDiv}>
      <div>
        <div>
          <h1 className={style.title}>Mi perfil</h1>
          <div className={style.tableContainer}>
            <div className={style.labelsContainer}>
              <p> Nombre: </p>
              <p> Apellido: </p>
              <p> Email: </p>
            </div>
            <div className={style.userData}>
              <p> {user.firstName}</p>
              <p> {user.lastName}</p>
              <p> {user.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.buttonContainer}>
        <button onClick={handleEdit} className={style.editButton}>
          Editar
        </button>
        <button onClick={deleteHandler} className={style.deleteButton}>
          Eliminar
        </button>
      </div>
    </article>
  );
};

export default MyProfileComponent;
