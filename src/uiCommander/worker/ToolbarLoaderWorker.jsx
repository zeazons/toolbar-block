import $ from "jquery";
import _ from "lodash";

import {
  mxUtils,
  mxGraphModel,
  mxGeometry,
  mxCodec,
} from "mxgraph/javascript/mxClient";

import Worker from "../../facade/Worker";

export default class ToolbarLoaderWorker extends Worker {
  constructor(props) {
    super(props);
  }

  loadToolbarButton = (ref, data) => {
    const { tools } = data;

    for (let i = 0; i < tools.length; i++) {
      let btn;

      switch (tools[i].button) {
        case "OpenFlow":
          btn = $(ref.current).find('*[data-icon="folder-open"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "EditFlow":
          btn = $(ref.current).find('*[data-icon="edit"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "SaveFlow":
          btn = $(ref.current).find('*[data-icon="save"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "DiscardFlow":
          btn = $(ref.current).find('*[data-icon="history"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "CloseFlow":
          btn = $(ref.current).find('*[data-icon="times-circle"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "UndoFlow":
          btn = $(ref.current).find('*[data-icon="undo-alt"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "RedoFlow":
          btn = $(ref.current).find('*[data-icon="redo-alt"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "ToggleGuideline":
          btn = $(ref.current).find('*[data-icon="border-none"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "ZoomOut":
          btn = $(ref.current).find('*[data-icon="search-minus"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "ZoomIn":
          btn = $(ref.current).find('*[data-icon="search-plus"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "ZoomActualSize":
          btn = $(ref.current).find('*[data-icon="compress"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "ZoomFitSize":
          btn = $(ref.current).find('*[data-icon="expand"]').parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        default:
          break;
      }
    }
  };

  execute = (ref, data, extraParams) => {
    this.loadToolbarButton(ref, data, extraParams);
  };
}
