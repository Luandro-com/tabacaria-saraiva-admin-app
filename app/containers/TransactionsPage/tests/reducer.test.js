import expect from 'expect';
import transactionsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('transactionsPageReducer', () => {
  it('returns the initial state', () => {
    expect(transactionsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
