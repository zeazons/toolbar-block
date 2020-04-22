import _ from "lodash";

import Worker from "../../facade/Worker";
// Utils
import { actionClick } from "../../utils/flowUtiles";

export default class FlowZoomInWorker extends Worker {
  constructor(props) {
    super(props);
  }

  zoomInFlow = (ref, data, editor) => {
    actionClick(editor, "zoomIn");
  };

  execute = (ref, data, extraParams) => {
    this.zoomInFlow(ref, data, extraParams);
  };
}
