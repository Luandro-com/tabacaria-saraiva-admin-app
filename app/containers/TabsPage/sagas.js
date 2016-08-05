import { take, call, put, select } from 'redux-saga/effects';
import { getAll, push, deleteItem, transaction } from 'utils/firebase-saga';

import { selectUserName } from 'containers/LoginPage/selectors';
import { selectTab } from './selectors';
import { LOAD_TABS, CLOSE_TAB, CANCEL_TAB } from './constants';
import { loadSuccess, cancelSuccess, closeTabSuccess, toggleCloseModal } from './actions';

// Individual exports for testing
export function* loadTabs() {
  while (yield take(LOAD_TABS)) {
    const fetch = yield call(getAll, 'tabs');
    if (fetch.success) {
      yield put(loadSuccess(fetch.data));
    }
  }
}

export function* cancelTab() {
  while (true) { /* eslint no-constant-condition: ["error", { "checkLoops": false }] */
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
    const { id, parcels } = action.payload;
    const tab = yield select(selectTab(id));
    const user = yield select(selectUserName());
    // Criar uma transação para cada parcela
    const fetch = [];
    for (let i = parcels.length - 1; i >= 0; i--) {
      fetch[i] = yield call(push, 'transactions', {
        created: (new Date()).getTime(),
        total: parcels[i].value,
        method: parcels[i].method,
        user: user || 'admin',
      });
    }
    const fetchError = fetch.filter((item) => !item.success);
    const updateStock = [];
    if (fetchError.length === 0) {
      // Remover items do estoque
      for (let i = tab.items.length - 1; i >= 0; i--) {
        updateStock[i] = yield call(transaction, 'stock', `${tab.items[i].id}/stock`, tab.items[i].quantity, '-');
      }
      const updateStockError = fetch.filter((item) => !item.success);
      if (updateStockError.length === 0) {
        // Deletar comanda
        const deleteTab = yield call(deleteItem, 'tabs', id);
        if (deleteTab.success) {
          // Fechar modal
          yield put(toggleCloseModal());
          yield put(closeTabSuccess(id));
        }
      }
    }
  }
}

// All sagas to be loaded
export default [
  loadTabs,
  cancelTab,
  closeTab,
];
