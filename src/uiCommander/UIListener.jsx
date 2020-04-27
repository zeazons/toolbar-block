import Listener from "../facade/Listener";

import ToolbarLoadListener from "./listener/ToolbarLoadListener";
import ToolbarListener from "./listener/ToolbarListener";

export default class UIListener extends Listener {
  constructor(props) {
    super(props);

    this.toolbarLoadListener = new ToolbarLoadListener();
    this.toolbarListener = new ToolbarListener();
  }

  receive = (topic, data, extraParams) => {
    this[topic](data, extraParams);
  };

  onToolbarLoader = (data) => {
    this.toolbarLoadListener.listen(data);
  };

  onSetToolbar = (data, extraParams) => {
    this.toolbarListener.listen(data, extraParams);
  };
}
