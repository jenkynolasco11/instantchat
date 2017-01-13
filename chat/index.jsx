import React from 'react'
import { createStore /*, applyMiddleware*/ } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'

import Chat from './components/Chat.jsx'

import reducers from './reducers'

// const middlewares = applyMiddleware( thunk )

const store = createStore(reducers/*, {} , middlewares*/)

render(
  <Provider store={store}>
    <Chat />
  </Provider>,
  document.getElementsByTagName('body')[0]
)
