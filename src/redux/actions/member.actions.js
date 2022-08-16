import {
  GET_MEMBERS,
  MEMBERS_LOADING,
  MEMBERS_SUCCESS,
  MEMBERS_ERROR,
} from '../types/members.types';
import fetchApi from '../../axios/axios';

export const loadMembers = (options) => async (dispatch) => {
  dispatch(membersLoading(true));
  try {
    const { data } = await fetchApi(options);
    dispatch(getMembers(data));
  } catch (error) {
    dispatch(membersError(error.message));
  } finally {
    dispatch(membersLoading(false));
  }
};

const getMembers = (payload) => ({ type: GET_MEMBERS, payload });
const membersError = (payload) => ({ type: MEMBERS_LOADING, payload });
const membersLoading = (payload) => ({ type: MEMBERS_ERROR, payload });
