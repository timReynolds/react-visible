import React from 'react';

export default function Visible(props) {
  if (!props.isVisible) {
    return null;
  }

  return (
    <div>
      { props.children }
    < /div>
    );
}

Visible.propTypes = {
  isVisible: React.PropTypes.bool.isRequired,
  children: React.PropTypes.any.isRequired,
};
