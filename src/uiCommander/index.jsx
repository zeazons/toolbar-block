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

  loadToolbar = () => {
    const ref = this.refs;

    this.eventBloc.loadToolbar(ref);
  };

  loadFlow = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.loadFlow(ref, editor);
  };

  editFlow = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.editFlow(ref, editor);
  };

  saveFlow = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.saveFlow(ref, editor);
  };

  discardFlow = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.discardFlow(ref, editor);
  };

  closeFlow = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.closeFlow(ref, editor);
  };

  undoFlow = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.undoFlow(ref, editor);
  };

  redoFlow = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.redoFlow(ref, editor);
  };

  toggleFlowGuideline = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.toggleFlowGuideline(ref, editor);
  };

  zoomOutFlow = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.zoomOutFlow(ref, editor);
  };

  zoomInFlow = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.zoomInFlow(ref, editor);
  };

  zoomActualSize = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.zoomActualSize(ref, editor);
  };

  zoomFitSize = () => {
    const ref = this.refs;
    const editor = this.props.editor;

    this.eventBloc.zoomFitSize(ref, editor);
  };

  componentDidMount() {
    this.managerBloc.refs["toolbar"] = this.ref;
    this.eventBloc.load(this.ref);
    this.eventBloc.init(this.ref, this.props);
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
