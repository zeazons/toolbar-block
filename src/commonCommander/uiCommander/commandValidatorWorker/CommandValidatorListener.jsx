import Listener from "../../../facade/Listener";

import * as ActionConstants from "../../constants/actionConstants";
import { generateAction } from "../../../utils/actionUtils";

export default class CommandValidatorListener extends Listener {
  execute = (error) => {
    const action = generateAction({
      name: ActionConstants.ACTION_SHOW_ERROR,
      force: true,
      params: { type: "error", message: error.message },
    });

    this.privateTerminal.callReadAction(null, action);
  };

  listen = (error) => {
    this.execute(error);
  };
}
