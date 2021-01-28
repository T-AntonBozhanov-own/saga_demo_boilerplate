import { all } from 'redux-saga/effects';
import PhotosSaga from './Conteiners/Photos/saga';

export default function* rootSaga() {
  yield all([PhotosSaga()]);
}