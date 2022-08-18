import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './styles/BackofficeCards.module.scss';
import BackofficeCard from '../BackofficeCard/BackofficeCard';

const BackofficeCards = () => {
  const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {
    //obtener links desde endpoint de datos públicos o de algun store de redux y que se cargue al principio
    setNavigationItems([
      { text: 'Novedades', route: '/backoffice/novedades', img: 'news.png' },
      { text: 'Actividades', route: '/backoffice/actividades', img: 'activities.png' },
      { text: 'Categorias', route: '/backoffice/categorias', img: 'categories.png' },
      { text: 'Testimonios', route: '/backoffice/testimonios', img: 'testimonial.png' },
      { text: 'Organización', route: '/backoffice/organizacion', img: 'organization.png' },
      { text: 'Contactos', route: '/backoffice/contactos', img: 'slides.png' },
      { text: 'Usuarios', route: '/backoffice/usuarios', img: 'usuarios.png' },
      { text: 'Miembros', route: '/backoffice/miembros', img: 'miembros.png' },
    ]);
  }, []);

  return (
    <div className={style.cards}>
      {navigationItems.map((item, index) => {
        return (
          <Link to={`${item.route}`} key={index}>
            <BackofficeCard item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default BackofficeCards;
