import { take, call, put } from 'redux-saga/effects';
import { getAll } from 'utils/firebase-saga';
import { LOAD } from './constants';
import { loadSuccess } from './actions';

// Individual exports for testing
export function* loadTransactions() {
  while (yield take(LOAD)) {
    const fetch = yield call(getAll, 'transactions');
    console.log('fetch:', fetch);
    if (fetch.success) {
      yield put(loadSuccess(fetch.data));
    }
  }
}

// All sagas to be loaded
export default [
  loadTransactions,
];
