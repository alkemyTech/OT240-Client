import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import style from './styles/NewsForm.module.scss';
import fetchApi from '../../axios/axios';

const NewsForm = ({ existingNew }) => {
  const imgPreviewRef = React.useRef();
  const [image, setImage] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const handlePreview = (image) => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        imgPreviewRef.current.style.backgroundImage = `url('${reader.result}')`;
      };
      reader.readAsDataURL(image);
    } else {
      imgPreviewRef.current.style.backgroundImage = 'none';
    }
  };

  const submitNew = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', title);
    formData.append('content', content);
    const options = {
      method: 'post',
      url: '/news',
      data: formData,
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const { data } = await fetchApi(options);
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
          <div className={style.image}>
            <input
              type='file'
              id='imagen'
              onChange={(e) => {
                setImage(e.target.files[0]);
                handlePreview(e.target.files[0]);
              }}
            />
            {image && <div className={style.imgPreview} ref={imgPreviewRef}></div>}
          </div>
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
        <button className={style.submitBtn} onClick={submitNew}>
          Enviar
        </button>
      </form>
    </article>
  );
};

export default NewsForm;
