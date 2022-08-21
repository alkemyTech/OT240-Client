import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles/activitiesBackoffice.module.scss';
import Table from '../Table/Table';
import { Loader } from '../loader/Loader';
import { fetchAcivities } from '../../redux/actions/activity.action';
import showAlert from '../../services/alert';

export const ActivitiesBackoffice = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state) => state.activity);

  React.useEffect(() => {
    dispatch(fetchAcivities({ url: '/activities' }));
  }, [dispatch]);

  const handleEdit = (fields) => {
    const { name, content, image, id } = fields;
    navigate('editar', {
      state: {
        id,
        title: 'Editar Actividad',
        fields: { name, content, image },
        options: { method: 'put', url: `/activities/${id}` },
        from: location,
      },
    });
  };

  const handleDelete = async (fields) => {
    const result = await showAlert(
      {
        title: `Borrar actividad "${fields.name}"?`,
        text: `Esta operación no puede deshacerse!`,
        icon: 'warning',
      },
      {
        showCancelButton: true,
        iconColor: 'red',
      }
    );
    if (result.isConfirmed) {
      dispatch(fetchAcivities({ url: `/activities/${fields.id}`, method: 'delete' }));
    }
  };

  const handleAdd = () => {
    navigate('crear', {
      state: {
        title: 'Crear Actividad',
        options: { method: 'post', url: `/activities` },
        from: location,
        fields: { name: '', image: '', content: '' },
      },
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
      ) : entries.length ? (
        <Table
          title='Actividades'
          tableHeader={['Titulo', 'Descripción', 'Fecha']}
          tableRowsData={entries}
          tableRowsProperties={['name', 'content', 'createdAt']}
          buttons={[
            { title: 'Editar', handler: handleEdit, className: 'white' },
            { title: 'Eliminar', handler: handleDelete, className: 'orange' },
          ]}
          loading={loading}
          addBtnHandler={handleAdd}
        />
      ) : (
        <div className={styles.empty}>No se encontraron actividades</div>
      )}
    </div>
  );
};
