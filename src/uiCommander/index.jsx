import React, { Component } from "react";

import ManagerBloc from "../bloc/ManagerBloc";
import UIEventBloc from "./EventBloc";

import ToolbarLeftView from "./ToolbarLeftView";
import ToolbarRightView from "./ToolbarRightView";

import "../assets/css/style.css";

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.toolbarLeftRef = React.createRef();
    this.toolbarRigthRef = React.createRef();

    this.managerBloc = new ManagerBloc();
    this.managerBloc.refs = [];

    this.eventBloc = new UIEventBloc();
  }

  onToolButtonClick = (event, data) => {
    const { props } = this.props;

    if (props) {
      props.onToolButtonClick((event, data));
    }
  };

  componentDidMount() {
    this.eventBloc.load(this.ref);
    this.eventBloc.init(this.ref, this.props);
    // this.eventBloc.init(this.toolbarRigthRef);
  }

  render() {
    const props = this.props;

    const ref = this.ref;
    const toolbarLeftRef = this.toolbarLeftRef;
    const toolbarRigthRef = this.toolbarRigthRef;

    return (
      <div className="toolbar-block" ref={ref}>
        {/* <div className="row align-items-center">
          <div className="col">Toolbar</div>
        </div> */}

        <div className="row align-items-center">
          <div className="col">
            <ToolbarLeftView {...props} ref={toolbarLeftRef} />
          </div>
          <div className="col d-flex justify-content-end">
            <ToolbarRightView {...props} ref={toolbarRigthRef} />
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
