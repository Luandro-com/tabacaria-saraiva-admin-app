/*
 *
 * TabsPage actions
 *
 */

import {
  LOAD_TABS,
  LOAD_SUCCESS,
  CLOSE_TABS,
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

export function closeTab(id) {
  console.log('closing tab with id:', id);
  return {
    type: CLOSE_TABS,
    payload: id,
  };
}
