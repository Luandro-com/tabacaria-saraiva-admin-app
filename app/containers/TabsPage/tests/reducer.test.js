import expect from 'expect';
import tabsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('tabsPageReducer', () => {
  it('returns the initial state', () => {
    expect(tabsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
