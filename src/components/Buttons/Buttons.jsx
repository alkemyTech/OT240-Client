import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import style from './styles/Buttons.module.scss';
import { logout } from '../../redux/actions/auth.action';
import RequireAuth from '../RequireAuth/RequireAuth';

const Buttons = ({ lateralBtn }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogOut = () => {
    dispatch(logout());
    navigate('/login');
  };

  const styleBtn = lateralBtn ? `${style.btn} ${style.btnFixed} ` : `${style.btn} `;
  const styleBtnRegister = lateralBtn
    ? `${style.btn} ${style.registerBtn} ${style.btnFixed} `
    : `${style.btn} ${style.registerBtn}`;
  return (
    <div className={style.buttons}>
      {!user && !pathname.includes('login') && (
        <Link to='/login'>
          <div className={styleBtn}>Log in</div>
        </Link>
      )}
      {!user && !pathname.includes('registro') && (
        <Link to='/registro'>
          <div className={styleBtnRegister}>Registrate</div>
        </Link>
      )}
      <RequireAuth allowedRoles={[1]}>
        <Link to={'/backoffice'}>
          <div className={styleBtn}>Backoffice</div>
        </Link>
      </RequireAuth>
      <RequireAuth>
        <Link to={'/miperfil'}>
          {' '}
          <div className={styleBtn}>Perfil</div>
        </Link>
        <Link onClick={handleLogOut} to={'/login'}>
          <div className={styleBtn}>Log out</div>{' '}
        </Link>
      </RequireAuth>
    </div>
  );
};

export default Buttons;
