import { createSelector } from 'reselect';

/**
 * Direct selector to the addStockPage state domain
 */
const selectAddStockPageDomain = () => state => state.get('addStockPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddStockPage
 */

const selectAddStockPage = () => createSelector(
  selectAddStockPageDomain(),
  (substate) => substate.toJS()
);

export default selectAddStockPage;
export {
  selectAddStockPageDomain,
};
