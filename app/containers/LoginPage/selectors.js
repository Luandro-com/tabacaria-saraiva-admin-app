import { createSelector } from 'reselect';
/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = () => state => state.get('user');

/**
 * Other specific selectors
 */
const selectUserName = () => createSelector(
  selectLoginPageDomain(),
  (userState) => userState.get('currentUser')
);

/**
 * Default selector used by LoginPage
 */

const selectLoginPage = () => createSelector(
  selectLoginPageDomain(),
  (substate) => substate.toJS()
);

export default selectLoginPage;
export {
  selectLoginPageDomain,
  selectUserName
};
