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
} from './constants';

const initialState = fromJS({
  loading: false,
  items: [],
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
    default:
      return state;
  }
}

export default tabsPageReducer;
