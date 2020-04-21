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

  loadToolbar = (ref, data) => {
    console.log("loadToolbar");
    console.log("ref: ", ref);
    console.log("data: ", data);
  };

  execute = (ref, data, extraParams) => {
    this.loadToolbar(ref, data, extraParams);
  };
}
