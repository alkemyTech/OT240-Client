import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import styles from './styles/testimonials.module.scss';
import { TestimonialCard } from './TestimonialCard';
//import testimonialsMock from '../../testimonials.mock';
import fetchApi from '../../axios/axios';

export const Testimonials = ({ quantity }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [testimonials, setTestimonials] = React.useState([]);

  React.useEffect(() => {    
    const getTestimonials = async () => {
      try {
        const { data } = await fetchApi({ method: 'get', url: '/testimonials' });
        setTestimonials(data);
      } catch (err) {
        console.log("Error en el get");        
      }  
    };
    getTestimonials();    
  }, []);

  const handleAdd = () => {
    navigate("crear", {
      state: {
        title: 'Crear Testimonio',
        options: { method: 'post', url: `/testimonials` },
        from: location,
        fields: { name: "", image: '', content: "" },
      },
    });
  };

  //testimonialsMock.slice(0, quantity)
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
        {testimonials.map((el) => (
          <TestimonialCard key={el.id} {...el} />
        ))}
      </div>
      {location.pathname.includes('testimonios') && (
        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>
            <button className={styles.button1} onClick={()=>handleAdd()}>¡Agregar mi testimonio!</button>
            <button className={styles.button2} onClick={() => navigate('/')}>
              Ir al inicio
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
