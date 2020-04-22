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

  load = (refs, extraParams) => {
    this.loadToolbar(refs);
  };

  init = (refs, props) => {
    const el = refs.current;
    if (el) {
      const comp = $(el).attr("class");

      if ("toolbar-block" === comp) {
        const buttons = $(el).find("button");

        for (const button of buttons) {
          switch ($(button).find("i").attr("class")) {
            case "fas fa-folder-open":
              this.onToolButtonClick(button, "readFlow", props);
              break;

            case "fas fa-edit":
              this.onToolButtonClick(button, "editFlow", props);
              break;

            case "fas fa-save":
              this.onToolButtonClick(button, "saveFlow", props);
              break;

            case "fas fa-history":
              this.onToolButtonClick(button, "discardFlow", props);
              break;

            case "fas fa-times-circle":
              this.onToolButtonClick(button, "closeFlow", props);
              break;

            case "fas fa-undo-alt":
              this.onToolButtonClick(button, "undoFlow", props);
              break;

            case "fas fa-redo-alt":
              this.onToolButtonClick(button, "redoFlow", props);
              break;

            case "fas fa-border-none":
              this.onToolButtonClick(button, "toggleFlowGuideline", props);
              break;

            case "fas fa-search-minus":
              this.onToolButtonClick(button, "zoomOutFlow", props);
              break;

            case "fas fa-search-plus":
              this.onToolButtonClick(button, "zoomInFlow", props);
              break;

            case "fas fa-compress":
              this.onToolButtonClick(button, "zoomActualSize", props);
              break;

            case "fas fa-expand":
              this.onToolButtonClick(button, "zoomFitSize", props);
              break;

            default:
              break;
          }
        }
      }
    }
  };

  loadToolbar = (ref) => {
    this.receiveEvent(`onToolbarLoader`, ref);
  };

  onToolButtonClick = (button, data, props) => {
    $(button).click((event) => {
      props.onToolButtonClick(event, data);
      event.preventDefault();
    });
  };
}
