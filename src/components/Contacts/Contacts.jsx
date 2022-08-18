import React, { useEffect } from 'react';
import Table from '../Table/Table';
import styles from './styles/Contacts.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { loadContacts, deleteContact } from '../../redux/actions/contacts.actions';

function Contacts() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { contacts, loading, error } = useSelector((state) => state.contacts);

  const handleDelete = async (fields) => {
    const confirmDelete = window.confirm(
      `Desea borrar el contacto de "${fields.name}"?\nEsta operación no puede deshacerse!`
    );
    if (confirmDelete) {
      dispatch(deleteContact({ url: `/contacts/${fields.id}`, method: 'delete' }));
    }
  };

  const handleEdit = async (fields) => {
    const { name, description, id } = fields;
    navigate('editar', {
      state: {
        title: 'Editar Contacto',
        fields: { name, description },
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
    </div>
  );
}

// const mockContacts = [
//   {
//     name: 'Juan Perez',
//     phone: '+543795854695',
//     email: 'juan@hotmail.com',
//     id: 1,
//   },
//   {
//     name: 'Natalia Fernandez',
//     phone: '+543794254595',
//     email: 'natif@hotmail.com',
//     id: 2,
//   },
//   {
//     name: 'Romina Gutierrez',
//     phone: '+543395854885',
//     email: 'rominaa@yahoo.com.ar',
//     id: 3,
//   },
//   {
//     name: 'Matias Gomez',
//     phone: '+543394564585',
//     email: 'matiasg@outlook.com',
//     id: 4,
//   },
//   {
//     name: 'Juan Bautista',
//     phone: '+543542854885',
//     email: 'jbmautista@hotmail.com',
//     id: 5,
//   },
//   {
//     name: 'Romina Alarcon',
//     phone: '+543395854885',
//     email: 'romiAaa@yahoo.com.ar',
//     id: 6,
//   },
// ];

export default Contacts;
