import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  actions: PropTypes.shape({
    removeItem: PropTypes.func.isRequired,
    starItem: PropTypes.func.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  isStarred: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

class ShoppingItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleStar = this.handleStar.bind(this);
  }

  handleRemove() {
    this.props.actions.removeItem(this.props.id);
  }

  handleStar() {
    this.props.actions.starItem(this.props.id);
  }

  render() {
    const { isStarred, text } = this.props;

    return (
      <li>
        <span>{text}</span>
        <span>
          <button
            className={isStarred ? 'btn-isStarred' : null}
            onClick={this.handleStar}
          >
            Star
          </button>
          <button
            onClick={this.handleRemove}
          >
            Delete
          </button>
        </span>
      </li>
    );
  }
}

ShoppingItem.propTypes = propTypes;

export default ShoppingItem;
