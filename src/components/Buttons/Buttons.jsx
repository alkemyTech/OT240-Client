import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './styles/Buttons.module.scss';
import { Link } from 'react-router-dom';

const Buttons = () => {
  const location = useLocation();

  //estos se tomaran desde el state o local storage!!!
  const isAdmin = true;
  const isAuth = true;

  return (
    <div className={style.buttons}>
      {!isAuth && (
        <>
          <div className={style.btn}>
            <Link to={'/login'}>Log in</Link>
          </div>
          <div className={`${style.btn} ${style.registerBtn}`}>
            <Link to={'/registro'}>Registrate</Link>
          </div>
        </>
      )}
      {isAdmin && !location.pathname.includes('backoffice') && (
        <div className={style.btn}>
          <Link to={'/backoffice'}>Backoffice</Link>
        </div>
      )}
      {isAuth && (
        <div className={style.btn}>
          <Link to={'/'}>Log out</Link>
        </div>
      )}
    </div>
  );
};

export default Buttons;
