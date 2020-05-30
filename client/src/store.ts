import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';

// const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

export const store = createStore(rootReducer, composeEnhancer());

// {}, composeEnhancer(applyMiddleware(sagaMiddleware))
// sagaMiddleware.run(rootSaga);

export default store;
