import Listener from "../../facade/Listener";

import { generateAction } from "../../utils/actionUtils";
import * as ActionConstants from "../../constants/actionConstants";

export default class ZoomInFlowGuidelineListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (ref, editor) => {
    const action = generateAction({
      name: ActionConstants.ACTION_ZOOM_IN_FLOW,
      force: true,
      params: {},
    });

    this.privateTerminal.callReadAction(ref, action, editor);
  };
}
