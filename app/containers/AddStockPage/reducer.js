/*
 *
 * AddStockPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD,
  ADD_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  success: false,
});

function addStockPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return state
        .set('loading', true);
    case ADD_SUCCESS:
      return state
        .set('loading', false)
        .set('success', true);
    default:
      return state;
  }
}

export default addStockPageReducer;
