import { createSelector } from 'reselect';

/**
 * Direct selector to the transactionsPage state domain
 */
const selectTransactionsPageDomain = () => state => state.get('transactionsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TransactionsPage
 */

const selectTransactionsPage = () => createSelector(
  selectTransactionsPageDomain(),
  (substate) => substate.toJS()
);

export default selectTransactionsPage;
export {
  selectTransactionsPageDomain,
};
