import React from 'react';
import styles from './styles/Table.module.scss';

const Table = ({
  tableHeader: theadColumns,
  tableRowsData,
  tableRowsProperties,
  title,
  actions,
}) => {
  // Componente Table
  return (
    <div className={styles.layout}>
      <h1>{title}</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            {theadColumns.map((columnData) => (
              <td>{columnData}</td>
            ))}
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {tableRowsData.map((tableRow) => (
            <tr>
              {Object.entries(tableRow).map((columnContent) => {
                if (tableRowsProperties.includes(columnContent[0])) {
                  return <td>{columnContent[1]}</td>;
                }
              })}
              <td><button onClick={actions.handleEdit}>Editar</button></td>
              <td><button onClick={actions.handleEdit}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
