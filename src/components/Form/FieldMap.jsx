import React from 'react';

import style from './styles/Form.module.scss';

import TextField from './TextField';
import FileField from './FileField';
import TextEditor from './TextEditor';

const translateFieldName = (recievedName) => {
  switch (recievedName) {
    case 'name':
      return 'Nombre';
    case 'content':
      return 'Contenido';
    case 'description':
      return 'Descripción';
    case 'image':
      return 'Imagen';
    case 'phone':
      return 'Telefono';
    case 'welcomeText':
      return 'Texto de bienvenida';
    case 'address':
      return 'Dirección';
    case 'facebook':
      return 'Facebook';
    case 'linkedin':
      return 'Linkedin';
    case 'instagram':
      return 'instagram';
    case 'firstName':
      return 'Nombre';
    case 'lastName':
      return 'Apellido';
    case 'roleId':
      return 'Rol';
    default:
      return recievedName;
  }
};

const fieldSwitch = (key) => {
  switch (key) {
    case 'image':
      return <FileField field={key} />;
    case 'content':
    case 'welcomeText':
    case 'description':
      return <TextEditor field={key} />;
    default:
      return <TextField field={key} />;
  }
};

const FieldMap = ({ fields }) => {
  const entries = Object.entries(fields);
  return (
    <>
      {entries.length &&
        entries.map(([key, value]) => (
          <div key={key} className={style.field}>
            <label className={style.label} htmlFor={key}>
              {translateFieldName(key)}
            </label>
            {fieldSwitch(key)}
          </div>
        ))}
    </>
  );
};

export default FieldMap;
