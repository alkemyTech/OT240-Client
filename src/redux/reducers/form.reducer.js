import {
  FORM_LOADING,
  FORM_SUCCESS,
  FORM_ERROR,
  FORM_FIELDS,
  FORM_FIELD,
} from '../types/form.types';

const initialState = {
  loading: false,
  success: null,
  error: null,
  fields: {},
};

export default function formReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FORM_LOADING:
      return { ...state, loading: payload };
    case FORM_SUCCESS:
      return { ...state, success: payload };
    case FORM_ERROR:
      return { ...state, error: payload };
    case FORM_FIELDS:
      return { ...state, fields: { ...payload } };
    case FORM_FIELD:
      return { ...state, fields: { ...state.fields, ...payload } };
    default:
      return { ...state };
  }
}
