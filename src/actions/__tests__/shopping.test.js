import * as actions from '../shopping';
import * as types from '../../constants/actionTypes';

describe('shopping actions', () => {
  it('should create an action when adding an item', () => {
    const text = 'Hello world';

    const expectedAction = {
      type: types.ADD_ITEM,
      id: 1,
      text,
    };

    expect(actions.addItem(text)).toEqual(expectedAction);
  });

  it('should create an action when removing an item', () => {
    const expectedAction = {
      type: types.REMOVE_ITEM,
      id: 1,
    };

    expect(actions.removeItem(1)).toEqual(expectedAction);
  });

  it('should create an action when starring an item', () => {
    const expectedAction = {
      type: types.STAR_ITEM,
      id: 1,
    };

    expect(actions.starItem(1)).toEqual(expectedAction);
  });

  it('should create an action when setting a visibility filter', () => {
    const expectedAction = {
      type: types.SET_VISIBILITY_FILTER,
      filter: 'SHOW_ALL',
    };

    expect(actions.setVisibilityFilter('SHOW_ALL')).toEqual(expectedAction);
  });
});
