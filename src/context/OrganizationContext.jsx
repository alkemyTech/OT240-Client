import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchUser } from '../redux/actions/auth.action';

const OrganizationContext = createContext();

export const { Provider } = OrganizationContext;

export const useOrgContext = () => {
  return useContext(OrganizationContext);
};

const CustomProvider = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      dispatch(fetchUser({ url: '/auth/me' }));
    }
  }, [dispatch]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const contextValue = {};
  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
