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

const fieldSwitch = (key, value, setState) => {
  switch (key) {
    case 'image':
      return (
        <FileField
          style={style}
          label={translateFieldName(key)}
          field={key}
          value={value}
          setState={setState}
        />
      );
    case 'content':
    case 'welcomeText':
    case 'description':
      return (
        <TextEditor
          style={style}
          label={translateFieldName(key)}
          field={key}
          value={value}
          setState={setState}
        />
      );
    default:
      return (
        <TextField
          style={style}
          label={translateFieldName(key)}
          field={key}
          value={value}
          setState={setState}
        />
      );
  }
};

export default fieldSwitch;
