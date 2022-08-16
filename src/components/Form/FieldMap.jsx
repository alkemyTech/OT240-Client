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
    default:
      return recievedName;
  }
};

const FieldSwitch = ({ field }) => {
  switch (field) {
    case 'image':
      return <FileField field={field} />;
    case 'content':
    case 'welcomeText':
    case 'description':
      return <TextEditor field={field} />;
    default:
      return <TextField field={field} />;
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
            <FieldSwitch field={key} />
          </div>
        ))}
    </>
  );
};

export default FieldMap;
