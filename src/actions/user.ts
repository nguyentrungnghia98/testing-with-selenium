import { FETCH_USER, SIGN_IN, SIGN_OUT } from './types';
import { ResponseLogin, User, ActionLogin } from './index';

import history from '../history';

export const fetchUser = (user: User): ActionLogin => {
  return {
    type: FETCH_USER,
    user
  };
};

export const signIn = (response: ResponseLogin) => async (dispatch: any) => {
  console.log('action signIn');
  dispatch({
    type: SIGN_IN,
    user: response
  });
  localStorage.setItem('userToken', `JWT ${response.token}`);
  history.push('/profile');
};

export const logOut = () => async (dispatch: any) => {
  localStorage.setItem('userToken', '');
  dispatch({
    type: SIGN_OUT
  });
  history.push('/login');
};
