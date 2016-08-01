import expect from 'expect';
import signupAdminReducer from '../reducer';
import { fromJS } from 'immutable';

describe('signupAdminReducer', () => {
  it('returns the initial state', () => {
    expect(signupAdminReducer(undefined, {})).toEqual(fromJS({}));
  });
});
