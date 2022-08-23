import React from 'react';
import styles from './styles/ContactMe.module.scss';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import fetchApi from '../../axios/axios';
import { Link } from 'react-router-dom';
import showAlert from '../../services/alert';

function ContactMe() {
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    message: Yup.string().required(),
  });

  const handleSubmit = async (values) => {
    console.log(values);
    // Should add some UI feedback for the petition result
    try {
      const response = await fetchApi({ url: '/contacts', method: 'post', data: values });
      if (response.status === 200) {
        return showAlert({ title: 'Contacto enviado exitosamente', text: '', icon: 'success' });
      }
    } catch (e) {
      return showAlert({
        title: 'Hubo un problema al enviar el contacto',
        text: '',
        icon: 'error',
      });
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.asideColumn}>
        <p>
          En Somos Más trabajamos en algunos de los lugares más difíciles para llegar a los niños y
          niñas más desfavorecidos del mundo. Para salvar sus vidas. Para defender sus derechos.
          Para ayudarles a alcanzar su máximo potencial. En 190 países y territorios, trabajamos
          para cada niño y niña, en todas partes, cada día, para construir un mundo mejor para
          todos. Y nunca nos rendimos.
        </p>
        <h2>¿Querés contribuir?</h2>
        <button className={styles.colaborateBtn}>Contribuir</button>
      </div>
      <div className={styles.formColumn}>
        <h1>Contactate con nosotros!</h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            //For loader integration
            isSubmitting,
          }) => (
            <form className={styles.contactMeForm} onSubmit={handleSubmit}>
              <input
                name='name'
                value={values.name}
                onChange={handleChange}
                placeholder='Nombre y apellido'
                required
              />
              <ErrorMessage name='name' component='p' className={styles.inputError} />
              <input
                name='email'
                value={values.email}
                onChange={handleChange}
                placeholder='Email'
                required
              />
              <ErrorMessage name='email' component='p' className={styles.inputError} />
              <textarea
                name='message'
                value={values.message}
                onChange={handleChange}
                placeholder='Escribe tu mensaje...'
                required
              />
              <ErrorMessage name='message' component='p' className={styles.inputError} />
              <div className={styles.actionsContainer}>
                <button className={styles.submitBtn} type='submit'>
                  Enviar Contacto
                </button>
                <Link to='/'>
                  <button>Ir a Inicio</button>
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactMe;
