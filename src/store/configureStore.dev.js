import { createStore, applyMiddleware, compose } from 'redux'
//import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import api from '../middleware/api'
import reducer from '../reducers'

const configureStore = preloadedState => {
  const store = createStore(
    reducer,
    preloadedState,
    compose(applyMiddleware(api, createLogger()))
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducer)
    })
  }

  return store
}

export default configureStore
