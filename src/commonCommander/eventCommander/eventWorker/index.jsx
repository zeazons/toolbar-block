import { Component } from "react";

import PrivateTerminal from "../../../facade/PrivateTerminal";
import UIListener from "../../../uiCommander/UIListener";

import * as ActionConstants from "../../../constants/actionConstants";
import { generateAction } from "../../../utils/actionUtils";

class EventWorker extends Component {
  constructor(props) {
    super(props);

    this.privateTerminal = new PrivateTerminal();
    this.uiListener = new UIListener();
  }

  execute = (topic, data, extraParams) => {
    try {
      this.uiListener.receive(topic, data, extraParams);
    } catch (error) {
      const action = generateAction({
        name: ActionConstants.ACTION_SHOW_ERROR,
        force: true,
        params: { type: "error", message: `[[ ${topic} ]] is not a function` },
      });

      this.privateTerminal.callReadAction(null, action);
    }
  };
}

export default EventWorker;
