import React from 'react';
import style from './styles/Hamburger.module.scss';

const Hamburger = ({ menuIsOpen, setMenuIsOpen }) => {
  const onClickHanddler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className={style.hamburgerContainer}>
      <input className={style.checkbox} type='checkbox' name='' id='' onClick={onClickHanddler} />
      <div className={style.hamburgerLines}>
        <span
          className={
            !menuIsOpen
              ? `${style.line} ${style.line1}`
              : `${style.line} ${style.line1} ${style.line1rot}`
          }></span>
        <span
          className={
            !menuIsOpen
              ? `${style.line} ${style.line2}`
              : `${style.line} ${style.line2} ${style.line2rot}`
          }></span>
        <span
          className={
            !menuIsOpen
              ? `${style.line} ${style.line3}`
              : `${style.line} ${style.line3} ${style.line3rot}`
          }></span>
      </div>
    </div>
  );
};

export default Hamburger;
