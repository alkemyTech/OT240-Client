import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Table from '../Table/Table';
import styles from './styles/Contacts.module.scss';
import { loadContacts, deleteContact } from '../../redux/actions/contacts.actions';
import { Loader } from '../loader/Loader';

function Contacts() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { contacts, loading, error } = useSelector((state) => state.contacts);

  const handleDelete = async (fields) => {
    const result = await Swal.fire({
      title: `Borrar contacto ${fields.name.replace(/\W/, '')}?`,
      text: `Esta operación no puede deshacerse!`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      iconColor: 'red',
    });
    if (result.isConfirmed) {
      dispatch(deleteContact({ url: `/contacts/${fields.id}`, method: 'delete' }));
    }
  };

  const handleEdit = async (fields) => {
    const { name, email, message, id } = fields;
    navigate('editar', {
      state: {
        title: 'Editar Contacto',
        fields: { name, email, message },
        options: { method: 'put', url: `/contacts/${id}` },
        from: location,
      },
    });
  };

  const handleCreate = async () => {
    navigate('crear', {
      state: {
        title: 'Crear Contacto',
        options: { method: 'post', url: `/contacts` },
        from: location,
        fields: { name: '', description: '' },
      },
    });
  };

  useEffect(() => {
    dispatch(loadContacts({ method: 'get', url: '/contacts' }));
  }, [dispatch]);

  return (
    <div className={styles.layout}>
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
          buttons={[
            { title: 'Editar', handler: handleEdit, className: 'white' },
            { title: 'Eliminar', handler: handleDelete, className: 'orange' },
          ]}
          loading={loading}
          addBtnHandler={handleCreate}
        />
      ) : (
        <div className={styles.empty}>No se encontraron contactos</div>
      )}
    </div>
  );
}

export default Contacts;
