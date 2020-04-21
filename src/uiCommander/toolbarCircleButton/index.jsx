import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";

class ToolbarCircleButton extends Component {
  render() {
    const { children, size, color, onClick } = this.props;

    return (
      <IconButton
        aria-label="delete"
        size={size}
        color={color}
        onClick={onClick}
        // style={{ margin: "0 6px" }}
      >
        {children}
      </IconButton>
    );
  }
  // Set default props
  static defaultProps = {
    children: null,
  };
}

ToolbarCircleButton.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
};

export default ToolbarCircleButton;
