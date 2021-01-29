import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from '../../injectSaga';
import { getUsers } from './actions';

import usersSaga from './saga';
import { selectUsers } from './selectors';

const TestRootSaga = () => {
  useInjectSaga('usersSaga', usersSaga);

  const dispatch = useDispatch();
  const users = useSelector(state => selectUsers(state));

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (users) return <h1>You&apos;ve got {users.length} users!</h1>;
  return <div>Just a sec..</div>;
};

export default TestRootSaga;
