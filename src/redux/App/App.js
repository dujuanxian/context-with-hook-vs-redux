import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Hello from '../Hello/Hello';
import store from '../store';

class ReduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Hello />
      </Provider>
    );
  }
}

export default ReduxApp;
