import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {compose, createStore, applyMiddleware} from 'redux'
import { spamWordsMiddleWare } from './redux/middleWare';
//import createSagaMiddleWare from 'redux-saga'
//import { sagaWatcher } from './redux/sagas';



//const saga = createSagaMiddleWare()

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, spamWordsMiddleWare),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

//saga.run(sagaWatcher)


const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(
  app, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

