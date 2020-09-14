import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import assistanceReducer from '../reducer/assistanceReducer'
import authReducer from '../reducer/authReducer'
import guidanceReducer from '../reducer/guidanceReducer'
import settingReducer from '../reducer/settingReducer'

import { composeWithDevTools } from 'remote-redux-devtools';

const rootReducer = combineReducers({
  assistanceReducer,
  lauthReducer,
  guidanceReducer,
  settingReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, socketIoMiddleware)))

export default store;
