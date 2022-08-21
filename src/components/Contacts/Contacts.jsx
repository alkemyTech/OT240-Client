import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Table from '../Table/Table';
import styles from './styles/Contacts.module.scss';
import { loadContacts, deleteContact } from '../../redux/actions/contacts.actions';
import { Loader } from '../loader/Loader';
import showAlert from '../../services/alert';

function Contacts() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { contacts, loading, error } = useSelector((state) => state.contacts);

  const handleDelete = async (fields) => {
    const result = await showAlert(
      {
        title: `Borrar el contacto de "${fields.email}"?`,
        text: `Esta operación no puede deshacerse!`,
        icon: 'warning',
      },
      {
        showCancelButton: true,
        iconColor: 'red',
      }
    );
    if (result.isConfirmed) {
      dispatch(deleteContact({ url: `/contacts/${fields.id}`, method: 'delete' }));
    }
  };

  useEffect(() => {
    dispatch(loadContacts({ method: 'get', url: '/contacts' }));
  }, [dispatch]);

  return (
    <div className={styles.layout}>
      <h1 className='backofficeTableHeader'>Administrar Contactos</h1>
      {loading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : contacts.length ? (
        <Table
          title={'Contactos'}
          tableHeader={['Nombre', 'Email', 'Mensaje']}
          tableRowsProperties={['name', 'email', 'message']}
          tableRowsData={contacts}
          buttons={[{ title: 'Eliminar', handler: handleDelete, className: 'orange' }]}
          loading={loading}
        />
      ) : (
        <div className={styles.empty}>No se encontraron contactos</div>
      )}
    </div>
  );
}

export default Contacts;
