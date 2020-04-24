import Listener from "../facade/Listener";

import ToolbarLoadListener from "./listener/ToolbarLoadListener";

export default class UIListener extends Listener {
  constructor(props) {
    super(props);

    this.toolbarLoadListener = new ToolbarLoadListener();
  }

  receive = (topic, data, extraParams) => {
    this[topic](data, extraParams);
  };

  onToolbarLoader = (data) => {
    this.toolbarLoadListener.listen(data);
  };
}
