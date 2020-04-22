import Listener from "../../facade/Listener";

import { generateAction } from "../../utils/actionUtils";
import * as ActionConstants from "../../constants/actionConstants";

export default class ToggleFlowGuidelineListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (ref, editor) => {
    const action = generateAction({
      name: ActionConstants.ACTION_TOGGLE_FLOW_GUIDELINE,
      force: true,
      params: {},
    });

    this.privateTerminal.callReadAction(ref, action, editor);
  };
}
