import expect from 'expect';
import addStockPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('addStockPageReducer', () => {
  it('returns the initial state', () => {
    expect(addStockPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
