/*
 *
 * TabsPage actions
 *
 */

import {
  LOAD_TABS,
  LOAD_SUCCESS,
  CLOSE_TAB,
  CANCEL_TAB,
  CANCEL_SUCCESS,
  CLOSE_TAB_MODAL,
  SHOW_TAB_MODAL,
  NAME_TAB_MODAL,
} from './constants';

export const load = () => ({ type: LOAD_TABS });

export const loadSuccess = (data) => ({
  type: LOAD_SUCCESS,
  payload: data,
});

export const cancelTab = (id) => ({
  type: CANCEL_TAB,
  payload: id,
});

export const cancelSuccess = (id) => ({
  type: CANCEL_SUCCESS,
  payload: id,
});

export const closeTab = (id) => ({
  type: CLOSE_TAB,
  payload: id,
});

export const toggleCloseModal = (id) => ({
  type: CLOSE_TAB_MODAL,
  payload: id,
});

export const toggleShowTabModal = (id) => ({
  type: SHOW_TAB_MODAL,
  payload: id,
});

export const toggleNameTabModal = (id) => ({
  type: NAME_TAB_MODAL,
  payload: id,
});

