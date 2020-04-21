import $ from "jquery";
import EventBloc from "../bloc/EventBloc";

export default class UIEventBloc extends EventBloc {
  constructor(props) {
    super(props);
  }

  init = (refs, extraParams) => {
    const el = refs.current;
    if (el) {
      const comp = $(el).attr("class");

      // init emulator
      if ("actionbar" === comp) {
        // init keypad
        if ("actionbar" === comp) {
          const buttons = $(el).find("button");

          for (const button of buttons) {
            switch ($(button).find("i").attr("class")) {
              case "fas fa-folder-open":
                this.onOpenFlowClick(button, extraParams);
                break;

              case "fas fa-save":
                this.onSaveFlowClick(button, extraParams);
                break;

              case "fas fa-undo-alt":
                this.onUndoFlowClick(button, extraParams);
                break;

              case "fas fa-redo-alt":
                this.onRedoFlowClick(button, extraParams);
                break;

              case "fas fa-border-none":
                this.onOpenFlowGuidelineClick(button, extraParams);
                break;

              case "fas fa-search-minus":
                this.onZoomOutFlowClick(button, extraParams);
                break;

              case "fas fa-search-plus":
                this.onZoomInFlowClick(button, extraParams);
                break;

              case "fas fa-compress":
                this.onZoomActualSizeFlowClick(button, extraParams);
                break;

              case "fas fa-expand":
                this.onZoomFitSizeFlowClick(button, extraParams);
                break;

              default:
                break;
            }

            // this.onKeypadClick(button);
          }
        }

        // const textAreaList = $(el).find("textarea");
        // const elScreen = $(el).find(`.${textAreaList[0].className}`);
        // this.onKeyDown(elScreen);
        // this.onMouseUp(elScreen);
      }

      // init keypad
      if ("keypad" === comp) {
        const buttons = $(el).find("button");
        for (const button of buttons) {
          this.onOpenFlowClick(button);
        }
      }
    }
  };

  onOpenFlowClick = (button, extraParams) => {
    $(button).click((event) => {
      this.receiveEvent(`onOpenFlowClick`, event, extraParams);
      event.preventDefault();
    });
  };

  onSaveFlowClick = (button, extraParams) => {
    $(button).click((event) => {
      this.receiveEvent(`onSaveFlowClick`, event, extraParams);
      event.preventDefault();
    });
  };

  onUndoFlowClick = (button, extraParams) => {
    $(button).click((event) => {
      this.receiveEvent(`onUndoFlowClick`, event, extraParams);
      event.preventDefault();
    });
  };

  onRedoFlowClick = (button, extraParams) => {
    $(button).click((event) => {
      this.receiveEvent(`onRedoFlowClick`, event, extraParams);
      event.preventDefault();
    });
  };

  onOpenFlowGuidelineClick = (button, extraParams) => {
    $(button).click((event) => {
      this.receiveEvent(`onOpenFlowGuidelineClick`, event, extraParams);
      event.preventDefault();
    });
  };

  onZoomOutFlowClick = (button, extraParams) => {
    $(button).click((event) => {
      this.receiveEvent(`onZoomOutFlowClick`, event, extraParams);
      event.preventDefault();
    });
  };

  onZoomInFlowClick = (button, extraParams) => {
    $(button).click((event) => {
      this.receiveEvent(`onZoomInFlowClick`, event, extraParams);
      event.preventDefault();
    });
  };

  onZoomActualSizeFlowClick = (button, extraParams) => {
    $(button).click((event) => {
      this.receiveEvent(`onZoomActualSizeFlowClick`, event, extraParams);
      event.preventDefault();
    });
  };

  onZoomFitSizeFlowClick = (button, extraParams) => {
    $(button).click((event) => {
      this.receiveEvent(`onZoomFitSizeFlowClick`, event, extraParams);
      event.preventDefault();
    });
  };
}
