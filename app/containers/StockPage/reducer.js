/*
 *
 * StockPage reducer
 *
 */

import { fromJS } from 'immutable';
import { parseImmutableObject } from 'utils/parsers';

import {
  LOAD,
  LOAD_SUCCESS,
  REMOVE_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  items: [],
});

function stockPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return state
        .set('loading', true);
    case LOAD_SUCCESS:
      return state
        .set('loading', false)
        .set('items', parseImmutableObject(action.payload));
    case REMOVE_SUCCESS:
      return state
        .updateIn(['items'], list => {
          const index = list.findIndex(i => i.id === action.payload);
          return list.slice(0, index).concat(list.slice(index + 1));
        });
    default:
      return state;
  }
}

export default stockPageReducer;
