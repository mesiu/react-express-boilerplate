import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  actions: PropTypes.shape({
    addItem: PropTypes.func.isRequired,
  }).isRequired,
};

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.input.value) {
      return;
    }

    this.props.actions.addItem(this.input.value);

    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={(c) => { this.input = c; }} />
        <button type="submit">Add item</button>
      </form>
    );
  }
}

AddItem.propTypes = propTypes;

export default AddItem;
