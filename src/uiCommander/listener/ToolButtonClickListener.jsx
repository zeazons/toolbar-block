import $ from "jquery";
import { mxUtils, mxCodec } from "mxgraph/javascript/mxClient";

import Listener from "../../facade/Listener";

import { URL_REDO_FLOW, METHOD_REDO_FLOW } from "../../constants/urlConstants";

import { getParentByClassName } from "../../utils/viewUtils";

export default class ToolButtonClickListener extends Listener {
  listen = (event, extraParams) => {
    this.execute(event, extraParams);
  };

  execute = (event, extraParams) => {
    const el = $(event.target);
    const parent = getParentByClassName(el, "toolbar-component");

    if (parent) {
      const ref = {};
      const enc = new mxCodec(mxUtils.createXmlDocument());
      const node = enc.encode(extraParams.graph.getModel());
      const xmlFlow = mxUtils.getPrettyXml(node);

      const data = {
        url: URL_REDO_FLOW,
        method: METHOD_REDO_FLOW,
        params: {
          event: event.type,
          keyChar: $(event.target).text(),
          graphModel: xmlFlow,
        },
      };
      if (!el[0].readOnly) {
        this.privateTerminal.callConnect(ref, data, extraParams);
      }
    }
  };
}
