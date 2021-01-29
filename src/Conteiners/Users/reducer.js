import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from './constants';

const initialState = {
  users: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, loading: true };

    case GET_USERS_SUCCESS:
      return { ...state, loading: false, users: [...action.payload] };

    case GET_USERS_FAILURE: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};
