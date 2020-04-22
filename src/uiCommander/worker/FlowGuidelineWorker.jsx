import _ from "lodash";

import Worker from "../../facade/Worker";

export default class FlowGuidelineWorker extends Worker {
  constructor(props) {
    super(props);
  }

  toggleFlowGuideline = (ref, data, editor) => {
    const graph = editor.graph;
    graph.pageBreaksVisible = !graph.pageBreaksVisible;
    graph.sizeDidChange();
  };

  execute = (ref, data, extraParams) => {
    this.toggleFlowGuideline(ref, data, extraParams);
  };
}
