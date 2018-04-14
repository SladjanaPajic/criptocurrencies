import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import list from './list/reducer'
import settings from './settings/reducer'
import currency from './currency/reducer'

const reducers = combineReducers({
  list,
  settings,
  currency
})

export default createStore(
  reducers,
  applyMiddleware(thunk)
)
