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
        <button
          onClick={() => {
            this.ref.current.setToolbar({
              tools: [
                {
                  button: "OpenFlow",
                  disabled: false,
                  hidden: true,
                },
                {
                  button: "EditFlow",
                  disabled: false,
                  hidden: false,
                },
                {
                  button: "SaveFlow",
                  disabled: false,
                  hidden: true,
                },
                {
                  button: "DiscardFlow",
                  disabled: false,
                  hidden: true,
                },
                {
                  button: "CloseFlow",
                  disabled: false,
                  hidden: true,
                },
                {
                  button: "UndoFlow",
                  disabled: false,
                  hidden: true,
                },
                {
                  button: "RedoFlow",
                  disabled: false,
                  hidden: true,
                },
                {
                  button: "ToggleGuideline",
                  disabled: false,
                  hidden: false,
                },
                {
                  button: "ZoomOut",
                  disabled: false,
                  hidden: false,
                },
                {
                  button: "ZoomIn",
                  disabled: false,
                  hidden: false,
                },
                {
                  button: "ZoomActualSize",
                  disabled: false,
                  hidden: false,
                },
                {
                  button: "ZoomFitSize",
                  disabled: false,
                  hidden: false,
                },
              ],
            });
          }}
        >
          Set Flow
        </button>
        <App
          ref={ref}
          id={id}
          onToolButtonClick={(event, topic) => {
            console.log("topic: ", topic);
          }}
        />
      </div>
    );
  }
}
