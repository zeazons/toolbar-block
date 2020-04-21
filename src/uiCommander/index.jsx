import React, { Component } from "react";

import ManagerBloc from "../bloc/ManagerBloc";
import UIEventBloc from "./EventBloc";

import ToolbarLeftView from "./ToolbarLeftView";
import ToolbarRightView from "./ToolbarRightView";

import "../assets/css/style.css";

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.toolbarLeftRef = React.createRef();
    this.toolbarRigthRef = React.createRef();

    this.managerBloc = new ManagerBloc();
    this.managerBloc.refs = [];

    this.eventBloc = new UIEventBloc();
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.eventBloc.init(this.toolbarLeftRef, nextProps.editor);
    this.eventBloc.init(this.toolbarRigthRef, nextProps.editor);

    return true;
  }

  render() {
    const props = this.props;

    const toolbarLeftRef = this.toolbarLeftRef;
    const toolbarRigthRef = this.toolbarRigthRef;

    return (
      <div className="toolbar-component">
        {/* <div className="row align-items-center">
          <div className="col">Toolbar</div>
        </div> */}

        <div className="row align-items-center">
          <div className="col">
            <ToolbarLeftView ref={toolbarLeftRef} {...props} />
          </div>
          <div className="col d-flex justify-content-end">
            <ToolbarRightView ref={toolbarRigthRef} {...props} />
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
