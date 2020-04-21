import _ from "lodash";
import * as ExceptionConstants from "../constants/exceptionConstants";

export const generateExceptionMessage = data => {
  const { success, statusCode, message } = data;
  let exceptionMsg = {};
  exceptionMsg["success"] = success || false;
  exceptionMsg["statusCode"] = statusCode
    ? statusCode
    : ExceptionConstants.STATUS_CODE_DEFAULT;
  exceptionMsg["message"] = message ? message : ExceptionConstants.MSG_ERROR;
  return exceptionMsg;
};
