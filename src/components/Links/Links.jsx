import React from 'react';
import style from './styles/Links.module.scss';
import { NavLink } from 'react-router-dom';

const Links = ({ navigationItems }) => {
  const handleActiveTab = (navData) =>
    navData.isActive ? `${style.link} ${style.activeNavlink}` : `${style.link} `;

  return !navigationItems ? (
    <div>Loading...</div>
  ) : (
    <div className={style.links}>
      {navigationItems.map(({ text, route }, index) => {
        return (
          <NavLink key={index} to={route} className={handleActiveTab}>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};


export default Links;
