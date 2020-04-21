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

  loadToolbarButton = (ref, data, editor) => {
    const { tools } = data;
    for (let i = 0; i < tools.length; i++) {
      let btn;
      switch (tools[i].button) {
        case "OpenFlow":
          btn = $(ref.current).find(".fas.fa-folder-open").parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "EditFlow":
          btn = $(ref.current).find(".fas.fa-edit").parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "SaveFlow":
          btn = $(ref.current).find(".fas.fa-save").parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "DiscardFlow":
          btn = $(ref.current).find(".fas.fa-history").parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "CloseFlow":
          btn = $(ref.current).find(".fas.fa-times-circle").parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "UndoFlow":
          btn = $(ref.current).find(".fas.fa-undo-alt").parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "RedoFlow":
          btn = $(ref.current).find(".fas.fa-redo-alt").parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "ToggleGuideline":
          btn = $(ref.current).find(".fas.fa-border-none").parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "ZoomOut":
          btn = $(ref.current).find(".fas.fa-search-minus").parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "ZoomIn":
          btn = $(ref.current).find(".fas.fa-search-plus").parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "ZoomActualSize":
          btn = $(ref.current).find(".fas.fa-compress").parent();
          $(btn).prop("disabled", tools[i].disabled);
          if (tools[i].hidden) {
            $(btn).hide();
          } else {
            $(btn).show();
          }
          break;

        case "ZoomFitSize":
          btn = $(ref.current).find(".fas.fa-expand").parent();
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
