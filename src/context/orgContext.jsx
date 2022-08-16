import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/actions/auth.action';
import { loadOrganization } from '../redux/actions/organization.action';

const orgContext = createContext();

export const { Provider } = orgContext;

export const useOrgContext = () => {
  return useContext(orgContext);
};

const CustomProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser({ url: '/auth/me' }));
    dispatch(loadOrganization({ method: 'get', url: '/organization/public' }));
  }, [dispatch]);

  const contextValue = {};
  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
