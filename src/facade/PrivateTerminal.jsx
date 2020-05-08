import React, { Component } from "react";

import { connectFlow, readActionFlow } from "../facade/Bloc";

export default class PrivateTerminal extends Component {
  constructor(props) {
    super(props);

    // this.mBloc = new ManagerBloc();
  }

  // Private tunnel for internal use of ref
  callConnect = (ref, data, extraParams, callback) =>
    connectFlow(ref, data, extraParams, callback);

  callReadAction = (ref, actionList, extraParams, callback) =>
    readActionFlow(ref, actionList, extraParams, callback);
}
