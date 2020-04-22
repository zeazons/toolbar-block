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

  loadFlow = (ref, data, editor) => {
    const xmlStr = data.graphModel;
    const graph = editor.graph;

    window.mxGraphModel = mxGraphModel;
    window.mxGeometry = mxGeometry;

    const doc = mxUtils.parseXml(xmlStr);
    const root = doc.getElementsByTagName("mxGraphModel")[0];

    const dec = new mxCodec(root.ownerDocument);

    dec.decode(root, graph.getModel());
    graph.getView().refresh();
  };

  execute = (ref, data, extraParams) => {
    this.loadFlow(ref, data, extraParams);
  };
}
