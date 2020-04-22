import _ from "lodash";

// import Commander from "../facade/Commander";
import UICommander from "../commonCommander/uiCommander";

import ToolbarLoaderWorker from "./worker/ToolbarLoaderWorker";

import ReadOnlyWorker from "./worker/ReadOnlyWorker";
import FlowReaderWorker from "./worker/FlowReaderWorker";
import FlowGuidelineWorker from "./worker/FlowGuidelineWorker";
import FlowZoomOutWorker from "./worker/FlowZoomOutWorker";
import FlowZoomInWorker from "./worker/FlowZoomInWorker";
import FlowZoomActualSizeFlowWorker from "./worker/FlowZoomActualSizeFlowWorker";
import FlowZoomFitSizeFlowWorker from "./worker/FlowZoomFitSizeFlowWorker";

class ToolbarComponentCommander extends UICommander {
  constructor(props) {
    super(props);

    this.toolbarLoaderWorker = new ToolbarLoaderWorker();

    this.flowReaderWorker = new FlowReaderWorker();
    this.readOnlyWorker = new ReadOnlyWorker();
    this.flowGuidelineWorker = new FlowGuidelineWorker();
    this.flowZoomOutWorker = new FlowZoomOutWorker();
    this.flowZoomInWorker = new FlowZoomInWorker();
    this.flowZoomActualSizeFlowWorker = new FlowZoomActualSizeFlowWorker();
    this.flowZoomFitSizeFlowWorker = new FlowZoomFitSizeFlowWorker();
  }

  loadToolbarButton = (ref, data, extraParams) => {
    return this.toolbarLoaderWorker.execute(ref, data, extraParams);
  };

  lock = (ref, data, extraParams) => {
    return this.readOnlyWorker.execute(ref, data, extraParams);
  };

  readFlow = (ref, data, extraParams) => {
    return this.flowReaderWorker.execute(ref, data, extraParams);
  };

  toggleFlowGuideline = (ref, data, extraParams) => {
    return this.flowGuidelineWorker.execute(ref, data, extraParams);
  };

  zoomOutFlow = (ref, data, extraParams) => {
    return this.flowZoomOutWorker.execute(ref, data, extraParams);
  };

  zoomInFlow = (ref, data, extraParams) => {
    return this.flowZoomInWorker.execute(ref, data, extraParams);
  };

  zoomActualSizeFlow = (ref, data, extraParams) => {
    return this.flowZoomActualSizeFlowWorker.execute(ref, data, extraParams);
  };

  zoomFitSizeFlow = (ref, data, extraParams) => {
    return this.flowZoomFitSizeFlowWorker.execute(ref, data, extraParams);
  };
}

export default ToolbarComponentCommander;
