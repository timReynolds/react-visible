import React, { Component } from 'react';

export default class Visible extends Component {
  render() {
    if (!this.props.isVisible) {
      return null;
    }

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Visible.propTypes = {
  isVisible: React.PropTypes.bool.isRequired,
  children: React.PropTypes.any.isRequired,
};
