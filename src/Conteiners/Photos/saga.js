import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_PHOTOS_REQUEST } from './constants';
import { getPhotos } from '../../Api';
import { setPhotos, setFetchFailure } from './actions';

export default function* photosSaga() {
  yield takeEvery(GET_PHOTOS_REQUEST, onGetPhotos);
}

function* onGetPhotos() {
  try {
    const photos = yield call(getPhotos);
    yield put(setPhotos(photos));
  } catch (e) {
    yield put(setFetchFailure());
  }
}
