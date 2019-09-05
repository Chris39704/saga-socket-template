import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css'
import App from './App'
import reducers from './redux/reducers'
import handleGroceries from './redux/sagas'
import setupSocket from './redux/socket'
import { SOCKET_CHANNEL } from './utils/constants'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

const socket = setupSocket(store.dispatch, SOCKET_CHANNEL)

sagaMiddleware.run(handleGroceries, socket)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)