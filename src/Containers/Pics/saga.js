import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_PICTURES_REQUEST } from './constants';
import { setPictures } from './actions';
import { getPhotos } from '../../Api';

export default function* picturesSaga() {
  yield takeEvery(GET_PICTURES_REQUEST, onGetPictures);
}

function* onGetPictures() {
  try {
    const pics = yield call(getPhotos);

    yield put(setPictures(pics));
  } catch (e) {}
}
