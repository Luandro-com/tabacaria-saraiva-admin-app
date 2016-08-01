/*
 *
 * AddTabPage actions
 *
 */

import {
  ADD,
} from './constants';

export function update(data) {
  return {
    type: ADD,
    payload: data,
  };
}
