import {
  FORM_LOADING,
  FORM_SUCCESS,
  FORM_ERROR,
  FORM_FIELDS,
  FORM_FIELD,
} from '../types/form.types';
import fetchApi from '../../axios/axios';
import successAlert from '../../services/alert';

export const submitForm = (options) => async (dispatch, state) => {
  dispatch(formLoading(true));
  dispatch(formError(null));
  dispatch(formSuccess(null));
  try {
    await fetchApi(options);
    dispatch(formSuccess('Formulario enviado exitosamente!'));
    successAlert({
      title: 'Formulario enviado exitosamente!',
      icon: 'success',
    })
  } catch (err) {
    dispatch(formError(err.message));
    successAlert({
      title: `Error al enviar el formulario\n ${err.message}`,
      icon: 'error',
    })
  } finally {
    dispatch(formLoading(false));
  }
};

const formLoading = (payload) => ({ type: FORM_LOADING, payload });
export const formError = (payload) => ({ type: FORM_ERROR, payload });
export const formSuccess = (payload) => ({ type: FORM_SUCCESS, payload });
export const formFields = (payload) => ({ type: FORM_FIELDS, payload });
export const formField = (payload) => ({ type: FORM_FIELD, payload });
