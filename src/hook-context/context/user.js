import React, { createContext, useReducer } from 'react';
import userReducer, { initialState } from '../reducers/user';
import { setName, getAsyncName } from '../actions/user';

const UserContext = createContext({});

const UserProvider = (props) => {
  const [userState, dispatch] = useReducer(userReducer, initialState);

  const userActions = {
    setName: (name) => dispatch(setName(name)),
    getAsyncName: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const user = await response.json();
      dispatch(getAsyncName(user.name));
    },
  };

  return (
    <UserContext.Provider
      value={{
        userState,
        userActions,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
