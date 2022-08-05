import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import style from './styles/Header.module.scss';
import logo from './assets/logo.svg';
import Hamburger from '../Hamburger/Hamburger';
import Links from '../Links/Links';
import Buttons from '../Buttons/Buttons';

const Header = () => {
  const location = useLocation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [navigationItems, setNavigationItems] = useState([]);

  const onClickHanddler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    //obtener links desde endpoint de datos públicos o de algun store de redux y que se cargue al principio
    location.pathname.includes('backoffice')
      ? setNavigationItems([
          { text: 'Novedades', route: '/backoffice/news' },
          { text: 'Actividades', route: '/backoffice/activities' },
          { text: 'Categorias', route: '/backoffice/categories' },
          { text: 'Testimonios', route: '/backoffice/testimonies' },
          { text: 'Organización', route: '/backoffice/organization' },
          { text: 'Slides', route: '/backoffice/slides' },
          { text: 'Usuarios', route: '/backoffice/users' },
          { text: 'Miembros', route: '/backoffice/members' },
        ])
      : setNavigationItems([
          { text: 'Inicio', route: '/' },
          { text: 'Nosotros', route: '/about' },
          { text: 'Novedades', route: '/news' },
          { text: 'Testimonios', route: '/testimonials' },
          { text: 'Contacto', route: '/contact' },
          { text: 'Contribuye', route: '/contrib' },
        ]);
  }, [location.pathname]);

  return (
    <>
      <header className={style.header}>
        <div className={style.topBar}>
          <img src={logo} alt='somos_mas_logo' />
          <div className={` ${style.topLinks} `}>
            <Links navigationItems={navigationItems} />
            <Buttons />
          </div>
          <Hamburger
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
            className={style.hamburgerMenu}
          />
        </div>

        <div
          className={menuIsOpen ? `${style.lateralBar} ${style.extended}` : `${style.lateralBar} `}
          onClick={onClickHanddler}>
          <img src={logo} alt='somos_mas_logo' />
          <Links navigationItems={navigationItems} />
          <Buttons menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        </div>
      </header>
    </>
  );
};

export default Header;
