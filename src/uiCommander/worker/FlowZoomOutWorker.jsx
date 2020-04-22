import _ from "lodash";

import Worker from "../../facade/Worker";
// Utils
import { actionClick } from "../../utils/flowUtiles";

export default class FlowZoomOutWorker extends Worker {
  constructor(props) {
    super(props);
  }

  zoomOutFlow = (ref, data, editor) => {
    actionClick(editor, "zoomOut");
  };

  execute = (ref, data, extraParams) => {
    this.zoomOutFlow(ref, data, extraParams);
  };
}
