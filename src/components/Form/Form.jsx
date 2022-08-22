import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import style from './styles/Form.module.scss';
import Button from './Button';
import FieldMap from './FieldMap';
import { Loader } from '../loader/Loader';
import { submitForm, formFields, formError, formSuccess } from '../../redux/actions/form.actions';

const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, fields, loading } = useSelector((state) => state.form);
  const { fields: recievedFields, options, title, from: prevLocation } = location.state;

  React.useEffect(() => {
    dispatch(formFields(recievedFields));

    return () => {
      dispatch(formFields({}));
      dispatch(formSuccess(null));
      dispatch(formError(null));
    };
  }, [dispatch, recievedFields]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      submitForm(
        { ...options, data: fields },
        () => navigate(prevLocation),
        () => navigate(prevLocation)
      )
    );
  };

  const handleCloseForm = () => {
    dispatch(formError(null));
    dispatch(formSuccess(null));
    navigate(prevLocation);
  };

  return (
    <article className={style.container}>
      {loading ? (
        <div className={style.loader}>
          <Loader />
        </div>
      ) : error ? (
        <p className={style.error}>{error}</p>
      ) : (
        <>
          <h1>{title}</h1>
          <form>
            <FieldMap fields={fields} />
            <div className={style.buttonsContainer}>
              <Button style={style.submitBtn} text='Enviar' onClick={handleSubmit} />
              <Button style={style.cancelBtn} text='Cancelar' onClick={handleCloseForm} />
            </div>
          </form>
        </>
      )}
    </article>
  );
};

export default Form;
