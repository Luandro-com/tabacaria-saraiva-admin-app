/*
 *
 * SignupAdmin reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGNUP,
  SUCCESS,
  RESET,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  success: false,
});

function signupAdminReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return state
        .set('loading', true);
    case SUCCESS:
      return state
        .set('success', true)
        .set('loading', false);
    case RESET:
      return state
        .set('loading', false)
        .set('error', false)
        .set('success', false);
    default:
      return state;
  }
}

export default signupAdminReducer;
