import { createSelector } from 'reselect';

/**
 * Direct selector to the signupAdmin state domain
 */
const selectSignupAdminDomain = () => state => state.get('signupAdmin');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignupAdmin
 */

const selectSignupAdmin = () => createSelector(
  selectSignupAdminDomain(),
  (substate) => substate.toJS()
);

export default selectSignupAdmin;
export {
  selectSignupAdminDomain,
};
