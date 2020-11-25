import React, { useContext } from 'react';
import { UserContext } from '../context/user';

const Hello = () => {
  const { userState, userActions } = useContext(UserContext);

  return (
    <div data-testid="app" className="Hello">
      <button type="button" onClick={() => userActions.setName('new name')}>
        set name
      </button>
      <button type="button" onClick={userActions.getAsyncName}>
        async set name
      </button>
      <p>Hello World {userState.asyncName}</p>
      <p>Hello World {userState.name}</p>
    </div>
  );
};

export default Hello;
