import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './redux/App/App';
import HookContextApp from './hook-context/App/App';

ReactDOM.render(
  <div>
    <ReduxApp />
    <HookContextApp />
  </div>,
  document.getElementById('root')
);
