import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ allowedRoles }) => {
  const user = useSelector((store) => store.auth.user);
  return user && !allowedRoles ? (
    <Outlet />
  ) : user && allowedRoles && allowedRoles.includes(user.roleId) ? (
    <Outlet />
  ) : (
    <Navigate to={-1} />
  );
};

export default PrivateRoute;
