import _ from "lodash";

import Worker from "../../../facade/Worker";

import * as ExceptionConstants from "../../../constants/exceptionConstants";

// Utils
import { isEmpty, isObject } from "../../../utils/validationUtils";
import { generateExceptionMessage } from "../../../utils/exceptionUtils";

const extractData = (key, data) => {
  return data[key];
};

const isValidActionList = (data) => {
  return !isEmpty(data) && isObject(data);
};

const extract = (data) => {
  let resObj = {};
  if (!isEmpty(data)) {
    let actionList = extractData("action", data.result);
    if (isValidActionList(actionList)) {
      actionList["success"] = true;
      resObj = actionList;
    } else {
      resObj = generateExceptionMessage({
        message: ExceptionConstants.MSG_CAN_NOT_EXTRACT_DATA,
      });
    }
  } else {
    resObj = generateExceptionMessage({
      message: ExceptionConstants.MSG_CAN_NOT_EXTRACT_DATA,
    });
  }

  return resObj;
};

export default class ExtractorWorker extends Worker {
  constructor(props) {
    super(props);
  }

  execute = (data) => {
    return extract(data);
  };
}
