import Listener from "../../facade/Listener";

import { URL_REDO_FLOW, METHOD_REDO_FLOW } from "../../constants/urlConstants";

export default class RedoFlowListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (ref, editor) => {
    const data = {
      url: URL_REDO_FLOW,
      method: METHOD_REDO_FLOW,
      params: {},
    };

    this.privateTerminal.callConnect(ref, data, editor);
  };
}
