import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { appStore } from './store/app-store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
