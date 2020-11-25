import { SET_NAME } from '../actions/user';
import { GET_ASYNC_NAME } from '../../redux/actions/name';

export const initialState = { name: 'default name', asyncName: 'default async name' };

const userReducer = (state = initialState, action) => {
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
