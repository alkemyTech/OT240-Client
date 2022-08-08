import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles/EditOrganization.module.scss';

function EditOrganization() {
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    image: Yup.string().required(),
  });
  return (
    <div className={styles.mainContainer}>
      <h1>Editar Organización</h1>
      <div className={styles.formContainer}>
        <Formik
          initialValues={{
            name: '',
            image: '',
          }}
          validationSchema={validationSchema}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <p>
                <strong>Somos Más</strong>
              </p>
              <label htmlFor='name'>Nombre de la organización</label>
              <input type='text' name='name' value={values.name} onChange={handleChange} />
              <img src='http://localhost:3001/static/media/logo.7391c848.svg' />
              <label htmlFor='image'>URL de imagen</label>
              <input type='text' name='image' value={values.image} onChange={handleChange} />
              <button type='submit'>Guardar cambios</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EditOrganization;
