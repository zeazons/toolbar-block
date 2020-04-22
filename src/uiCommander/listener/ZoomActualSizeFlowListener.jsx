import Listener from "../../facade/Listener";

import { generateAction } from "../../utils/actionUtils";
import * as ActionConstants from "../../constants/actionConstants";

export default class ZoomActualSizeFlowGuidelineListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (ref, editor) => {
    const action = generateAction({
      name: ActionConstants.ACTION_ZOOM_ACTUAL_SIZE,
      force: true,
      params: {},
    });

    this.privateTerminal.callReadAction(ref, action, editor);
  };
}
