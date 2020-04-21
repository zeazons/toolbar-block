import _ from "lodash";

export const generateReferenceView = (elName, el) => {
  let ref = [];
  ref[elName] = { current: el };

  return ref;
};
