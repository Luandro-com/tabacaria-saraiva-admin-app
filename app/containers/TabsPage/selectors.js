import { createSelector } from 'reselect';

/**
 * Direct selector to the tabsPage state domain
 */
const selectTabsPageDomain = () => state => state.get('tabsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TabsPage
 */

const selectTabsPage = () => createSelector(
  selectTabsPageDomain(),
  (substate) => substate.toJS()
);

export default selectTabsPage;
export {
  selectTabsPageDomain,
};
