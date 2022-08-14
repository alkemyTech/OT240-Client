import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import style from './styles/Form.module.scss';

import convertToBase64 from '../../utils/handleBase64';

import StatusMessage from './StatusMessage';
import Button from './Button';
import FieldMap from './FieldMap';

import { submitForm, setFields } from '../../redux/actions/form.actions';
import { setError, setSuccess } from '../../redux/actions/common.action';

const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, success, fields } = useSelector((state) => state.form);
  const messageRef = React.useRef();
  const { fields: recievedFields, options, title, from: prevLocation } = location.state;

  React.useEffect(() => {
    dispatch(setFields(recievedFields));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setError(''));
    dispatch(setSuccess(''));
    try {
      const reqConfig = { ...options, data: { ...fields } };
      if (fields?.image) {
        const convertedImage = await convertToBase64(fields?.image);
        reqConfig.data.image = convertedImage;
      }
      submitForm(reqConfig);
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
            <StatusMessage
              message={success}
              style={style.success}
              onClick={() => {
                dispatch(setFields({}));
                navigate(prevLocation);
              }}
            />
          )}
          {error && (
            <StatusMessage
              message={error}
              style={style.error}
              onClick={() => dispatch(setError(''))}
            />
          )}
        </div>
        <FieldMap fields={fields} />
        <div className={style.buttonsContainer}>
          <Button style={style.submitBtn} text='Enviar' onClick={handleSubmit} />
          <Button
            style={style.cancelBtn}
            text='Cancelar'
            onClick={() => {
              dispatch(setFields({}));
              navigate(prevLocation);
            }}
          />
        </div>
      </form>
    </article>
  );
};

export default Form;
