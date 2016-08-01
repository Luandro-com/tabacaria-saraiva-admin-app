import { take, call, put, select } from 'redux-saga/effects';
import { ADD } from './constants';
import { addSuccess } from './actions';
import { selectForm } from 'containers/App/selectors';
import { push } from 'utils/firebase-saga';
import { reset } from 'redux-form';
import { push as changeRoute } from 'react-router-redux';

// Individual exports for testing
export function* addNew() {
  while (yield take(ADD)) {
    const form = yield select(selectForm());
    const { name, price, stock, notification } = form.stockForm.values;
    console.log('name:', name);
    const data = yield call(push, 'stock', {
      name,
      price: parseInt(price, 10),
      stock: parseInt(stock, 10),
      notification: parseInt(notification, 10),
      promo: null,
      created: (new Date).getTime(),
    });
    if (data) {
      yield put(addSuccess());
      yield put(reset('stockForm'));
      yield put(changeRoute('/estoque'));
    }
  }
}

// All sagas to be loaded
export default [
  addNew,
];
