import { createStore, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'
import api from '../middleware/api'
import reducer from '../reducer'

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  applyMiddleware(api)
)

export default configureStore
