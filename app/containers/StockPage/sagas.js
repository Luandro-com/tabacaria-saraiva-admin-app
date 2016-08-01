import { take, call, put, select } from 'redux-saga/effects';
import { LOAD, REMOVE } from './constants';
import { loadSuccess, removeSuccess } from './actions';
import { getAll, deleteItem } from 'utils/firebase-saga';

// Individual exports for testing
export function* loadProducts() {
  while (yield take(LOAD)) {
    const fetch = yield call(getAll, 'stock');
    if (fetch.success) {
      yield put(loadSuccess(fetch.data));
    }
  }
}

export function* remove() {
  while (true) {
    const action = yield take(REMOVE);
    const fetch = yield call(deleteItem, 'stock', action.payload);
    if (fetch.success) {
      yield put(removeSuccess(action.payload));
    }
  }
}

// All sagas to be loaded
export default [
  loadProducts,
  remove,
];
