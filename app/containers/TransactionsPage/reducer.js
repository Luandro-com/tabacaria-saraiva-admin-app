/*
 *
 * TransactionsPage reducer
 *
 */

import { fromJS } from 'immutable';
import { parseImmutableObject } from 'utils/parsers';

import {
  LOAD, LOAD_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  items: [],
});

function transactionsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
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

export default transactionsPageReducer;
