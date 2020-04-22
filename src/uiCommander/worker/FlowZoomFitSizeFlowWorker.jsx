import _ from "lodash";

import Worker from "../../facade/Worker";
// Utils
import { actionClick } from "../../utils/flowUtiles";

export default class FlowZoomFitSizeFlowWorker extends Worker {
  constructor(props) {
    super(props);
  }

  zoomFitSizeFlow = (ref, data, editor) => {
    actionClick(editor, "fit");
  };

  execute = (ref, data, extraParams) => {
    this.zoomFitSizeFlow(ref, data, extraParams);
  };
}
