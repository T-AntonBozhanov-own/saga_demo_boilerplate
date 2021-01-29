import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_USERS_REQUEST } from './constants';
import { getUsers } from '../../Api';
import { setUsers, setFetchFailure } from './actions';

export default function* UsersSaga() {
  yield takeEvery(GET_USERS_REQUEST, onGetUsers);
}

function* onGetUsers() {
  try {
    const users = yield call(getUsers);
    yield put(setUsers(users));
  } catch (e) {
    yield put(setFetchFailure());
  }
}
