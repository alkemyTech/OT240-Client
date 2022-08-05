import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './styles/BackofficeCards.module.scss';
import BackofficeCard from '../BackofficeCard/BackofficeCard';

const BackofficeCards = () => {
  const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {
    //obtener links desde endpoint de datos públicos o de algun store de redux y que se cargue al principio
    setNavigationItems([
      { text: 'Novedades', route: '/backoffice/news', img: 'news.png' },
      { text: 'Actividades', route: '/backoffice/activities', img: 'activities.png' },
      { text: 'Categorias', route: '/backoffice/categories', img: 'categories.png' },
      { text: 'Testimonios', route: '/backoffice/testimonies', img: 'testimonial.png' },
      { text: 'Organización', route: '/backoffice/organization', img: 'organization.png' },
      { text: 'Slides', route: '/backoffice/slides', img: 'slides.png' },
      { text: 'Usuarios', route: '/backoffice/users', img: 'users.png' },
      { text: 'Miembros', route: '/backoffice/members', img: 'members.png' },
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
