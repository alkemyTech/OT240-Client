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
          { text: 'Novedades', route: '/backoffice/novedades' },
          { text: 'Actividades', route: '/backoffice/actividades' },
          { text: 'Categorias', route: '/backoffice/categorias' },
          { text: 'Testimonios', route: '/backoffice/testimonios' },
          { text: 'Organización', route: '/backoffice/organizacion' },
          { text: 'Slides', route: '/backoffice/slides' },
          { text: 'Usuarios', route: '/backoffice/usuarios' },
          { text: 'Miembros', route: '/backoffice/miembros' },
        ])
      : setNavigationItems([
          { text: 'Inicio', route: '/' },
          { text: 'Nosotros', route: '/nosotros' },
          { text: 'Novedades', route: '/novedades' },
          { text: 'Testimonios', route: '/testimonios' },
          { text: 'Contacto', route: '/contacto' },
          { text: 'Contribuye', route: '/contribuye' },
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
