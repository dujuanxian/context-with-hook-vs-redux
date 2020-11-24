import { SET_NAME } from '../actions/user';

export const initialState = { name: 'default name' };

const userReducer = (state = initialState, action) => {
  if (action.type === SET_NAME) {
    return action.payload;
  }
  return state;
};

export default userReducer;
