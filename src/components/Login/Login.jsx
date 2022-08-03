import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import login from './styles/Login.module.scss';
import InputField from '../InputField/InputField';

const Login = () => {

  let submitt = {};

  const validate = Yup.object({
    loginEmail: Yup.string().required('Email is required').email('Email is invalid'),
    loginPassword: Yup.string().required('Password is required').min(6, 'Password must be at least 6 character')
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
                  <InputField label='Password' name='loginPassword' type='Password' />
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