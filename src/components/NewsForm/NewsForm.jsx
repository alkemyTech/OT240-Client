import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import style from './styles/NewsForm.module.scss';

const NewsForm = ({ existingNew }) => {
  const [image, setImage] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const submitNew = (e) => {
    e.preventDefault();
    console.log(image, title, content);
  };

  return (
    <article className={style.container}>
      <h1>{existingNew ? 'Editar Novedad' : 'Crear Novedad'}</h1>
      <form>
        <div className={style.field}>
          <label className={style.label} htmlFor='titulo'>
            Título:
          </label>
          <input type='text' id='titulo' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={style.field}>
          <label className={style.label} htmlFor='imagen'>
            Imagen:
          </label>
          <input type='file' id='imagen' onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className={style.field}>
          <label className={style.label} htmlFor='content'>
            Contenido:
          </label>
          <div className={style.content}>
            <CKEditor
              editor={ClassicEditor}
              id='content'
              onChange={(e, editor) => setContent(editor.getData())}
            />
          </div>
        </div>
        <div className={style.field}>
          <label className={style.label} htmlFor='categoria'>
            Categoría:
          </label>
          <input type='text' placeholder='Novedades' disabled />
        </div>
        <button onClick={submitNew}>Enviar</button>
      </form>
    </article>
  );
};

export default NewsForm;
