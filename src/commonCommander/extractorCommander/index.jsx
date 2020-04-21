import Commander from "../../facade/Commander";

import ExtractorAction from "./extractorWorker";

class ExtractorCommander extends Commander {
  constructor(props) {
    super(props);

    this.worker = new ExtractorAction();
  }

  receive = (data) => {
    return this.worker.execute(data);
  };
}

export default ExtractorCommander;
