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
        <span className={`${style.line} ${style.line1}`}></span>
        <span className={`${style.line} ${style.line2}`}></span>
        <span className={`${style.line} ${style.line3}`}></span>
      </div>
    </div>
  );
};

export default Hamburger;
