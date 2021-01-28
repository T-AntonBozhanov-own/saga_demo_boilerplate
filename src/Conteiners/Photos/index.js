import React, { useEffect } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './actions';
import { selectLoading, selectPhotos } from './selectors';
import Preloader from '../../Components/Preloader';
import Card from '../../Components/Card';
import { useInjectSaga } from '../../injectSaga';
import photosSaga from './saga';

const Photos = () => {
  useInjectSaga('photosSaga', photosSaga)
  const dispatch = useDispatch();
  const photos = useSelector(state => selectPhotos(state));
  const loading = useSelector(state => selectLoading(state));

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  return (
    <div className="ListContainer">
      {loading ? (
        <Preloader />
      ) : (
        photos.map(item => <Card key={item.id} {...item} />)
      )}
    </div>
  );
};

export default Photos;
