import { createSelector } from 'reselect';

/**
 * Direct selector to the addTabProducts state domain
 */
const selectAddTabProductsDomain = () => state => state.get('addTabProducts');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddTabProducts
 */

const selectAddTabProducts = () => createSelector(
  selectAddTabProductsDomain(),
  (substate) => substate.toJS()
);

export default selectAddTabProducts;
export {
  selectAddTabProductsDomain,
};
