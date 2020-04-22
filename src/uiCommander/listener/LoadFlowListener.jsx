import Listener from "../../facade/Listener";

import { URL_OPEN_FLOW, METHOD_OPEN_FLOW } from "../../constants/urlConstants";

export default class LoadFlowListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (ref, editor) => {
    const data = {
      url: URL_OPEN_FLOW,
      method: METHOD_OPEN_FLOW,
      params: {},
    };

    this.privateTerminal.callConnect(ref, data, editor);
  };
}
