import React, { useState } from 'react';

function Contacts() {
  //This should be replaced with Redux state logic once it is available
  const [contacts, setContacts] = useState(mockContacts);

  function deleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  return (
    <div>
      <h1>Contactos</h1>
      <table className='table'>
        <thead>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          {contacts.length &&
            contacts.map(({ name, phone, email, message, id }) => (
              //Pending: add expandable message section
              <tr>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                  <button className='btn btn-outline-primary'>Ver Mensaje</button>
                  <button onClick={() => deleteContact(id)} className='btn btn-outline-danger'>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
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
];

export default Contacts;
