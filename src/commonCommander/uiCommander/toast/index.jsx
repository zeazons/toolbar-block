import { Component } from "react";
import PropTypes from "prop-types";

import cogoToast from "cogo-toast";

class Toast extends Component {
  constructor(props) {
    super(props);
  }

  success = (msg, position, title) => {
    cogoToast.success(msg, {
      position: position,
      heading: title,
    });
  };

  error = (msg, position, title) => {
    cogoToast.error(msg, {
      position: position,
      heading: title,
    });
  };

  warn = (msg, position, title) => {
    cogoToast.warn(msg, {
      position: position,
      heading: title,
    });
  };

  info = (msg, position, title) => {
    cogoToast.info(msg, {
      position: position,
      heading: title,
    });
  };

  loading = (msg, position, title) => {
    cogoToast.loading(msg, {
      position: position,
      heading: title,
    });
  };
}

Toast.defaultProps = {
  msg: "",
  position: "top-center",
  title: null,
  hideAfter: 5,
};

Toast.propTypes = {
  msg: PropTypes.string.isRequired,
  position: PropTypes.string,
  title: PropTypes.string,
  hideAfter: PropTypes.number,
};

export default Toast;
