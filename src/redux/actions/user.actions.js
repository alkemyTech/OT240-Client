import fetchApi from '../../axios/axios';
import { GET_USERS, USERS_ERROR, USERS_LOADING } from '../types/user.types';

export const loadUsers = (options) => async (dispatch) => {
  dispatch(usersLoading(true));
  try {
    const { data } = await fetchApi(options);
    const mapping = data.users.map(({ firstName, lastName, email, id, roleId }) => {
      return { firstName, lastName, email, id, roleId };
    });
    dispatch(getUsers({users:mapping}));
  } catch (error) {
    dispatch(usersError(error.msg));
  } finally {
    dispatch(usersLoading(false));
  };
};

const getUsers = (payload) => ({ type: GET_USERS, payload });
const usersError = (payload) => ({ type: USERS_ERROR, payload });
const usersLoading = (payload) => ({ type: USERS_LOADING, payload });
