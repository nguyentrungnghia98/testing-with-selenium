import { Action } from '.';
import { OPEN_ALERT, CLOSE_ALERT } from './types';

export const openAlert = (
  typeAlert = 'success',
  message = '',
  handleClick = null
): Action => {
  return {
    type: OPEN_ALERT,
    typeAlert,
    message,
    handleClick
  };
};

export const closeAlert = (): Action => {
  return {
    type: CLOSE_ALERT
  };
};
