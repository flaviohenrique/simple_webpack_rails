import { combineReducers } from 'redux'
import { userReducer } from './user_reducer.jsx'

const appStore = combineReducers({
  userReducer
})

export default appStore
