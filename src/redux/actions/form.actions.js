import { SET_FIELDS, SET_FIELD } from '../types/form.types';
import { loading, setError, setSuccess } from './common.action';
import fetchApi from '../../axios/axios';

export const submitForm = (options) => async (dispatch, state) => {
  dispatch(loading(true));
  dispatch(setError(null));
  try {
    const { data } = await fetchApi(options);
    // dispatch(updateState(data));
    dispatch(setSuccess('Formulario enviado exitosamente!'));
  } catch (err) {
    console.log(err);
    dispatch(setError(err.message));
  } finally {
    dispatch(loading(false));
  }
};

export const setFields = (payload) => {
  return {
    type: SET_FIELDS,
    payload,
  };
};

export const setField = (payload) => {
  return {
    type: SET_FIELD,
    payload,
  };
};
