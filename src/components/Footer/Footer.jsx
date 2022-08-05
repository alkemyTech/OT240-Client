import React, { useEffect, useState } from 'react';
import style from './styles/Footer.module.scss';
import LogoFooter from '../LogoFooter/LogoFooter';
import Links from '../Links/Links';
import RedesIcons from '../RedesIcons/RedesIcons';

const Footer = () => {
  const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {
    //obtener links desde endpoint de datos públicos o de algun store de redux y que se cargue al principio
    setNavigationItems([
      { text: 'Inicio', route: '/' },
      { text: 'Nosotros', route: '/nosotros' },
      { text: 'Novedades', route: '/news' },
      { text: 'Testimonios', route: '/testimonios' },
      { text: 'Contacto', route: '/contacto' },
      { text: 'Contribuye', route: '/contribuye' },
    ]);
  }, []);

  return (
    <footer className={style.footer}>
      <LogoFooter />
      <Links navigationItems={navigationItems} />
      <RedesIcons />
      <p>2022 by Alkemy. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
