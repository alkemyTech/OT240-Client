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
    <div>
      <Formik
        initialValues={{
          name: '',
          image: '',
        }}
        validationSchema={validationSchema}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={values.name} onChange={handleChange} />
            <input type='text' name='image' value={values.image} onChange={handleChange} />
            <button type='submit'>Guardar cambios</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default EditOrganization;
