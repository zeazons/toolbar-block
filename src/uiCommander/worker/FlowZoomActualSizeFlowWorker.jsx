import _ from "lodash";

import Worker from "../../facade/Worker";
// Utils
import { actionClick } from "../../utils/flowUtiles";

export default class FlowZoomActualSizeFlowWorker extends Worker {
  constructor(props) {
    super(props);
  }

  zoomActualSizeFlow = (ref, data, editor) => {
    actionClick(editor, "actualSize");
  };

  execute = (ref, data, extraParams) => {
    this.zoomActualSizeFlow(ref, data, extraParams);
  };
}
