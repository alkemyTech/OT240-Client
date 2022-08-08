import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import style from './styles/NewsForm.module.scss';
import close from './styles/assets/close.png';
import fetchApi from '../../axios/axios';

const NewsForm = ({ existingNew, setFormIsOpen, setEditing }) => {
  const imgPreviewRef = React.useRef();
  const [image, setImage] = React.useState(existingNew?.image);
  const [title, setTitle] = React.useState(existingNew?.name);
  const [content, setContent] = React.useState(existingNew?.content);
  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    existingNew &&
      (imgPreviewRef.current.style.backgroundImage = `url('http://localhost:3000/img/news/${existingNew.image}')`);
  });

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
    setError('');
    setSuccess('');

    const formData = new FormData();

    image && formData.append('image', image);
    title && formData.append('name', title);
    content && formData.append('content', content);

    const isUpdate = existingNew ? { method: 'put', url: `/news/${existingNew.id}` } : {};

    const options = {
      method: 'post',
      url: '/news',
      ...isUpdate,
      data: formData,
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    try {
      const { data } = await fetchApi(options);
      handlePreview(image);
      setSuccess(`La novedad fue guardada exitosamente`);
    } catch (err) {
      switch (err.response.status) {
        case 400:
          setError('Campos incorrectos/vacios');
          break;
        case 401:
          setError('Usuario deslogeado');
          break;
        case 403:
          setError('Acceso denegado');
          break;
        case 404:
          setError('Ruta no encontrada');
          break;
        case 500:
          setError('Error en el servidor');
          break;
        default:
          setError(err.message);
          break;
      }
    }
  };

  return (
    <article className={style.container}>
      <h1>{existingNew ? 'Editar Novedad' : 'Crear Novedad'}</h1>
      <form>
        {success && (
          <div className={style.success} onClick={() => setSuccess('')}>
            {success}
            <img src={close} alt='close' />
          </div>
        )}
        {error && (
          <div className={style.error} onClick={() => setError('')}>
            {error}
            <img src={close} alt='close' />
          </div>
        )}
        <div className={style.field}>
          <label className={style.label} htmlFor='titulo'>
            Título:
          </label>
          <input type='text' id='titulo' value={title} onChange={(e) => setTitle(e.target.value)} />
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
              data={content}
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
        <div className={style.buttonsContainer}>
          <button className={style.submitBtn} onClick={submitNew}>
            Enviar
          </button>
          <button
            className={style.cancelBtn}
            onClick={() => {
              setFormIsOpen(false);
              setEditing(false);
            }}>
            Cancelar
          </button>
        </div>
      </form>
    </article>
  );
};

export default NewsForm;
