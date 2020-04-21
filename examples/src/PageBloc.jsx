import { Component } from "react";

import { URL_OPEN_FLOW } from "./constants/urlConstants";

export default class PageBloc extends Component {
  constructor(props) {
    super(props);
  }

  readFlowHandler = () => {
    const data = {
      url: URL_OPEN_FLOW,
      method: "readFlow",
      params: {},
    };

    this.props.current.readFlow(data);
  };
}
