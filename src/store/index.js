import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers/loginReducer'

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware())
)
