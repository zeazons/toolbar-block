import Worker from "../../../facade/Worker";

import * as ExceptionConstants from "../../../constants/exceptionConstants";
import { generateExceptionMessage } from "../../../utils/exceptionUtils";

const validateData = data => {
  return true;
};

const validate = data => {
  let resObj = {};
  let isValid = validateData(data);

  if (isValid) {
    resObj = { ...data, success: true };
  } else {
    resObj = generateExceptionMessage({
      message: ExceptionConstants.MSG_DATA_IS_NOT_VALID
    });
  }

  return resObj;
};

export default class PrepairingWorker extends Worker {
  constructor(props) {
    super(props);
  }

  execute = data => {
    return validate(data);
  };
}
