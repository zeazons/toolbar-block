import Listener from "../../facade/Listener";

import {
  URL_CLOSE_FLOW,
  METHOD_CLOSE_FLOW,
} from "../../constants/urlConstants";

export default class CloseDiscardListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (ref, editor) => {
    const data = {
      url: URL_CLOSE_FLOW,
      method: METHOD_CLOSE_FLOW,
      params: {},
    };

    this.privateTerminal.callConnect(ref, data, editor);
  };
}
