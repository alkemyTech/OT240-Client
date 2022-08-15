import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { formField } from '../../redux/actions/form.actions';

const TextEditor = ({ field }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.fields[field]);

  const onChange = (e, editor) => {
    dispatch(formField({ [field]: editor.getData() }));
  };

  return <CKEditor editor={ClassicEditor} onChange={onChange} data={value} />;
};

export default TextEditor;
