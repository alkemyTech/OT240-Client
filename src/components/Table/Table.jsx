import React from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from '../loader/Loader';
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
      {/* <h1>{title}</h1> */}
      <table className={styles.table}>
        <thead>{generateTableHead(theadColumns, isOrganization)}</thead>
        <tbody>{generateRows(tableRowsData, tableRowsProperties, buttons, isOrganization)}</tbody>
      </table>
      {/* {!isOrganization && (
        <button onClick={addBtnHandler} className={styles.addBtn}>{`Agregar ${title}`}</button>
      )} */}
    </div>
  ) : (
    <div className={styles.loader}>
      <Loader />
    </div>
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
            const isDateValue = property === 'createdAt';
            const isHtml =
              property === 'content' || property === 'description' || property === 'welcomeText';
            if (propertyIsIncluded(tableRowsProperties, property)) {
              return (
                <td key={property}>
                  {isDateValue ? (
                    new Date(value).toLocaleDateString()
                  ) : isHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: value } || ''}></div>
                  ) : (
                    value
                  )}
                </td>
              );
            }
          })}
          <td className={styles.buttons}>
            {buttons.map(({ title, handler, className }) => (
              <button key={title} onClick={() => handler(tableRow)} className={styles[className]}>
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
          {theadColumns.map((columnData, i) => (
            <td key={i}>{columnData}</td>
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
