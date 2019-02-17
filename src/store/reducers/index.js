import { combineReducers } from 'redux'
import user from './modules/user'
import dashboard from './modules/dashboard'

export default combineReducers({
  user, dashboard
})
