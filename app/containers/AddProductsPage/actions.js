/*
 *
 * AddProductsPage actions
 *
 */

import {
  ADD,
  UPDATE,
} from './constants';

export const create = (data) => ({
  type: ADD,
  payload: data,
});

export const update = (data, id) => ({
  type: UPDATE,
  payload: { data, id },
});
