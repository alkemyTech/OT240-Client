import React from 'react';
import style from './styles/LogoFooter.module.scss';
import logo from './assets/logo.svg';

const LogoFooter = () => {
  return (
    <div className={style.logo}>
      <div className={style.separator}></div>
      <img src={logo} alt='' />
      <div className={style.separator}></div>
    </div>
  );
};

export default LogoFooter;