import Listener from "../../facade/Listener";

import { generateAction } from "../../utils/actionUtils";
import * as ActionConstants from "../../constants/actionConstants";

export default class ToolbarListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (ref, tools) => {
    const action = generateAction({
      name: ActionConstants.ACTION_LOAD_TOOLBAR_BUTTON,
      force: true,
      params: tools,
    });

    this.privateTerminal.callReadAction(ref, action);
  };
}
