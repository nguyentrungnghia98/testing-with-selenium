import * as TYPES from './types';
import user from '../apis/user';

export interface User {
  name: string;
  email: string;
  token?: string;
}

export interface FormValueLogin {
  name?: string;
  email: string;
  password: string;
}

export interface ActionLogin {
  type: string;
  user: User;
  error?: any;
}

export interface ResponseLogin {
  name: string;
  email: string;
  token: string;
}

export interface Action {
  type: string;
  payload?: any;
  typeAlert?: string;
  message?: string;
  handleClick?: any;
}
