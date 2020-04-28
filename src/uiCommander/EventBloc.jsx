import $ from "jquery";
import EventBloc from "../bloc/EventBloc";

import {
  URL_LOAD_TOOLBAR,
  METHOD_LOAD_TOOLBAR,
} from "../constants/urlConstants";

import {
  getParentByClassName,
  generateReferenceView,
} from "../utils/viewUtils";

export default class UIEventBloc extends EventBloc {
  constructor(props) {
    super(props);
  }

  load = (refs) => {
    this.onLoadToolbar(refs);
  };

  setToolbar = (ref, tools) => {
    this.receiveEvent(`onSetToolbar`, ref, tools);
  };

  init = (ref, props) => {
    const el = ref.current;
    if (el) {
      const comp = $(el).attr("class");

      if ("toolbar-block" === comp) {
        const buttons = $(el).find("button");

        for (const button of buttons) {
          switch ($(button).find("svg").attr("data-icon")) {
            case "folder-open":
              this.onToolButtonClick(button, "loadFlow", props);
              break;

            case "edit":
              this.onToolButtonClick(button, "editFlow", props);
              break;

            case "save":
              this.onToolButtonClick(button, "saveFlow", props);
              break;

            case "check-circle":
              this.onToolButtonClick(button, "commitFlow", props);
              break;

            case "history":
              this.onToolButtonClick(button, "discardFlow", props);
              break;

            case "times-circle":
              this.onToolButtonClick(button, "closeFlow", props);
              break;

            case "undo-alt":
              this.onToolButtonClick(button, "undoFlow", props);
              break;

            case "redo-alt":
              this.onToolButtonClick(button, "redoFlow", props);
              break;

            case "border-none":
              this.onToolButtonClick(button, "toggleFlowGuideline", props);
              break;

            case "search-minus":
              this.onToolButtonClick(button, "zoomOutFlow", props);
              break;

            case "search-plus":
              this.onToolButtonClick(button, "zoomInFlow", props);
              break;

            case "compress":
              this.onToolButtonClick(button, "zoomActualSize", props);
              break;

            case "expand":
              this.onToolButtonClick(button, "zoomFitSize", props);

              break;

            default:
              break;
          }
        }
      }
    }
  };

  onLoadToolbar = (ref) => {
    this.receiveEvent(`onToolbarLoader`, ref);
  };

  onToolButtonClick = (button, data, props) => {
    $(button).click((event) => {
      props.onToolButtonClick(event, data);
      event.preventDefault();
    });
  };
}
