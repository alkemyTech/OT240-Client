import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.auth.isAuth);
  const isAdmin = useSelector((store) => store.auth.isAdmin);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/');
    }
  }, [isAdmin, navigate]);

  return <Outlet />;
};

export default PrivateRoute;
