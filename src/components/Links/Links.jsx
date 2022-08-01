import React from 'react';
import style from './styles/Links.module.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Links = () => {
  const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {
    //obtener links desde endpoint de datos públicos
    setNavigationItems([
      { text: 'Inicio', route: '/' },
      { text: 'Nosotros', route: '/about' },
      { text: 'Novedades', route: '/news' },
      { text: 'Testimonios', route: '/testimonials' },
      { text: 'Contacto', route: '/contact' },
      { text: 'Contribuye', route: '/contrib' },
    ]);
  }, [navigationItems]);

  const handleActiveTab = (navData) =>
    navData.isActive ? `${style.link} ${style.activeNavlink}` : `${style.link} `;

  return (
    <div className={style.links}>
      {navigationItems.map(({ text, route }) => {
        return (
          <NavLink to={route} className={handleActiveTab}>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Links;
