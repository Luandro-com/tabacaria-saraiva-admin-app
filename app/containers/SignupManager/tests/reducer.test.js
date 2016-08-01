import expect from 'expect';
import signupManagerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('signupManagerReducer', () => {
  it('returns the initial state', () => {
    expect(signupManagerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
