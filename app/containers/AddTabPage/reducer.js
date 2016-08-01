/*
 *
 * AddTabPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD,
} from './constants';

const initialState = fromJS({});

function addTabPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return state;
    default:
      return state;
  }
}

export default addTabPageReducer;
