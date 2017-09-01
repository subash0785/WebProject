import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import jobReducer from './jobReducer';

const counterApp = combineReducers({
  counterReducer,
  jobReducer
})

export default counterApp