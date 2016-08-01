/*
 *
 * TabsPage actions
 *
 */

import {
  LOAD_TABS,
  LOAD_SUCCESS,
} from './constants';

export function load() {
  return {
    type: LOAD_TABS,
  };
}

export function loadSuccess(data) {
  return {
    type: LOAD_SUCCESS,
    payload: data,
  };
}
