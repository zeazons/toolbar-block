import Commander from "../../facade/Commander";
import ActionReaderWorker from "./actionReaderWorker";

class ActionReaderCommander extends Commander {
  constructor(props) {
    super(props);

    this.worker = new ActionReaderWorker();
  }

  receive = (data) => {
    return this.worker.execute(data);
  };
}

export default ActionReaderCommander;
