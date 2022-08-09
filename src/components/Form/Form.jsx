import React from 'react';
import { useLocation } from 'react-router-dom';

import { MyCkeditor } from '../Editor/Editor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';

const Form = () => {
  const location = useLocation();
  const {
    fields: recievedFields,
    isEditing: isEditingRecieved,
    options: optionsRecieved,
    title: recievedTitle,
  } = location.state;

  const [fields, setFields] = React.useState(recievedFields);
  const [options, setOptions] = React.useState(optionsRecieved);
  const [title, setTitle] = React.useState(recievedTitle);
  const [content, setContent] = React.useState('');

  const onChangeData = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const mapFields = (fields) => {
    const entries = Object.entries(fields);
    const HTMLFields = entries.map(([key, value], i) =>
      key == 'image' ? (
        <div key={i}>
          <label htmlFor={key}>{key}</label>{' '}
          <input name={key} type='file' id={key} onChange={(e) => onChangeData(e)} />
        </div>
      ) : key == 'content' || key == 'description' ? (
        <MyCkeditor
          onChange={(e, editor) => setFields({ ...fields, [key]: editor.getData() })}
          data={value}
        />
      ) : (
        <div key={i}>
          <label htmlFor={key}>{key}</label>{' '}
          <input name={key} type='text' id={key} value={value} onChange={(e) => onChangeData(e)} />
        </div>
      )
    );
    return HTMLFields;
  };

  return (
    <form>
      <h1>{title}</h1>
      {mapFields(fields)}
    </form>
  );
};

export default Form;
