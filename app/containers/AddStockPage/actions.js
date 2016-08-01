/*
 *
 * AddStockPage actions
 *
 */

import {
  ADD,
  ADD_SUCCESS,
} from './constants';

export function add() {
  return {
    type: ADD,
  };
}

export function addSuccess() {
  return {
    type: ADD_SUCCESS,
  };
}

