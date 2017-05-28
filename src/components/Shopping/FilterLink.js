import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  actions: PropTypes.shape({
    setVisibilityFilter: PropTypes.func.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

class FilterLink extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.props.actions.setVisibilityFilter();
  }

  render() {
    const { active, children } = this.props;

    if (active) {
      return (
        <span>{children}</span>
      );
    }

    return (
      <a onClick={this.handleClick} role="button" tabIndex={0}>{children}</a>
    );
  }
}

FilterLink.propTypes = propTypes;

export default FilterLink;
