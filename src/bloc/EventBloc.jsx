import _ from "lodash";

import Bloc from "../facade/Bloc";
import EventCommander from "../commonCommander/eventCommander";

export default class EventBloc extends Bloc {
  constructor(props) {
    super(props);
    this.event = new EventCommander();
  }

  receiveEvent = (topic, data, extraParams) => {
    this.event.receive(topic, data, extraParams);
  };
}
