import Worker from "../../../facade/Worker";

import * as ExceptionConstants from "../../../constants/exceptionConstants";

import { isEmpty, isArray } from "../../../utils/validationUtils";
import { generateExceptionMessage } from "../../../utils/exceptionUtils";

const readerData = (key, data) => {
  return data[key];
};

const isValidEventList = (data) => {
  return isArray(data) && data.length > 0;
};

const reader = (data) => {
  let resObj = {};
  if (!isEmpty(data)) {
    let eventList = readerData("events", data);

    if (isValidEventList(eventList)) {
      eventList["success"] = true;
      resObj = eventList;
    } else {
      resObj = generateExceptionMessage({
        message: ExceptionConstants.MSG_CAN_NOT_READ_ACTION,
      });
    }
  } else {
    resObj = generateExceptionMessage({
      message: ExceptionConstants.MSG_CAN_NOT_READ_ACTION,
    });
  }

  return resObj;
};

export default class ActionReaderWorker extends Worker {
  constructor(props) {
    super(props);
  }

  execute = (data) => {
    return reader(data);
  };
}
