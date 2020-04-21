import React, { Component } from "react";

import { connectFlow, readActionFlow } from "../facade/Bloc";

export default class PrivateTerminal extends Component {
  constructor(props) {
    super(props);

    // this.mBloc = new ManagerBloc();
  }

  // Private tunnel for internal use of ref
  callConnect = (ref, data, extraParams) => connectFlow(ref, data, extraParams);

  callReadAction = (ref, actionList, extraParams) =>
    readActionFlow(ref, actionList, extraParams);
}
