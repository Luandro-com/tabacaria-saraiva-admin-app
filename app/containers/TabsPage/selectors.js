import { createSelector } from 'reselect';

/**
 * Direct selector to the tabsPage state domain
 */
const selectTabsPageDomain = () => state => state.get('tabs');

/**
 * Other specific selectors
 */
const selectTab = (id) => createSelector(
  selectTabsPageDomain(),
  (tabState) => tabState.toJS().items.filter((tab) => tab.id === id)[0]
);

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
  selectTab,
};
