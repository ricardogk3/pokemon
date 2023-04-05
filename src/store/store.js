// import { createStore, combineReducers } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// import apidataReducer from './Apidata/Apidata.reducer'

// const rootReducer = combineReducers({
//     apidata: apidataReducer,
//   })

// const store = createStore(rootReducer)

// export default store



import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './Apidata'

const initalState = {

}

const middleware = [thunk]

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;