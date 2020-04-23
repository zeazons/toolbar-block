import React, { Component } from "react";

import _ from "lodash";

import App from "../../src";

export default class AppDemo extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    const id = "appDemo";

    const ref = this.ref;

    return (
      <div>
        <App ref={ref} id={id} />
      </div>
    );
  }
}
