import PhotosSaga from './Conteiners/Photos/saga';
import UsersSaga from './Conteiners/Users/saga';

export default function* rootSaga() {
  yield [PhotosSaga(), UsersSaga()];
}
