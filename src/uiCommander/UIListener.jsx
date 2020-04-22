import Listener from "../facade/Listener";

import ToolbarLoadListener from "./listener/ToolbarLoadListener";

import LoadFlowListener from "./listener/LoadFlowListener";
import EditFlowListener from "./listener/EditFlowListener";
import SaveFlowListener from "./listener/SaveFlowListener";
import DiscardFlowListener from "./listener/DiscardFlowListener";
import CloseFlowListener from "./listener/CloseFlowListener";
import UndoFlowListener from "./listener/UndoFlowListener";
import RedoFlowListener from "./listener/RedoFlowListener";

import ToggleFlowGuidelineListener from "./listener/ToggleFlowGuidelineListener";
import ZoomOutFlowListener from "./listener/ZoomOutFlowListener";
import ZoomInFlowListener from "./listener/ZoomInFlowListener";
import ZoomActualSizeFlowListener from "./listener/ZoomActualSizeFlowListener";
import ZoomFitSizeFlowListener from "./listener/ZoomFitSizeFlowListener";
export default class UIListener extends Listener {
  constructor(props) {
    super(props);

    this.toolbarLoadListener = new ToolbarLoadListener();

    this.loadFlowListener = new LoadFlowListener();
    this.editFlowListener = new EditFlowListener();
    this.saveFlowListener = new SaveFlowListener();
    this.discardFlowListener = new DiscardFlowListener();
    this.closeFlowListener = new CloseFlowListener();
    this.undoFlowListener = new UndoFlowListener();
    this.redoFlowListener = new RedoFlowListener();

    this.toggleFlowGuidelineListener = new ToggleFlowGuidelineListener();
    this.zoomOutFlowListener = new ZoomOutFlowListener();
    this.zoomInFlowListener = new ZoomInFlowListener();
    this.zoomActualSizeFlowListener = new ZoomActualSizeFlowListener();
    this.zoomFitSizeFlowListener = new ZoomFitSizeFlowListener();
  }

  receive = (topic, data, extraParams) => {
    this[topic](data, extraParams);
  };

  onToolbarLoader = (data) => {
    this.toolbarLoadListener.listen(data);
  };

  onLoadFlow = (data, extraParams) => {
    this.loadFlowListener.listen(data, extraParams);
  };

  onEditFlow = (data, extraParams) => {
    this.editFlowListener.listen(data, extraParams);
  };

  onSaveFlow = (data, extraParams) => {
    this.saveFlowListener.listen(data, extraParams);
  };

  onDiscardFlow = (data, extraParams) => {
    this.discardFlowListener.listen(data, extraParams);
  };

  onCloseFlow = (data, extraParams) => {
    this.closeFlowListener.listen(data, extraParams);
  };

  onUndoFlow = (data, extraParams) => {
    this.undoFlowListener.listen(data, extraParams);
  };

  onRedoFlow = (data, extraParams) => {
    this.redoFlowListener.listen(data, extraParams);
  };

  onToggleFlowGuideline = (data, extraParams) => {
    this.toggleFlowGuidelineListener.listen(data, extraParams);
  };

  onZoomOutFlow = (data, extraParams) => {
    this.zoomOutFlowListener.listen(data, extraParams);
  };

  onZoomInFlow = (data, extraParams) => {
    this.zoomInFlowListener.listen(data, extraParams);
  };

  onZoomActualSizeFlow = (data, extraParams) => {
    this.zoomActualSizeFlowListener.listen(data, extraParams);
  };

  onZoomFitSizeFlow = (data, extraParams) => {
    this.zoomFitSizeFlowListener.listen(data, extraParams);
  };
}
