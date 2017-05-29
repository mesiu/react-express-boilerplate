import * as types from '../../constants/actionTypes';
import reducer from '../shopping';

describe('shopping reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_ITEM', () => {
    const action = {
      type: types.ADD_ITEM,
      id: 1,
      text: 'Hello world',
    };

    const state = [];

    const nextState = [
      {
        id: 1,
        isStarred: false,
        text: 'Hello world',
      },
    ];

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('should handle REMOVE_ITEM', () => {
    const action = {
      type: types.REMOVE_ITEM,
      id: 1,
    };

    const state = [
      {
        id: 1,
        isStarred: false,
        text: 'Hello world',
      },
    ];

    const nextState = [];

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('should handle STAR_ITEM', () => {
    const action = {
      type: types.STAR_ITEM,
      id: 1,
    };

    const state = [
      {
        id: 1,
        isStarred: false,
        text: 'Hello world',
      },
      {
        id: 2,
        isStarred: false,
        text: 'Hello universe',
      },
    ];

    const nextState = [
      {
        id: 1,
        isStarred: true,
        text: 'Hello world',
      },
      {
        id: 2,
        isStarred: false,
        text: 'Hello universe',
      },
    ];

    expect(reducer(state, action)).toEqual(nextState);
  });
});
