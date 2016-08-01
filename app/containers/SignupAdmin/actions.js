/*
 *
 * SignupAdmin actions
 *
 */

import {
  SIGNUP,
  SUCCESS,
  RESET,
} from './constants';

export function signup() {
  return {
    type: SIGNUP,
  };
}

export function success() {
  return {
    type: SUCCESS,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
