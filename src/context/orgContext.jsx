import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/actions/auth.action';
import { loadOrganization } from '../redux/actions/organization.action';
import { loadMembers } from '../redux/actions/member.actions';

const OrgContext = createContext();

export const { Provider } = OrgContext;

export const useOrgContext = () => {
  return useContext(OrgContext);
};

const CustomProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser({ url: '/auth/me' }));
    dispatch(loadOrganization({ method: 'get', url: '/organization/public' }));
    dispatch(loadMembers({ method: 'get', url: '/members' }));
  }, [dispatch]);

  const contextValue = {};
  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
