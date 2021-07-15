import { GET_PICTURES_SUCCESS } from './constants';

const initialState = {
  pictures: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PICTURES_SUCCESS:
      return { ...state, pictures: action.payload };

    default:
      return state;
  }
};
