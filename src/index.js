import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './redux/App/App';
import HookContextApp from './hook-context/App/App';

ReactDOM.render(
  <div>
    <h1>Redux App</h1>
    <ReduxApp />
    <hr />
    <h1>Hook & Context App</h1>
    <HookContextApp />
  </div>,
  document.getElementById('root')
);
