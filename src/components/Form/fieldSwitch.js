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
      return 'Descripcion';
    case 'image':
      return 'Imagen';
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
