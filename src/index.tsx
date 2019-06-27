import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { initializeState } from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import App from './router';

import './sass/main.scss';
import 'antd/dist/antd.css';

const authenticationData = sessionStorage.getItem('authentication');

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  authenticationData
    ? {
        ...initializeState,
        authentication: { ...JSON.parse(authenticationData) }
      }
    : initializeState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
const rootElement: any = document.getElementById('root');

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
