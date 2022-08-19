import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/actions/auth.action';

const PrivateRoute = ({ allowedRoles }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((store) => store.auth);

  useEffect(() => {
    if (!user && !loading) {
      navigate('/login');
    }
    if (user && !allowedRoles.includes(user.roleId)) {
      navigate('/');
    }
  }, [user, loading]);

  return user && allowedRoles?.includes(user.roleId) ? <Outlet /> : '';
};

export default PrivateRoute;
