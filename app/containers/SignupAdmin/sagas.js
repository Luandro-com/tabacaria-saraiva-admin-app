import { take, call, put, select } from 'redux-saga/effects';
import { SIGNUP } from './constants';
import { success } from './actions';
import { selectForm } from 'containers/App/selectors';
import Firebase from 'utils/firebase';
import { reset } from 'redux-form';
import { push as changeRoute } from 'react-router-redux';

// Individual exports for testing
export function* signupAdmin() {
  while (yield take(SIGNUP)) {
    const form = yield select(selectForm());
    const { email, password } = form.adminForm.values;
    const signup = yield call(Firebase.registerUser, { email, password });
    if (signup.email) {
      yield put(success());
      yield put(reset('adminForm'));
      yield put(changeRoute('/'));
    }
  }
}

// All sagas to be loaded
export default [
  signupAdmin,
];
