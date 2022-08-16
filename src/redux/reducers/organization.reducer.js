import {
  GET_ORGANIZATION,
  PUT_ORGANIZATION,
  ORGANIZATION_LOADING,
  ORGANIZATION_SUCCESS,
  ORGANIZATION_ERROR,
} from '../types/organization.types';

const initialState = {
  organization: null,
  loading: null,
  error: null,
};

const organizationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORGANIZATION:
      return { ...state, organization: { ...payload } };
    case ORGANIZATION_LOADING:
      return { ...state, loading: payload };
    case ORGANIZATION_ERROR:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};

export default organizationReducer;
