/*
 *
 * TransactionsPage actions
 *
 */

import {
  LOAD, LOAD_SUCCESS,
} from './constants';

export const load = () => ({
  type: LOAD,
});

export const loadSuccess = (data) => ({
  type: LOAD_SUCCESS,
  payload: data,
});
