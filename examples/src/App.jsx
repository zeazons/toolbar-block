import React, { Component } from "react";

import _ from "lodash";
import PageBloc from "./PageBloc";

import Canvas from "../../src";

export default class CanvasDemo extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.bloc = new PageBloc(this.ref);
  }

  render() {
    const id = "flow";
    const editor = { graph: {} };

    const ref = this.ref;
    const bloc = this.bloc;

    return (
      <div>
        <Canvas ref={ref} id={id} editor={editor} />
      </div>
    );
  }
}
