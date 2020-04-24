import _ from "lodash";

// import Commander from "../facade/Commander";
import UICommander from "../commonCommander/uiCommander";

import ToolbarLoaderWorker from "./worker/ToolbarLoaderWorker";

class ToolbarComponentCommander extends UICommander {
  constructor(props) {
    super(props);

    this.toolbarLoaderWorker = new ToolbarLoaderWorker();
  }

  loadToolbarButton = (ref, data, extraParams) => {
    return this.toolbarLoaderWorker.execute(ref, data, extraParams);
  };
}

export default ToolbarComponentCommander;
