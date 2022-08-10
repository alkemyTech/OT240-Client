import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import styles from './styles/testimonials.module.scss';
import { TestimonialCard } from './TestimonialCard';
import testimonialsMock from '../../testimonials.mock';

export const Testimonials = ({ quantity }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div
        className={
          !location.pathname.includes('testimonios')
            ? `${styles.header}`
            : `${styles.headerCentered}`
        }>
        <h2 className={styles.title}>Testimonios</h2>
        {!location.pathname.includes('testimonios') && <Link to='/testimonios'>{`Ver mas >`}</Link>}
      </div>
      <div className={styles.cards}>
        {testimonialsMock.slice(0, quantity).map((el) => (
          <TestimonialCard key={el.id} {...el} />
        ))}
      </div>
      {location.pathname.includes('testimonios') && (
        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>
            <button className={styles.button1}>¡Agregar mi testimonio!</button>
            <button className={styles.button2} onClick={() => navigate('/')}>
              Ir al inicio
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
