import Listener from "../../facade/Listener";

import { URL_UNDO_FLOW, METHOD_UNDO_FLOW } from "../../constants/urlConstants";

export default class UndoFlowListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (ref, editor) => {
    const data = {
      url: URL_UNDO_FLOW,
      method: METHOD_UNDO_FLOW,
      params: {},
    };

    this.privateTerminal.callConnect(ref, data, editor);
  };
}
