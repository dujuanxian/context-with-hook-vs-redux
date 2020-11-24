import { SET_NAME } from '../actions/name';

const defaultState = {
  name: 'default name',
};

const userReducer = (state = defaultState, action) => {
  if (action.type === SET_NAME) {
    return action.payload;
  }
  return state;
};

export default userReducer;
