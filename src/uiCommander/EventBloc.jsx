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

  init = (ref, props) => {
    const editor = props.editor;

    const el = ref.current;
    if (el) {
      const comp = $(el).attr("class");

      if ("toolbar-block" === comp) {
        const buttons = $(el).find("button");

        for (const button of buttons) {
          switch ($(button).find("i").attr("class")) {
            case "fas fa-folder-open":
              this.onLoadFlowClick(button, editor);
              break;

            case "fas fa-edit":
              this.onEditFlowClick(button, editor);
              break;

            case "fas fa-save":
              this.onSaveFlowClick(button, editor);
              break;

            case "fas fa-history":
              this.onDiscardFlowClick(button, editor);
              break;

            case "fas fa-times-circle":
              this.onCloseFlowClick(button, editor);
              break;

            case "fas fa-undo-alt":
              this.onUndoFlowClick(button, editor);
              break;

            case "fas fa-redo-alt":
              this.onRedoFlowClick(button, editor);
              break;

            case "fas fa-border-none":
              this.onToggleFlowGuidelineClick(button, editor);
              break;

            case "fas fa-search-minus":
              this.onZoomOutFlowClick(button, editor);
              break;

            case "fas fa-search-plus":
              this.onZoomInFlowClick(button, editor);
              break;

            case "fas fa-compress":
              this.onZoomActualSizeClick(button, editor);
              break;

            case "fas fa-expand":
              this.onZoomFitSizeClick(button, editor);
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

  onLoadFlowClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onLoadFlow`, event, editor);
      event.preventDefault();
    });
  };

  onEditFlowClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onEditFlow`, event, editor);
      event.preventDefault();
    });
  };

  onSaveFlowClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onSaveFlow`, event, editor);
      event.preventDefault();
    });
  };

  onDiscardFlowClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onDiscardFlow`, event, editor);
      event.preventDefault();
    });
  };

  onCloseFlowClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onCloseFlow`, event, editor);
      event.preventDefault();
    });
  };

  onUndoFlowClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onUndoFlow`, event, editor);
      event.preventDefault();
    });
  };

  onRedoFlowClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onRedoFlow`, event, editor);
      event.preventDefault();
    });
  };

  onToggleFlowGuidelineClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onToggleFlowGuideline`, event, editor);
      event.preventDefault();
    });
  };

  onZoomOutFlowClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onZoomOutFlow`, event, editor);
      event.preventDefault();
    });
  };

  onZoomInFlowClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onZoomInFlow`, event, editor);
      event.preventDefault();
    });
  };

  onZoomActualSizeClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onZoomActualSizeFlow`, event, editor);
      event.preventDefault();
    });
  };

  onZoomFitSizeClick = (button, editor) => {
    $(button).click((event) => {
      this.receiveEvent(`onZoomFitSizeFlow`, event, editor);
      event.preventDefault();
    });
  };
}
