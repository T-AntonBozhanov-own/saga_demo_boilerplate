import {
  GET_PHOTOS_FAILURE,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_REQUEST,
} from './constants';

const initialState = {
  photos: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, loading: true };

    case GET_PHOTOS_SUCCESS:
      return { ...state, loading: false, photos: [...action.payload] };

    case GET_PHOTOS_FAILURE: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};
