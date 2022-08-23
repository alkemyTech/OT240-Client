import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import style from './styles/Header.module.scss';
import logo from './assets/LOGO-SOMOS-MAS.png';
import Hamburger from '../Hamburger/Hamburger';
import Links from '../Links/Links';
import Buttons from '../Buttons/Buttons';
import { CONSTANTS } from '../../constants';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [navigationItems, setNavigationItems] = useState([]);

  const onClickHanddler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    //obtener links desde endpoint de datos públicos o de algun store de redux y que se cargue al principio
    location.pathname.includes('backoffice')
      ? setNavigationItems(CONSTANTS.HEADER_LINKS.BACKOFFICE_LINKS)
      : setNavigationItems(CONSTANTS.HEADER_LINKS.PUBLIC_LINKS);
  }, [location.pathname]);

  return (
    <>
      <header className={style.header}>
        <div className={style.topBar}>
          <Link to={'/'}>
            <img src={logo} alt='somos_mas_logo' />
          </Link>
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
          <Buttons lateralBtn={true} />
        </div>
      </header>
    </>
  );
};

export default Header;
