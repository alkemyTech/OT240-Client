import React from 'react';
import style from './styles/Buttons.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import logOut from '../../helpers/logOut.js';

const Buttons = () => {
  //estos se tomaran desde el state o local storage!!!
  const isAdmin = true;
  const isAuth = true;
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate('/login');
  };

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
      {isAdmin && (
        <div className={style.btn}>
          <Link to={'/backoffice'}>Backoffice</Link>
        </div>
      )}
      {isAuth && (
        <div className={style.btn}>
          <Link onClick={handleLogOut} to={'/login'}>
            Log out
          </Link>
        </div>
      )}
    </div>
  );
};

export default Buttons;
