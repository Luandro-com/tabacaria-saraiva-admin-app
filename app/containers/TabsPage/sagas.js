import { take, call, put, select } from 'redux-saga/effects';
import { LOAD_TABS, CLOSE_TAB, CANCEL_TAB } from './constants';
import { loadSuccess, cancelSuccess } from './actions';
import { getAll, push, deleteItem } from 'utils/firebase-saga';

// Individual exports for testing
export function* loadTabs() {
  while (yield take(LOAD_TABS)) {
    const fetch = yield call(getAll, 'tabs');
    console.log('fetch:', fetch);
    if (fetch.success) {
      yield put(loadSuccess(fetch.data));
    }
  }
}

export function* cancelTab() {
  while (true) {
    const action = yield take(CANCEL_TAB);
    const fetch = yield call(deleteItem, 'tabs', action.payload);
    if (fetch.success) {
      yield put(cancelSuccess(action.payload));
    }
  }
}

export function* closeTab() {
  while (true) {
    const action = yield take(CLOSE_TAB);
    console.log('action:', action);
    // const fetch = yield call(push, 'transactions', {
    //   created: (new Date).getTime(),
    //   total: 
    // });
    console.log('fetch:', fetch);
    if (fetch.success) {
      yield put(loadSuccess(fetch.data));
    }
  }
}

// All sagas to be loaded
export default [
  loadTabs,
  cancelTab,
  closeTab,
];
