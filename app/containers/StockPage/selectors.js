import { createSelector } from 'reselect';

/**
 * Direct selector to the stockPage state domain
 */
const selectStockPageDomain = () => state => state.get('stock');

/**
 * Other specific selectors
 */
const selectStockItems = () => createSelector(
  selectStockPageDomain(),
  (stockState) => stockState.get('items')
);

/**
 * Default selector used by StockPage
 */

const selectStockPage = () => createSelector(
  selectStockPageDomain(),
  (substate) => substate.toJS()
);

export default selectStockPage;
export {
  selectStockPageDomain,
  selectStockItems,
};
