import * as types from '../constants/actionTypes';

let itemIndex = 0;

const addItem = (text) => {
  itemIndex += 1;

  return {
    type: types.ADD_ITEM,
    id: itemIndex,
    text,
  };
};

const removeItem = (id) => {
  return {
    type: types.REMOVE_ITEM,
    id,
  };
};

const starItem = (id) => {
  return {
    type: types.STAR_ITEM,
    id,
  };
};

const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter,
  };
};

export { addItem, removeItem, starItem, setVisibilityFilter };
