import React, { useState } from 'react';
import styles from './styles/Contacts.module.scss';

function Contacts() {
  //This should be replaced with Redux state logic once it is available
  const [contacts, setContacts] = useState(mockContacts);

  function deleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  return (
    <div className={styles.layout}>
      <h1>Contactos</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map(({ name, phone, email, message, id }) => (
              //Pending: add expandable message section
              <tr key={id}>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                  <button className={styles.messageBtn}>Ver Mensaje</button>
                  <button onClick={() => deleteContact(id)} className={styles.deleteBtn}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <p>No hay contactos guardados aún.</p>
          )}
        </tbody>
      </table>
    </div>
  );
}

const mockContacts = [
  {
    name: 'Juan Perez',
    phone: '+543795854695',
    email: 'juan@hotmail.com',
    id: 1,
  },
  {
    name: 'Natalia Fernandez',
    phone: '+543794254595',
    email: 'natif@hotmail.com',
    id: 2,
  },
  {
    name: 'Romina Gutierrez',
    phone: '+543395854885',
    email: 'rominaa@yahoo.com.ar',
    id: 3,
  },
  {
    name: 'Matias Gomez',
    phone: '+543394564585',
    email: 'matiasg@outlook.com',
    id: 4,
  },
  {
    name: 'Juan Bautista',
    phone: '+543542854885',
    email: 'jbmautista@hotmail.com',
    id: 5,
  },
  {
    name: 'Romina Alarcon',
    phone: '+543395854885',
    email: 'romiAaa@yahoo.com.ar',
    id: 6,
  },
];

export default Contacts;
