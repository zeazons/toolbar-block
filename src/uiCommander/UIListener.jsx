import Listener from "../facade/Listener";

export default class UIListener extends Listener {
  constructor(props) {
    super(props);
  }

  receive = (topic, data, extraParams) => {
    this[topic](data, extraParams);
  };
}
