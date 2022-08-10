import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TextEditor = ({ field, label, value, setState, style }) => {
  return (
    <>
      <p className={style.label}>{label}</p>
      <CKEditor
        editor={ClassicEditor}
        onChange={(e, editor) => setState((prev) => ({ ...prev, [field]: editor.getData() }))}
        data={value}
      />
    </>
  );
};

export default TextEditor;