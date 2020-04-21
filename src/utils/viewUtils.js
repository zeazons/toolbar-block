import $ from "jquery";

export const getParentByClassName = (el, className) => {
  let parent = el.parent();
  const cls = $(parent).attr("class");

  if (className === cls) {
    return parent[0];
  } else {
    return getParentByClassName(parent, className);
  }
};
