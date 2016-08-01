/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
} from './constants';

const initialState = fromJS({
  currentUser: null,
  email: null,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state
        .set('currentUser', action.payload.currentUser)
        .set('email', action.payload.email);
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default loginPageReducer;
