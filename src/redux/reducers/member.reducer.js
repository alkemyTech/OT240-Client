import {
  GET_MEMBERS,
  DELETE_MEMBER,
  MEMBERS_LOADING,
  MEMBERS_SUCCESS,
  MEMBERS_ERROR,
} from '../types/members.types';

const initialState = {
  members: [],
  loading: null,
  error: null,
};

const membersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MEMBERS:
      return { ...state, ...payload };
    case DELETE_MEMBER:
      return { ...state, members: state.members.filter((member) => member.id !== payload) };
    case MEMBERS_LOADING:
      return { ...state, loading: payload };
    case MEMBERS_ERROR:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};

export default membersReducer;
