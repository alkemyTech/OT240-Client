import {
  GET_CONTACTS,
  DELETE_CONTACT,
  CONTACTS_LOADING,
  CONTACTS_ERROR,
} from '../types/contacts.types';
import fetchApi from '../../axios/axios';

export const loadContacts = (options) => async (dispatch) => {
  dispatch(contactsLoading(true));
  try {
    const { data } = await fetchApi(options);
    dispatch(getContacts(data));
  } catch (error) {
    dispatch(contactsError(error.message));
  } finally {
    dispatch(contactsLoading(false));
  }
};

export const deleteContact = (options) => async (dispatch) => {
  dispatch(contactsLoading(true));
  try {
    const { data } = await fetchApi(options);
    dispatch(delContact(data.contact.id));
  } catch (error) {
    dispatch(contactsError(error.message));
  } finally {
    dispatch(contactsLoading(false));
  }
};

const getContacts = (payload) => ({ type: GET_CONTACTS, payload });
const delContact = (payload) => ({ type: DELETE_CONTACT, payload });
const contactsError = (payload) => ({ type: CONTACTS_ERROR, payload });
const contactsLoading = (payload) => ({ type: CONTACTS_LOADING, payload });
