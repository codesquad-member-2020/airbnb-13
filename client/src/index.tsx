import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');

import(/*webpackChunkName: 'app' */ '@/App').then(({ default: App }) =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
);
