import { combineReducers } from 'redux';
import authReducer, { AuthReducer } from './AuthReducer';
import alertReducer, { AlertReducer } from './Alert';
export interface State {
  auth: AuthReducer;
  alert: AlertReducer;
}

export default combineReducers({
  auth: authReducer,
  alert: alertReducer
});
