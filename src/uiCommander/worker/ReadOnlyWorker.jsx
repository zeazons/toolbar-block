import _ from "lodash";

import Worker from "../../facade/Worker";

const readOnly = (ref, data, editor) => {
  const isReadOnly = data.flow || false;
  const graph = editor.graph;
  graph.setEnabled(!isReadOnly);
};

export default class ReadOnlyWorker extends Worker {
  constructor(props) {
    super(props);
  }

  execute = (ref, data, extraParams) => {
    readOnly(ref, data, extraParams);
  };
}
