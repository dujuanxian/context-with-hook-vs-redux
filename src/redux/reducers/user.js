import { GET_ASYNC_NAME, SET_NAME } from '../actions/name';

const defaultState = {
  name: 'default name',
  asyncName: 'default async name',
};

const userReducer = (state = defaultState, action) => {
  if (action.type === SET_NAME) {
    return {
      ...state,
      name: action.payload.name,
    };
  }
  if (action.type === GET_ASYNC_NAME) {
    return {
      ...state,
      asyncName: action.payload.asyncName,
    };
  }
  return state;
};

export default userReducer;
