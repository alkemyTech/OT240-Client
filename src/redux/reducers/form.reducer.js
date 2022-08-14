import { SET_LOADING, SET_ERROR, SET_SUCCESS } from '../types/common.types';
import { SET_FIELDS, SET_FIELD } from '../types/form.types';

const initialState = {
  error: null,
  success: null,
  fields: {},
};

export default function formReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_FIELD:
      return {
        ...state,
        fields: {
          ...state.fields,
          ...payload,
        },
      };
    case SET_FIELDS:
      return { ...state, fields: { ...payload } };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SET_SUCCESS:
      return {
        ...state,
        success: payload,
      };
    default:
      return { ...state };
  }
}
