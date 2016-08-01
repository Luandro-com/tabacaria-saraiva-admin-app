import { createSelector } from 'reselect';

/**
 * Direct selector to the addTabPage state domain
 */
const selectAddTabPageDomain = () => state => state.get('addTabPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddTabPage
 */

const selectAddTabPage = () => createSelector(
  selectAddTabPageDomain(),
  (substate) => substate.toJS()
);

export default selectAddTabPage;
export {
  selectAddTabPageDomain,
};
