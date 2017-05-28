import React from 'react';
import PropTypes from 'prop-types';

import AddItem from './AddItem';
import Filters from './Filters';
import ShoppingList from './ShoppingList';

const propTypes = {
  actions: PropTypes.shape({
    addItem: PropTypes.func.isRequired,
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
  total: PropTypes.number.isRequired,
};

const Shopping = ({ actions, items, total }) => {
  return (
    <div>
      <AddItem actions={actions} />
      <p>Showing {items.length} of {total}</p>
      <ShoppingList actions={actions} items={items} />
      <Filters />
    </div>
  );
};

Shopping.propTypes = propTypes;

export default Shopping;
