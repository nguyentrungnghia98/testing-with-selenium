import { OPEN_ALERT, CLOSE_ALERT } from '../actions/types';

export interface AlertReducer {
  isOpen?: boolean;
  type?: string;
  message?: string;
  handleClick?: any;
}

const INITAL_STATE: AlertReducer = {
  isOpen: false
};

export default (state = INITAL_STATE, action: any): AlertReducer => {
  switch (action.type) {
    case OPEN_ALERT:
      return {
        ...state,
        isOpen: true,
        type: action.typeAlert,
        message: action.message,
        handleClick: action.handleClick
      };
    case CLOSE_ALERT:
      return { ...state, isOpen: false };

    default:
      return { ...state };
  }
};
