import React, { Component } from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";

class TooltipComponent extends Component {
  render() {
    const { children, title, placement } = this.props;

    return (
      <Tooltip title={title} placement={placement}>
        {children}
      </Tooltip>
    );
  }
  // Set default props
  static defaultProps = {
    children: null,
    title: "",
    placement: "top",
  };
}

TooltipComponent.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  placement: PropTypes.string,
};

export default TooltipComponent;
