import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/auth.action';

import login from './styles/Login.module.scss';
import InputField from '../InputField/InputField';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading} = useSelector((store) => store.auth);

  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const validate = Yup.object({
    loginEmail: Yup.string().required('El email es requerido').email('El email es invalido'),
    loginPassword: Yup.string()
      .required('La contraseña es requerida')
      .min(6, 'La contraseña tiene que ser de al menos 6 caracteres'),
  });

  const handleSubmit = async (values) => {
    const options = {
      method: 'POST',
      url: '/auth/login',
      data: {
        email: values.loginEmail,
        password: values.loginPassword,
      },
    };
    dispatch(loginAction(options));
  };

  return (
    <div className={login.container}>
      <div className={login.formContainer}>
        <p className={login.bienvenido}> Bienvenido </p>
        <h4>Inicia sesión en tu cuenta!</h4>
        <Formik
          initialValues={{
            loginEmail: '',
            loginPassword: '',
          }}
          validationSchema={validate}
          onSubmit={handleSubmit}>
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <InputField label='Email' name='loginEmail' type='text' />
              <InputField label='Contraseña' name='loginPassword' type='Password' />
              <button type='submit'> Inicia sesión </button>
            </Form>
          )}
        </Formik>
        <p className={login.registro}>
          No tienes una cuenta? <a href='/registro'>Registrate </a>
        </p>
      </div>
      <div className={login.imageContainer}></div>
    </div>
  );
};

export default Login;
