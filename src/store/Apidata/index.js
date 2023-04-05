
import { combineReducers } from 'redux'
import apidataReducer from './Apidata.reducer'

export default combineReducers({
  data: apidataReducer
})