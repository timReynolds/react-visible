import React from "react";
import PropTypes from "prop-types";

export default function Visible(props) {
  if (!props.isVisible) {
    return null;
  }

  return props.children;
}

Visible.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired
};
