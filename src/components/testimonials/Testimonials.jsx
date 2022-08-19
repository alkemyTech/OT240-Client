import React, { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import styles from './styles/testimonials.module.scss';
import { TestimonialCard } from './TestimonialCard';
import { fetchTestimonial } from '../../redux/actions/testimonial.action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const Testimonials = ({ quantity }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { entries, loading, error } = useSelector((state) => state.testimonial);

  useEffect(() => {
    dispatch(fetchTestimonial({ method: 'get', url: '/testimonials' }));
  }, [dispatch]);

  const handleAdd = () => {
    navigate('crear', {
      state: {
        title: 'Crear Testimonio',
        options: { method: 'post', url: `/testimonials` },
        from: location,
        fields: { name: '', image: '', content: '' },
      },
    });
  };

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
        {entries.map((el) => (
          <TestimonialCard key={el.id} {...el} />
        ))}
      </div>
      {location.pathname.includes('testimonios') && (
        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>
            <button className={styles.button1} onClick={() => handleAdd()}>
              ¡Agregar mi testimonio!
            </button>
            <button className={styles.button2} onClick={() => navigate('/')}>
              Ir al inicio
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
