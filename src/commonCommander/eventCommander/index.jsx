import { Component } from "react";

import EventWorker from "./eventWorker";

class EventCommander extends Component {
  constructor(props) {
    super(props);

    this.worker = new EventWorker();
  }

  receive = (topic, data, extraParams, callback) =>
    this.worker.execute(topic, data, extraParams, callback);
}

export default EventCommander;
