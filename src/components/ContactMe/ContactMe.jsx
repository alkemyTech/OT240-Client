import React from 'react';
import styles from './styles/ContactMe.module.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';

function ContactMe() {
  return (
    <div className={styles.layout}>
      <div className={styles.asideColumn}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nisi placeat, corrupti,
          explicabo voluptatum est amet dolorem cum animi numquam dolor! Amet vero tempore
          recusandae libero ipsum aspernatur sequi aut.
        </p>
        <h2>¿Querés contribuir?</h2>
        <button className={styles.colaborateBtn}>Contribuir</button>
      </div>
      <div className={styles.formColumn}>
        <h1>Contactate con nosotros!</h1>
        <form className={styles.contactMeForm}>
          <input placeholder='Nombre y apellido' required />
          <input placeholder='Email' required />
          <textarea placeholder='Escribe tu mensaje...' required />
          <div className={styles.actionsContainer}>
            <button className={styles.submitBtn}>Enviar Contacto</button>
            <button>Ir a Inicio</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
