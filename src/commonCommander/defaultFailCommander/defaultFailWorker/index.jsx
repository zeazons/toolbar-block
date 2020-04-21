import _ from "lodash";

import Worker from "../../../facade/Worker";

import * as ExceptionConstants from "../../../constants/exceptionConstants";
import * as ActionConstants from "../../../constants/actionConstants";

// Utils
import { isEmpty } from "../../../utils/validationUtils";
import { generateAction } from "../../../utils/actionUtils";

const extractStatusCode = data => {
  let statusCode;
  if (isEmpty(data)) {
    statusCode = ExceptionConstants.STATUS_CODE_DEFAULT;
  } else {
    statusCode = data["statusCode"].toString();
  }
  return statusCode;
};

const getActionWithStatusCode = (statusCode, data) => {
  switch (statusCode) {
    case ExceptionConstants.STATUS_CODE_403:
      return generateAction({
        name: ActionConstants.ACTION_SHOW_ERROR,
        force: true,
        params: data
      });

    case ExceptionConstants.STATUS_CODE_404:
      return generateAction({
        name: ActionConstants.ACTION_SHOW_ERROR,
        force: true,
        params: data
      });

    case ExceptionConstants.STATUS_CODE_408:
      return generateAction({
        name: ActionConstants.ACTION_SHOW_ERROR,
        force: true,
        params: data
      });

    case ExceptionConstants.STATUS_CODE_500:
      return generateAction({
        name: ActionConstants.ACTION_SHOW_ERROR,
        force: true,
        params: data
      });

    default:
      if (!isEmpty(data.message)) {
        return generateAction({
          name: ActionConstants.ACTION_SHOW_ERROR,
          force: true,
          params: data
        });
      } else {
        return generateAction({
          name: ActionConstants.ACTION_SHOW_ERROR,
          force: true,
          params: {
            message: ExceptionConstants.MSG_ERROR
          }
        });
      }
  }
};

const getDefaultAction = data => {
  const statusCode = extractStatusCode(data);

  if (!isEmpty(statusCode)) {
    return getActionWithStatusCode(statusCode, data);
  }
};

export default class DefaultFailWorker extends Worker {
  constructor(props) {
    super(props);
  }

  execute = data => {
    return getDefaultAction(data);
  };
}
