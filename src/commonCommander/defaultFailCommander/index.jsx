import _ from "lodash";

import Commander from "../../facade/Commander";
import DefaultFailAction from "./defaultFailWorker";

class DefaultFailCommander extends Commander {
  constructor(props) {
    super(props);

    this.worker = new DefaultFailAction();
  }

  receive = (data) => {
    return this.worker.execute(data);
  };
}

export default DefaultFailCommander;
