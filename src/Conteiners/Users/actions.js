import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
} from './constants';

export const getUsers = () => ({
  type: GET_USERS_REQUEST,
});

export const setUsers = data => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

export const setFetchFailure = () => ({
  type: GET_USERS_FAILURE,
});
