import React from 'react';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state.auth.user);
  return user && !allowedRoles
    ? children
    : user && allowedRoles && allowedRoles.includes(user.roleId)
    ? children
    : '';
};

export default RequireAuth;
