import React from 'react';
import PropTypes from 'prop-types';

import ShoppingItem from './ShoppingItem';

const propTypes = {
  actions: PropTypes.shape({
    removeItem: PropTypes.func.isRequired,
    starItem: PropTypes.func.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isStarred: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const ShoppingList = ({ actions, items }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <ShoppingItem key={item.id} actions={actions} {...item} />
        );
      })}
    </ul>
  );
};

ShoppingList.propTypes = propTypes;

export default ShoppingList;
