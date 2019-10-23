import { combineReducers } from 'redux';
import authReducer, { AuthReducer } from './AuthReducer';
import alertReducer, { AlertReducer } from './Alert';
import caro from './caro';
import winner from './winner';
import winnerModal from './winnerModal';
import step from './step';

export interface State {
  auth: AuthReducer;
  alert: AlertReducer;
  caro: any;
  winner: any;
  winnerModal: any;
  step: any;
}

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  caro,
  winner,
  winnerModal,
  step
});
