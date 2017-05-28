import * as types from '../constants/actionTypes';

const shoppingItem = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        id: action.id,
        isStarred: false,
        text: action.text,
      };
    case types.STAR_ITEM:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        isStarred: !state.isStarred,
      };
    default:
      return state;
  }
};

const shopping = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return [
        ...state,
        shoppingItem(undefined, action),
      ];
    case types.REMOVE_ITEM:
      return state.filter((item) => {
        return item.id !== action.id;
      });
    case types.STAR_ITEM:
      return state.map((item) => {
        return shoppingItem(item, action);
      });
    default:
      return state;
  }
};

export default shopping;
