import { all } from 'redux-saga/effects';
import PicsSaga from './Containers/Pics/saga';

export default function* rootSaga() {
  yield all([PicsSaga()]);
}
