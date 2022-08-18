import { GET_USERS, USERS_ERROR, USERS_LOADING } from '../types/user.types';

const initialState = {
  users: [],
  loading: null,
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, ...payload };
    case USERS_LOADING:
      return { ...state, loading: payload };
    case USERS_ERROR:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};

export default userReducer;