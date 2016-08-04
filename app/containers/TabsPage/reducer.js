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
  CLOSE_TAB_MODAL,
  SHOW_TAB_MODAL,
  NAME_TAB_MODAL,
} from './constants';

const initialState = fromJS({
  loading: false,
  items: [],
  modals: {
    selectedTabId: 'não encontrado',
    showTab: false,
    closeTab: false,
    nameTab: false,
  },
});

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
    case CLOSE_TAB_MODAL:
    	console.log('action.payload:', action.payload);
      return state
        .setIn(['modals', 'selectedTabId'], action.payload ? action.payload : 'não encontrado')
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
