import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import apidataReducer from './Apidata/Apidata.reducer'

const rootReducer = combineReducers({
    apidata: apidataReducer,
  })

const store = createStore(rootReducer)

export default store