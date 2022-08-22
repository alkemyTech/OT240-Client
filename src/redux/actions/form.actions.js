import {
  FORM_LOADING,
  FORM_SUCCESS,
  FORM_ERROR,
  FORM_FIELDS,
  FORM_FIELD,
} from '../types/form.types';
import fetchApi from '../../axios/axios';
import alert from '../../services/alert';

export const submitForm = (options, successCallback, errorCallback) => async (dispatch, state) => {
  dispatch(formError(null));
  dispatch(formSuccess(null));
  try {
    dispatch(formLoading(true));
    await fetchApi(options);
    dispatch(formLoading(false));
    dispatch(formSuccess('Formulario enviado exitosamente!'));
    const result = await alert({
      title: 'Formulario enviado exitosamente!',
      icon: 'success',
    });
    result.isConfirmed && successCallback();
  } catch (err) {
    dispatch(formLoading(false));
    dispatch(formError(err.message));
    alert({
      title: `Error al enviar el formulario\n ${err.message}`,
      icon: 'error',
    });
  } finally {
    dispatch(formLoading(false));
  }
};

const formLoading = (payload) => ({ type: FORM_LOADING, payload });
export const formError = (payload) => ({ type: FORM_ERROR, payload });
export const formSuccess = (payload) => ({ type: FORM_SUCCESS, payload });
export const formFields = (payload) => ({ type: FORM_FIELDS, payload });
export const formField = (payload) => ({ type: FORM_FIELD, payload });
