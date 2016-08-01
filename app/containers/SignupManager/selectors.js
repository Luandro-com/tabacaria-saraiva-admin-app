import { createSelector } from 'reselect';

/**
 * Direct selector to the signupManager state domain
 */
const selectSignupManagerDomain = () => state => state.get('signupManager');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignupManager
 */

const selectSignupManager = () => createSelector(
  selectSignupManagerDomain(),
  (substate) => substate.toJS()
);

export default selectSignupManager;
export {
  selectSignupManagerDomain,
};
