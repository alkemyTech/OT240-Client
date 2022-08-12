import React from 'react';
import styles from './styles/Table.module.scss';

const Table = ({
  tableHeader: theadColumns,
  tableRowsData,
  tableRowsProperties,
  title,
  buttons,
}) => {
  return (
    <div className={styles.layout}>
      <h1>{title}</h1>
      <table className={styles.table}>
        <thead>{generateTableHead(theadColumns)}</thead>
        <tbody>{generateRows(tableRowsData, tableRowsProperties, buttons)}</tbody>
      </table>
    </div>
  );
};

const generateRows = (tableRowsData, tableRowsProperties, buttons) => {
  return (
    <>
      {tableRowsData.map((tableRow) => (
        <tr>
          {Object.entries(tableRow).map(([property, value]) => {
            if (propertyIsIncluded(tableRowsProperties, property)) {
              return <td>{value}</td>;
            }
          })}
          <td>
            {buttons.map(({ title, handler, className }) => (
              <button onClick={handler} className={styles[className]}>
                {title}
              </button>
            ))}
          </td>
        </tr>
      ))}
    </>
  );
};

function generateTableHead(theadColumns) {
  return (
    <tr>
      {theadColumns.map((columnData) => (
        <td>{columnData}</td>
      ))}
      <td>Acciones</td>
    </tr>
  );
}

function propertyIsIncluded(tableRowsProperties, property) {
  return tableRowsProperties.includes(property);
}

export default Table;
