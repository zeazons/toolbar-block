import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

class ToolbarButton extends Component {
  render() {
    const { children, onClick } = this.props;
    return (
      <button type="button" className="btn btn-light btn-sm" onClick={onClick}>
        {children}
      </button>
    );
  }
  // Set default props
  static defaultProps = {
    children: null,
  };
}

ToolbarButton.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
};

export default ToolbarButton;
