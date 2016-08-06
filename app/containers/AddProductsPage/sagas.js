import { take, call, put } from 'redux-saga/effects';
import { push, update } from 'utils/firebase-saga';
import { push as changeRoute } from 'react-router-redux';

import { ADD, UPDATE } from './constants';

// Individual exports for testing
export function* add() {
  while (true) { /* eslint no-constant-condition: ["error", { "checkLoops": false }] */
    const action = yield take(ADD);
    console.log('action.payload:', action.payload);
    const fetch = yield call(push, 'tabs', {
      items: action.payload,
      created: (new Date()).getTime(),
    });
    console.log('fetch:', fetch);
    if (fetch.success) {
      yield put(changeRoute('/comandas'));
    }
    return;
  }
}

export function* updateTab() {
  while (true) {
    const action = yield take(UPDATE);
    console.log('action.payload:', action.payload);
    const { data, id } = action.payload;
    const fetch = yield call(update, 'tabs', id, {
      items: data,
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
  updateTab,
];
