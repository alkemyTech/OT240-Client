import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles/Table.module.scss';

const Table = ({
  tableHeader: theadColumns,
  tableRowsData,
  tableRowsProperties,
  title,
  buttons,
  loading,
  addBtnHandler,
  isOrganization,
}) => {
  const location = useLocation();

  return !loading && tableRowsData.length ? (
    <div className={styles.layout}>
      <h1>{title}</h1>
      <table className={styles.table}>
        <thead>{generateTableHead(theadColumns, isOrganization)}</thead>
        <tbody>{generateRows(tableRowsData, tableRowsProperties, buttons, isOrganization)}</tbody>
      </table>
      {!isOrganization && (
        <button onClick={addBtnHandler} className={styles.addBtn}>{`Agregar ${title}`}</button>
      )}
    </div>
  ) : (
    <p>Loading... </p>
  );
};
const generateRows = (tableRowsData, tableRowsProperties, buttons, isOrganization) => {
  return (
    <>
      {tableRowsData.map((tableRow) => (
        <tr
          key={tableRow.id}
          id={tableRow.id}
          className={isOrganization && `${styles.organization}`}>
          {Object.entries(tableRow).map(([property, value]) => {
            if (propertyIsIncluded(tableRowsProperties, property)) {
              return <td>{value}</td>;
            }
          })}
          <td className={styles.buttons}>
            {buttons.map(({ title, handler, className }) => (
              <button onClick={() => handler(tableRow)} className={styles[className]}>
                {title}
              </button>
            ))}
          </td>
        </tr>
      ))}
    </>
  );
};

function generateTableHead(theadColumns, isOrganization) {
  return (
    <>
      {!isOrganization && (
        <tr>
          {theadColumns.map((columnData) => (
            <td>{columnData}</td>
          ))}
          <td>Acciones</td>
        </tr>
      )}
    </>
  );
}

function propertyIsIncluded(tableRowsProperties, property) {
  return tableRowsProperties.includes(property);
}

export default Table;