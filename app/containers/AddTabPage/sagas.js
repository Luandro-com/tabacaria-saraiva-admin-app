import { take, call, put, select } from 'redux-saga/effects';
import { ADD } from './constants';
import { push } from 'utils/firebase-saga';
import { push as changeRoute } from 'react-router-redux';

// Individual exports for testing
export function* add() {
  while (true) {
    const action = yield take(ADD);
    console.log('action.payload:', action.payload);
    const fetch = yield call(push, 'tabs', {
      name: null,
      items: action.payload,
      created: (new Date).getTime(),
    });
    console.log('fetch:', fetch);
    if (fetch.success) {
      yield put(changeRoute('/comandas'));
    }
  }
}

// All sagas to be loaded
export default [
  add,
];
