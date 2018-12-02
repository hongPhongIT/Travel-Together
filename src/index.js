import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./sagas"

import rootReducer from "./reducers"

import './index.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
