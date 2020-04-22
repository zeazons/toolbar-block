import Listener from "../../facade/Listener";

import { URL_SAVE_FLOW, METHOD_SAVE_FLOW } from "../../constants/urlConstants";

export default class SaveFlowListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (ref, editor) => {
    const data = {
      url: URL_SAVE_FLOW,
      method: METHOD_SAVE_FLOW,
      params: {},
    };

    this.privateTerminal.callConnect(ref, data, editor);
  };
}
