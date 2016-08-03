import expect from 'expect';
import addTabPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('addTabPageReducer', () => {
  it('returns the initial state', () => {
    expect(addTabPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
