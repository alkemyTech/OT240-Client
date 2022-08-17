import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/actions/auth.action';

const OrganizationContext = createContext();

export const { Provider } = OrganizationContext;

export const useOrgContext = () => {
  return useContext(OrganizationContext);
};

const CustomProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser({ url: '/auth/me' }));
  }, [dispatch]);

  const contextValue = {};
  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
