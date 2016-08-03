/*
 *
 * AddTabPage actions
 *
 */

import {
  ADD,
  UPDATE,
} from './constants';

export function create(data) {
  return {
    type: ADD,
    payload: data,
  };
}

export function update(data, id) {
  return {
    type: UPDATE,
    payload: { data, id },
  };
}
