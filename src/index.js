import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'
import './swDetails'
import App from './components/app'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(sagas)

const Root = () => (
  <Provider store={store}>
    <>
      <div>Hello world</div>
      <App />
    </>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
