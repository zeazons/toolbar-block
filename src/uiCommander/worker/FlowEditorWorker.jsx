import _ from "lodash";

import {
  mxUtils,
  mxGraphModel,
  mxGeometry,
  mxCodec,
} from "mxgraph/javascript/mxClient";

import Worker from "../../facade/Worker";

export default class FlowReaderWorker extends Worker {
  constructor(props) {
    super(props);
  }

  editFlow = (ref, data, editor) => {
    console.log("edit flow");
  };

  execute = (ref, data, extraParams) => {
    this.editFlow(ref, data, extraParams);
  };
}
