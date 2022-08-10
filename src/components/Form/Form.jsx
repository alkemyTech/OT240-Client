import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import style from './styles/Form.module.scss';

import convertToBase64 from '../../utils/handleBase64';
import fieldSwitch from './fieldSwitch';
import fetchApi from '../../axios/axios';

import StatusMessage from './StatusMessage';
import Button from './Button';

const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fields: recievedFields, options, title, from: prevLocation } = location.state;

  const messageRef = React.useRef();
  const [fields, setFields] = React.useState(recievedFields);
  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');

  const mapFields = (fields) => {
    const entries = Object.entries(fields);
    const HTMLFields = entries.map(([key, value]) => {
      return (
        <div key={key} className={style.field}>
          {fieldSwitch(key, value, setFields)}
        </div>
      );
    });
    return HTMLFields;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const convertedImage =
        fields?.image instanceof Blob || fields?.image instanceof ArrayBuffer
          ? await convertToBase64(fields?.image)
          : fields.image;
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
          setError('Se requieren permisos especiales para realizar esta accion');
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
    } finally {
      window.scrollTo(0, 0);
    }
  };

  return (
    <article className={style.container}>
      <h1>{title}</h1>
      <form>
        <div ref={messageRef}>
          {success && (
            <StatusMessage message={success} style={style.success} onClick={() => navigate(-1)} />
          )}
          {error && (
            <StatusMessage message={error} style={style.error} onClick={() => setError('')} />
          )}
        </div>
        {mapFields(fields)}
        <div className={style.buttonsContainer}>
          <Button style={style.submitBtn} text='Enviar' onClick={handleSubmit} />
          <Button style={style.cancelBtn} text='Cancelar' onClick={() => navigate(prevLocation)} />
        </div>
      </form>
    </article>
  );
};

export default Form;
