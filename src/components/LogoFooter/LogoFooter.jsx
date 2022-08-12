import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/LogoFooter.module.scss';
import logo from './assets/LOGO-SOMOS-MAS.png';

const LogoFooter = () => {
  return (
    <div className={style.logo}>
      <div className={style.separator}></div>
      <Link to={'/'}>
        <img src={logo} alt='' />
      </Link>
      <div className={style.separator}></div>
    </div>
  );
};

export default LogoFooter;
