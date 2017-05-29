import * as types from '../../constants/actionTypes';
import reducer from '../visibilityFilter';

describe('visibilityFilter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('SHOW_ALL');
  });

  it('should handle SET_VISIBILITY_FILTER', () => {
    const action = {
      type: types.SET_VISIBILITY_FILTER,
      filter: 'SHOW_STARRED',
    };

    const state = [];

    const nextState = 'SHOW_STARRED';

    expect(reducer(state, action)).toEqual(nextState);
  });
});
