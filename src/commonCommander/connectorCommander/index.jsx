import _ from "lodash";

import Commander from "../../facade/Commander";

// Worker
import HTTPClient from "./connectorWorker/HTTPClient";

// Constants
import * as ConnectorConstants from "../../constants/connectorConstants";
import * as ExceptionConstants from "../../constants/exceptionConstants";

// config
import { DEFAULT_CONNECT_TYPE } from "../../config";

// Utils
import { isEmpty } from "../../utils/validationUtils";

const getConnectType = (props) => {
  let connectType;

  if (!isEmpty(props)) {
    const type = props.type;
    connectType = !isEmpty(type) ? type : DEFAULT_CONNECT_TYPE;
  } else {
    connectType = DEFAULT_CONNECT_TYPE;
  }

  return connectType;
};

const post = (data) => {
  const httpClient = new HTTPClient();
  return httpClient
    .execute(data)
    .then((response) => {
      response["success"] = true;
      return response;
    })
    .catch((e) => {
      let errorObj = {};
      errorObj["success"] = false;
      if (e.response) {
        errorObj["statusCode"] = e.response.status;
        errorObj["message"] = e.message;
        errorObj["data"] = e.response.data;
      } else {
        errorObj["statusCode"] = ExceptionConstants.STATUS_CODE_408;
        errorObj["message"] = "Request Timeout";
      }

      return errorObj;
    });
};

const get = (data) => {
  console.log("send with get");
};

const ws = (data) => {
  console.log("send with ws");
};

class ConnectorCommander extends Commander {
  constructor(props) {
    super(props);
  }

  send = async (data) => {
    let res;

    switch (getConnectType(this.props)) {
      case ConnectorConstants.CONNECT_POST:
        res = await post(data);
        break;

      case ConnectorConstants.CONNECT_GET:
        res = get(data);
        break;

      case ConnectorConstants.CONNECT_WS:
        res = ws(data);
        break;

      default:
        res = post(data);
        break;
    }

    return res;
  };
}

export default ConnectorCommander;
