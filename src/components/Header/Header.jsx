import React, { useState } from 'react';
import style from './styles/Header.module.scss';
import logo from './assets/logo.svg';
import Hamburger from '../Hamburger/Hamburger';
import Links from '../Links/Links';
import Buttons from '../Buttons/Buttons';
const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <header className={style.header}>
        <div className={style.topBar}>
          <img src={logo} alt='somos_mas_logo' />
          <div className={` ${style.topLinks} `}>
            <Links />
            <Buttons />
          </div>
          <Hamburger
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
            className={style.hamburgerMenu}
          />
        </div>

        <div
          className={menuIsOpen ? `${style.lateralBar} ${style.extended}` : `${style.lateralBar} `}>
          <img src={logo} alt='somos_mas_logo' />
          <Links />
          <Buttons />
        </div>
      </header>
    </>
  );
};

export default Header;
