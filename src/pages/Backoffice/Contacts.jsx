import React from 'react';

function Contacts() {
  return (
    <div>
      <table className='table'>
        <thead>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          <tr>
            <td>Juan Perez</td>
            <td>+543795854695</td>
            <td>juanperez@hotmail.com</td>
            <td>
                <button className="btn btn-outline-primary">Ver Mensaje</button>
                <button className="btn btn-outline-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
