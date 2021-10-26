import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { appStore } from './store/app-store';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <User />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
