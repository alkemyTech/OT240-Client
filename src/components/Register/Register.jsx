import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import register from './styles/Register.module.scss';
import InputField from '../InputField/InputField';

const Register = () => {

  let formData = {};

  const validate = Yup.object({
    registerName: Yup.string().required('El nombre es requerido').min(3, 'El nombre debe contener al menos 3 caracteres'),
    registerEmail: Yup.string().required('El email es requerido').email('Email es invalido'),
    registerPassword: Yup.string().required('Contraseña es requerido').min(6, 'La contraseña debe contener al menos 6 caracteres'),
    registerConfirmPassword: Yup.string().required('Confirmar contraseña es requerido').oneOf([Yup.ref('registerPassword'), null], 'Las contraseñas no coinciden')
  });

  return (
    <div className={register.container}>
      <div className={register.formContainer}>
          <p className={register.bienvenido}> Bienvenido </p>
          <h4>Inicia sesión en tu cuenta!</h4>
          <Formik
            initialValues={{
              registerName: '',
              registerEmail: '',
              registerPassword: '',
              registerConfirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
              // IMPORTANT
              // Handle API submission
              formData = values;
              console.log(formData); 
            }}
          >
            {formik => (
              <Form onSubmit={formik.handleSubmit}>
                  <InputField label='Nombre' name='registerName' type='text' />
                  <InputField label='Email' name='registerEmail' type='email' />
                  <InputField label='Contraseña' name='registerPassword' type='Password' />
                  <InputField label='Confirmar contraseña' name='registerConfirmPassword' type='Password' />
                  <button type='submit'> Inicia sesión </button>
              </Form>
            )}
          </Formik>
          <p className={register.registro}>Ya tienes una cuenta? <a href='/registro'>Inicia sesión </a></p>
      </div>
        <img src="/images/Login-image.png" alt='login'/>
    </div>
  );
};

export default Register;