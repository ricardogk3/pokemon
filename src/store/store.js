import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Apidata/Apidata.reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
