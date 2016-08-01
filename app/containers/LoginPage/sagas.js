import { take, call, put, select } from 'redux-saga/effects';

import Firebase from 'utils/firebase';
import { push } from 'react-router-redux';

import { loginSuccess, logoutSuccess } from './actions';
import { USER_LOGIN, USER_LOGOUT } from './constants';
import { selectForm } from 'containers/App/selectors';

// Individual exports for testing
export function* userLogin() {
  while (yield take(USER_LOGIN)) {
    const form = yield select(selectForm());
    const { email, password } = form.loginForm.values;
    const login = yield call(Firebase.loginUser, { email, password });
    if (login.email) {
      yield put(push('/comandas'));
      yield put(loginSuccess({ currentUser: login.displayName, email: login.email }));
    }
  }
}

export function* userLogout() {
  while (yield take(USER_LOGOUT)) {
    const logout = yield call(Firebase.logoutUser);
    if (logout.success) {
      yield put(logoutSuccess());
      yield put(push('/'));
    }
  }
}

// All sagas to be loaded
export default [
  userLogin,
  userLogout,
];
