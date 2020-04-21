import _ from "lodash";

import Commander from "../../../facade/Commander";

import CommandValidatorListener from "./CommandValidatorListener";

import * as ExceptionConstants from "../../../constants/exceptionConstants";

import { isEmpty, isArray, isFunction } from "../../../utils/validationUtils";
import { generateExceptionMessage } from "../../../utils/exceptionUtils";

const isValidArray = (data) => {
  return new Promise((success, exception) => {
    if (isArray(data) && !isEmpty(data)) {
      success(data);
    } else {
      const resObj = generateExceptionMessage({
        message: ExceptionConstants.MSG_FUNCTION_NOT_FOUND,
      });
      exception(resObj);
    }
  });
};

const isValidExecuteAction = (cls, data) => {
  return new Promise((success, exception) => {
    let resObj = {};
    let dataList = [];
    data.forEach((item) => {
      dataList.push(item.name);
    });

    const uiFnList = getAllFns(cls);
    let intersection = dataList.filter((x) => !uiFnList.includes(x));

    if (allowUIExecute(data, intersection)) {
      resObj["success"] = true;
      success(resObj);
    } else {
      resObj = generateExceptionMessage({
        message: ExceptionConstants.MSG_FUNCTION_NOT_FOUND,
      });
      resObj["fns"] = intersection;
      exception(resObj);
    }
  });
};

const allowUIExecute = (data, fnList) => {
  let allow = true;
  if (!isEmpty(fnList)) {
    fnList.forEach((fnName) => {
      data.forEach((data) => {
        if (fnName === data.name) {
          console.warn("==== Function Verified ====");
          console.warn("name:", fnName);
          console.warn("force:", data.force);
          console.warn("===========================");
          if (data.force) {
            allow = false;
          }
        }
      });
    });
  }

  return allow;
};

const getAllFns = (object) => {
  return Object.getOwnPropertyNames(object).filter(function (property) {
    return isFunction(object[property]);
  });
};

const exceute = (error) => {
  const cvListener = new CommandValidatorListener();
  cvListener.listen(error);
};

const validate = (cls, data) => {
  return isValidArray(data)
    .then((params) => {
      return isValidExecuteAction(cls, params);
    })
    .catch((error) => {
      return error;
    });
};

export default class CommandValidatorWorker extends Commander {
  constructor(props) {
    super(props);
  }

  receive = async (cls, data) => {
    const isValid = await validate(cls, data);
    if (!isValid.success) {
      exceute(isValid);
    }

    return isValid;
  };
}
