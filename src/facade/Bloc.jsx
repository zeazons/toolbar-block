import { Component } from "react";
import _ from "lodash";

import PreparingCommander from "../commonCommander/preparingCommander";
import ConnectorCommander from "../commonCommander/connectorCommander";
import ExtractorCommander from "../commonCommander/extractorCommander";
import ActionReaderCommander from "../commonCommander/actionReaderCommander";
import DefaultFailCommander from "../commonCommander/defaultFailCommander";
import UICommander from "../uiCommander/UICommander";

const preparDataFn = (data) => {
  return new Promise((success, exception) => {
    const preparing = new PreparingCommander();
    const result = preparing.receive(data);

    if (result.success) {
      success(data);
    } else {
      exception(result);
    }
  });
};

const connectFn = (data) => {
  return new Promise(async (success, exception) => {
    const connector = new ConnectorCommander();
    const response = await connector.send(data);

    if (response.success) {
      success(response.data);
    } else {
      exception(response);
    }
  });
};

const extractFn = (response) => {
  return new Promise((success, exception) => {
    const extractor = new ExtractorCommander();
    const eventList = extractor.receive(response);

    if (eventList.success) {
      success(eventList);
    } else {
      exception(eventList);
    }
  });
};

const readActionFn = (eventList) => {
  return new Promise((success, exception) => {
    const reader = new ActionReaderCommander();
    const actionList = reader.receive(eventList);

    if (actionList.success) {
      success(actionList);
    } else {
      exception(actionList);
    }
  });
};

const uiExecute = (ref, actionList, extraParams) => {
  return new Promise(async (success, exception) => {
    const uic = new UICommander();

    const result = await uic.receive(ref, actionList, extraParams);

    if (result.success) {
      success(result);
    } else {
      exception(result);
    }
  });
};

const catchHandler = (ref, error, extraParams) => {
  const dc = new DefaultFailCommander();
  const defaultFailActionList = dc.receive(error);

  readActionFn(defaultFailActionList).then((actionList) => {
    return uiExecute(ref, actionList, extraParams);
  });
};

export const connectFlow = (ref, data, extraParams) => {
  return connectFn(data)
    .then((response) => {
      return extractFn(response);
    })
    .then((eventList) => {
      return readActionFn(eventList);
    })
    .then((actionList) => {
      return uiExecute(ref, actionList, extraParams);
    })
    .catch((error) => {
      catchHandler(ref, error, extraParams);
    });
};

export const readActionFlow = (ref, eventList, extraParams) => {
  return readActionFn(eventList)
    .then((actionList) => {
      return uiExecute(ref, actionList, extraParams);
    })
    .catch((error) => {
      catchHandler(ref, error, extraParams);
    });
};

export default class Bloc extends Component {
  constructor(props) {
    super(props);
  }

  receive = (ref, data, extraParams) => {
    this.executeFlow(ref, data, extraParams);
  };

  executeFlow = (ref, data, extraParams) => {
    return preparDataFn(data)
      .then((data) => {
        return connectFn(data);
      })
      .then((response) => {
        return extractFn(response);
      })
      .then((eventList) => {
        return readActionFn(eventList);
      })
      .then((actionList) => {
        return uiExecute(ref, actionList, extraParams);
      })
      .catch((error) => {
        catchHandler(ref, error, extraParams);
      });
  };
}
