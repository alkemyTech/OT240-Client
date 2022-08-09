import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import register from './styles/Register.module.scss';
import InputField from '../InputField/InputField';

const Register = () => {

  const validate = Yup.object({
    registerFirstName: Yup.string().required('El nombre es requerido').min(3, 'El nombre debe contener al menos 3 caracteres'),
    registerLastName: Yup.string().required('El apellido es requerido').min(3, 'El apellido debe contener al menos 3 caracteres'),
    registerEmail: Yup.string().required('El email es requerido').email('Email es invalido'),
    registerPassword: Yup.string().required('Contraseña es requerido').min(6, 'La contraseña debe contener al menos 6 caracteres'),
    registerConfirmPassword: Yup.string().required('Confirmar contraseña es requerido').oneOf([Yup.ref('registerPassword'), null], 'Las contraseñas no coinciden')
  });

  const handleSubmit = async(values) => {

    
  };

  return (
    <div className={register.container}>
      <div className={register.formContainer}>
          <h3 className={register.bienvenido}> Bienvenido </h3>
          <h4>Registrate!</h4>
          <Formik
            initialValues={{
              registerFirstName: '',
              registerLastName: '',
              registerEmail: '',
              registerPassword: '',
              registerConfirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form onSubmit={formik.handleSubmit}>
                  <InputField label='Nombre' name='registerFirstName' type='text' />
                  <InputField label='Apellido' name='registerLastName' type='text' />
                  <InputField label='Email' name='registerEmail' type='email' />
                  <InputField label='Contraseña' name='registerPassword' type='Password' />
                  <InputField label='Confirmar contraseña' name='registerConfirmPassword' type='Password' />
                  <button type='submit'> Registrarse </button>
              </Form>
            )}
          </Formik>
          <p className={register.registro}>Ya tienes una cuenta? <a href='/login'>Inicia sesión </a></p>
      </div>
      <div className={register.imageContainer}></div>
    </div>
  );
};

export default Register;