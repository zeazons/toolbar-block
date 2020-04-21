import _ from "lodash";

export const generateAction = data => {
  let action = [];
  const { name, force, params } = data;
  action.push({
    name: name,
    force: force || false,
    params: params
  });

  return { events: action };
};
