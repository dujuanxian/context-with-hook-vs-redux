import React, { Component } from 'react';
import Hello from '../Hello/Hello';
import { UserProvider } from '../context/user';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <Hello />
      </UserProvider>
    );
  }
}

export default App;
