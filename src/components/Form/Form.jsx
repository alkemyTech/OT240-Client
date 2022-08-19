import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import style from './styles/Form.module.scss';

import StatusMessage from './StatusMessage';
import Button from './Button';
import FieldMap from './FieldMap';

import { submitForm, formFields, formError, formSuccess } from '../../redux/actions/form.actions';

const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, success, fields } = useSelector((state) => state.form);
  const messageRef = React.useRef();
  const { fields: recievedFields, options, title, from: prevLocation } = location.state;

  React.useEffect(() => {
    dispatch(formFields(recievedFields));
  }, [dispatch, recievedFields]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm({ ...options, data: fields }));
    window.scrollTo(0, 0);
  };

  const handleCloseSuccess = () => {
    dispatch(formFields({}));
    dispatch(formSuccess(null));
    dispatch(formError(null));
    navigate(prevLocation);
  };

  const handleCloseError = () => {
    dispatch(formError(null));
    dispatch(formSuccess(null));
    dispatch(formFields({}));
  };

  const handleCloseForm = () => {
    dispatch(formError(null));
    dispatch(formSuccess(null));
    dispatch(formFields({}));
    navigate(prevLocation);
  };

  return (
    <article className={style.container}>
      <h1>{title}</h1>
      <form>
        <div ref={messageRef}>
          {success && (
            <StatusMessage message={success} style={style.success} onClick={handleCloseSuccess} />
          )}
          {error && (
            <StatusMessage message={error} style={style.error} onClick={handleCloseError} />
          )}
        </div>
        <FieldMap fields={fields} />
        <div className={style.buttonsContainer}>
          <Button style={style.submitBtn} text='Enviar' onClick={handleSubmit} />
          <Button style={style.cancelBtn} text='Cancelar' onClick={handleCloseForm} />
        </div>
      </form>
    </article>
  );
};

export default Form;
