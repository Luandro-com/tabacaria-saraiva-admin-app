import { take, call, put, select } from 'redux-saga/effects';
import { LOAD_TABS } from './constants';
import { loadSuccess } from './actions';
import { getAll } from 'utils/firebase-saga';

// Individual exports for testing
export function* loadTabs() {
  while (yield take(LOAD_TABS)) {
    const fetch = yield call(getAll, 'tabs');
    console.log('fetch:', fetch);
    if (fetch.success) {
      yield put(loadSuccess(fetch.data))
    }
  }
}

// All sagas to be loaded
export default [
  loadTabs,
];
