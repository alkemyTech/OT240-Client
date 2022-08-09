import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { convertToBase64 } from '../../utils/convertToBase64';
import style from './styles/Form.module.scss';
import close from './styles/assets/close.png';
import fetchApi from '../../axios/axios';

const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fields: recievedFields, options, title, from: prevLocation } = location.state;

  const [fields, setFields] = React.useState(recievedFields);
  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');

  const onChangeData = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

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

  const mapFields = (fields) => {
    const entries = Object.entries(fields);

    const generateFileField = (key, value) => (
      <>
        <label className={style.label} htmlFor={key}>
          {translateFieldName(key)}
        </label>
        <input
          name={key}
          type='file'
          id={key}
          onChange={(e) => setFields({ ...fields, image: e.target.files[0] })}
        />
        <img src={value} alt='' />
      </>
    );

    const generateContentField = (key, value) => (
      <>
        <p className={style.label}>{translateFieldName(key)}</p>
        <CKEditor
          editor={ClassicEditor}
          onChange={(e, editor) => setFields({ ...fields, [key]: editor.getData() })}
          data={value}
        />
      </>
    );

    const generateTextField = (key, value) => (
      <>
        <label className={style.label} htmlFor={key}>
          {translateFieldName(key)}
        </label>
        <input name={key} type='text' id={key} value={value} onChange={(e) => onChangeData(e)} />
      </>
    );

    const HTMLFields = entries.map(([key, value]) => (
      <div className={style.field} key={key}>
        {key === 'image'
          ? generateFileField(key)
          : key === 'content' || key === 'description'
          ? generateContentField(key, value)
          : generateTextField(key, value)}
      </div>
    ));
    return HTMLFields;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const convertedImage =
        fields?.image instanceof Blob ? await convertToBase64(fields?.image) : fields.image;
      const reqConfig = { ...options, data: { ...fields, image: convertedImage } };
      const { data } = await fetchApi(reqConfig);
      setSuccess(`La novedad fue guardada exitosamente`);
    } catch (err) {
      switch (err?.response?.status) {
        case 400:
          setError('Campos incorrectos/vacios');
          break;
        case 401:
          setError('Usuario deslogeado');
          break;
        case 403:
          setError('Se requieren permisos especiales para generar esta accion');
          break;
        case 404:
          setError('No se encontró el elemento');
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
      <h1>{title}</h1>
      <form>
        {success && (
          <div className={style.success} onClick={() => setSuccess('')}>
            <div>{success}</div>
            <img className={style.close} src={close} alt='close' />
          </div>
        )}
        {error && (
          <div className={style.error} onClick={() => setError('')}>
            <div>{error}</div>
            <img className={style.close} src={close} alt='close' />
          </div>
        )}
        {mapFields(fields)}
        <div className={style.buttonsContainer}>
          <button className={style.submitBtn} onClick={handleSubmit}>
            Enviar
          </button>
          <button className={style.cancelBtn} onClick={() => navigate(prevLocation)}>
            Cancelar
          </button>
        </div>
      </form>
    </article>
  );
};

export default Form;
