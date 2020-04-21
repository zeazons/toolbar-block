import React, { Component } from "react";

import PrivateTerminal from "./PrivateTerminal";

export default class Listener extends Component {
  constructor(props) {
    super(props);

    this.privateTerminal = new PrivateTerminal();
  }
}
