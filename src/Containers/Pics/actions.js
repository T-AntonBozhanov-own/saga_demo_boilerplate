import { GET_PICTURES_REQUEST, GET_PICTURES_SUCCESS } from './constants';

export const getPictures = () => ({
  type: GET_PICTURES_REQUEST,
});

export const setPictures = data => ({
  type: GET_PICTURES_SUCCESS,
  payload: data,
});
