import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPictures } from './actions';
import { selectPics } from './selectors';
import { useInjectSaga } from '../../injectSaga';
import picturesSaga from './saga';

export default () => {
  useInjectSaga('picsSaga', picturesSaga);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPictures());
  }, [dispatch]);

  const pics = useSelector(state => selectPics(state));
  return (
    <div>
      {pics.map(item => (
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  );
};
