import React from 'react';
import style from './styles/Footer.module.scss';
import LogoFooter from '../LogoFooter/LogoFooter';
import Links from '../Links/Links';
import RedesIcons from '../RedesIcons/RedesIcons';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <LogoFooter />
      <Links />
      <RedesIcons />
      <p>2022 by Alkemy. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
