import Commander from "../../facade/Commander";
import PrepairingWorker from "./prepairingWorker";

class PrepairingCommander extends Commander {
  constructor(props) {
    super(props);

    this.worker = new PrepairingWorker();
  }

  receive = (data) => {
    return this.worker.execute(data);
  };
}

export default PrepairingCommander;
