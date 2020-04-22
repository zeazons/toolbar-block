import Listener from "../../facade/Listener";

import {
  URL_DISCARD_FLOW,
  METHOD_DISCARD_FLOW,
} from "../../constants/urlConstants";

export default class DiscardFlowListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (ref, editor) => {
    const data = {
      url: URL_DISCARD_FLOW,
      method: METHOD_DISCARD_FLOW,
      params: {},
    };

    this.privateTerminal.callConnect(ref, data, editor);
  };
}
