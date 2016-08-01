/*
 *
 * LoginPage actions
 *
 */

import {
  USER_LOGIN,
  USER_LOGOUT,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from './constants';

export function login() {
  return {
    type: USER_LOGIN,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}

export function logout() {
  return {
    type: USER_LOGOUT,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
