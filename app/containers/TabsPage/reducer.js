/*
 *
 * TabsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { parseImmutableObject } from 'utils/parsers';

import {
  LOAD_TABS,
  LOAD_SUCCESS,
  CANCEL_SUCCESS,
  CLOSE_TAB_SUCCESS,
  CLOSE_TAB_MODAL,
  SHOW_TAB_MODAL,
  NAME_TAB_MODAL,
} from './constants';

const initialState = fromJS({
  loading: false,
  items: [],
  modals: {
    selectedTabId: 'não encontrado',
    selectedTabTotal: 0,
    showTab: false,
    closeTab: false,
    nameTab: false,
  },
});

const isString = (payload) => typeof payload === 'string';

function tabsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TABS:
      return state
        .set('loading', true);
    case LOAD_SUCCESS:
      return state
        .set('loading', false)
        .set('items', parseImmutableObject(action.payload));
    case CANCEL_SUCCESS:
      return state
        .updateIn(['items'], list => {
          const index = list.findIndex(i => i.id === action.payload);
          return list.slice(0, index).concat(list.slice(index + 1));
        });
    case CLOSE_TAB_SUCCESS:
      return state
        .updateIn(['items'], list => {
          const index = list.findIndex(i => i.id === action.payload);
          return list.slice(0, index).concat(list.slice(index + 1));
        });
    case CLOSE_TAB_MODAL:
      return state
        .setIn(['modals', 'selectedTabId'], isString(action.payload.id) ? action.payload.id : 'não encontrado')
        .setIn(['modals', 'selectedTabTotal'], Number.isInteger(action.payload.total) ? action.payload.total : 0)
        .setIn(['modals', 'closeTab'], !state.getIn(['modals', 'closeTab']));
    case SHOW_TAB_MODAL:
      return state
        .setIn(['modals', 'selectedTabId'], action.payload ? action.payload : 'não encontrado')
        .setIn(['modals', 'showTab'], !state.getIn(['modals', 'showTab']));
    case NAME_TAB_MODAL:
      return state
        .setIn(['modals', 'selectedTabId'], action.payload ? action.payload : 'não encontrado')
        .setIn(['modals', 'nameTab'], !state.getIn(['modals', 'nameTab']));
    default:
      return state;
  }
}

export default tabsPageReducer;
