import {
  GET_PHOTOS_FAILURE,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS
} from './constants';

export const getPhotos = () => ({
  type: GET_PHOTOS_REQUEST
});

export const setPhotos = data => ({
  type: GET_PHOTOS_SUCCESS,
  payload: data,
});

export const setFetchFailure = () => ({
  type: GET_PHOTOS_FAILURE
});