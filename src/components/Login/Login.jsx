import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import login from './styles/Login.module.scss';
import InputField from '../InputField/InputField';

const Login = () => {

  let submitt = {};

  const validate = Yup.object({
    loginEmail: Yup.string().required('El email es requerido').email('El email es invalido'),
    loginPassword: Yup.string().required('La contraseña es requerida').min(6, 'La contraseña tiene que ser de al menos 6 caracteres')
  })

  return (
    <div className={login.container}>
      <div className={login.formContainer}>
          <p className={login.bienvenido}> Bienvenido </p>
          <h4>Inicia sesión en tu cuenta!</h4>
          <Formik
            initialValues={{
              loginEmail: '',
              loginPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
              // IMPORTANT
              // Handle API submission
              submitt = values;
              console.log(submitt); 
            }}
          >
            {formik => (
              <Form onSubmit={formik.handleSubmit}>
                  <InputField label='Email' name='loginEmail' type='text' />
                  <InputField label='Contraseña' name='loginPassword' type='Password' />
                  <button type='submit'> Inicia sesión </button>
              </Form>
            )}
          </Formik>
          <p className={login.registro}>No tienes una cuenta? <a href='/registro'>Registrate </a></p>
      </div>
        <img src="/images/Login-image.png" alt='login'/>
    </div>
  );
};

export default Login;