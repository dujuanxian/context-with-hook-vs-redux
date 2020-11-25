export const SET_NAME = 'SET_NAME';
export const GET_ASYNC_NAME = 'GET_ASYNC_NAME';

export const setName = (name) => ({
  type: SET_NAME,
  payload: {
    name,
  },
});

export const getAsyncName = (asyncName) => ({
  type: GET_ASYNC_NAME,
  payload: {
    asyncName,
  },
});
