import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  data: dataReducer,
  loading: loadingReducer,
});
