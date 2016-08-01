/*
 *
 * StockPage actions
 *
 */

import {
  LOAD,
  LOAD_SUCCESS,
  REMOVE,
  REMOVE_SUCCESS,
} from './constants';

export function load() {
  return {
    type: LOAD,
  };
}

export function loadSuccess(data) {
  return {
    type: LOAD_SUCCESS,
    payload: data,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}

export function removeSuccess(id) {
  return {
    type: REMOVE_SUCCESS,
    payload: id,
  };
}
