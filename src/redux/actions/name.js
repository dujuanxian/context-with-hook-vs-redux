export const SET_NAME = 'SET_NAME';
export const GET_ASYNC_NAME = 'GET_ASYNC_NAME';

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: {
      name,
    },
  };
};

export const getAsyncName = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    dispatch({
      type: GET_ASYNC_NAME,
      payload: {
        asyncName: user.name,
      },
    });
  };
};
