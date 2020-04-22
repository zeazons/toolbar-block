import Listener from "../../facade/Listener";

import { URL_EDIT_FLOW, METHOD_EDIT_FLOW } from "../../constants/urlConstants";

export default class EditFlowListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (ref, editor) => {
    const data = {
      url: URL_EDIT_FLOW,
      method: METHOD_EDIT_FLOW,
      params: {},
    };

    this.privateTerminal.callConnect(ref, data, editor);
  };
}
