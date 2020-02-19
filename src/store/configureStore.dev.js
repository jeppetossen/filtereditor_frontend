import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
//import api from '../middleware/api'
import rootReducer from '../reducers'
//import devToolsEnhancer from 'remote-redux-devtools'

const middleware = [
  //api,
  createLogger(),
  thunk
]


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)


const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    //applyMiddleware(...middleware)
    enhancer
    //compose(applyMiddleware(api, createLogger(), thunkMiddleware()))
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
