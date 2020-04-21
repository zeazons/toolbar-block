import $ from "jquery";

import Listener from "../../facade/Listener";

import { generateReferenceView } from "../../utils/listenerUtils";
import { generateAction } from "../../utils/actionUtils";

import {
  URL_LOAD_TOOLBAR,
  METHOD_LOAD_TOOLBAR,
} from "../../constants/urlConstants";
import * as ActionConstants from "../../constants/actionConstants";

import { getParentByClassName } from "../../utils/viewUtils";

export default class ToolbarLoadListener extends Listener {
  listen = (event) => {
    this.execute(event);
  };

  execute = (ref) => {
    const data = {
      url: URL_LOAD_TOOLBAR,
      method: METHOD_LOAD_TOOLBAR,
      params: {},
    };

    this.privateTerminal.callConnect(ref, data);
  };
}
