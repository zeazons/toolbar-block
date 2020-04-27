import Listener from "../facade/Listener";

import ToolbarLoadListener from "./listener/ToolbarLoadListener";
import SetToolbarListener from "./listener/SetToolbarListener";

export default class UIListener extends Listener {
  constructor(props) {
    super(props);

    this.toolbarLoadListener = new ToolbarLoadListener();
    this.setToolbarListener = new SetToolbarListener();
  }

  receive = (topic, data, extraParams) => {
    this[topic](data, extraParams);
  };

  onToolbarLoader = (data) => {
    this.toolbarLoadListener.listen(data);
  };

  onSetToolbar = (data, extraParams) => {
    this.setToolbarListener.listen(data, extraParams);
  };
}
