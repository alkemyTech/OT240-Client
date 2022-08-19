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
        <div className={styleBtn}>
          <Link to='/login'>Log in</Link>
        </div>
      )}
      {!user && !pathname.includes('registro') && (
        <div className={styleBtnRegister}>
          <Link to='/registro'>Registrate</Link>
        </div>
      )}
      <RequireAuth allowedRoles={[1]}>
        <div className={styleBtn}>
          <Link to={'/backoffice'}>Backoffice</Link>
        </div>
      </RequireAuth>
      <RequireAuth>
        <div className={styleBtn}>
          <Link to={'/miperfil'}>Perfil</Link>
        </div>
        <div className={styleBtn}>
          <Link onClick={handleLogOut} to={'/login'}>
            Log out
          </Link>
        </div>
      </RequireAuth>
    </div>
  );
};

export default Buttons;
