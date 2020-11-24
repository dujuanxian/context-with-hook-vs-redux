import React, { createContext, useReducer } from 'react';
import userReducer, { initialState } from '../reducers/user';
import { setName } from '../actions/user';

const UserContext = createContext({});

const UserProvider = (props) => {
  const [userState, dispatch] = useReducer(userReducer, initialState);

  const userActions = {
    setName: (name) => dispatch(setName(name)),
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
