import {
  mxToolbar,
  mxConstants,
  mxPerimeter,
  mxCell,
  mxGeometry,
  mxEvent,
  mxUtils,
} from "mxgraph/javascript/mxClient";

import {
  NODE_START,
  NODE_END,
  NODE_DECISION,
  NODE_LOOP,
  NODE_IMAGE,
} from "../constants/nodeConstant";

export const addNode = (el, graph, node) => {
  el.addEventListener("mouseover", () => {
    graph.getSelectionModel().clear();
  });

  const toolbar = new mxToolbar(el);
  toolbar.enabled = false;

  initialNodeCommon(graph);

  const addVertex = (node) => {
    const vertex = new mxCell(
      node,
      new mxGeometry(0, 0, node.width, node.height)
      // ,node.style)
    );

    setNodeStyle(graph, vertex, node);
    vertex.setVertex(true);

    const img = addToolbarItem(graph, toolbar, vertex, node.icon);
    // img.enabled = true;
    img.setAttribute("title", node.nodeName);

    graph.getSelectionModel().addListener(mxEvent.CHANGE, function () {
      const tmp = graph.isSelectionEmpty();
      // mxUtils.setOpacity(img, tmp ? 100 : 20);
      img.enabled = tmp;
    });

    // const isEditable =
    //   getStore(FLOW_STORE) !== null ? getStore(FLOW_STORE).editing : true;
    // if (isEditable) {
    img.enabled = true;
    //   // mxUtils.setOpacity(img, 100);
    // } else {
    //   img.enabled = false;
    //   // mxUtils.setOpacity(img, 20);
    // }
  };
  addVertex(node);
};

const initialNodeCommon = (graph) => {
  let style = [];

  style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_LABEL;
  style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
  style[mxConstants.STYLE_IMAGE_ALIGN] = mxConstants.ALIGN_LEFT;
  style[mxConstants.STYLE_IMAGE_HEIGHT] = 25;
  style[mxConstants.STYLE_IMAGE_VERTICAL_ALIGN] = mxConstants.ALIGN_TOP;
  style[mxConstants.STYLE_IMAGE_WIDTH] = 25;
  style[mxConstants.STYLE_SPACING_LEFT] = 25;
  style[mxConstants.STYLE_STROKEWIDTH] = 2;
  style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
  style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
  style[mxConstants.STYLE_STROKECOLOR] = "#728EC3";
  style[mxConstants.STYLE_FILLCOLOR] = "#C3D9FE";
  style[mxConstants.STYLE_WHITE_SPACE] = "wrap";
  // style[mxConstants.STYLE_ROUNDED] = true;

  graph.getStylesheet().putDefaultVertexStyle(style);
};
const setNodeStyle = (graph, vertex, node) => {
  let style = "";

  if (node.nodeType === NODE_START) {
    style = `shape=ellipse;strokeWidth=2;fillColor=#28A745;strokeColor=#218838;noLabel=1`;
  } else if (node.nodeType === NODE_END) {
    style = `shape=ellipse;strokeWidth=2;fillColor=#DB3545;strokeColor=#C82332;noLabel=1`;
  } else if (node.nodeType === NODE_DECISION) {
    style = `shape=rhombus;strokeWidth=2;noLabel=1;rounded=0`;
  } else if (node.nodeType === NODE_LOOP) {
    style = `shape=ellipse;strokeWidth=2;noLabel=1`;
  } else if (node.nodeType === NODE_IMAGE) {
    style = `shape=image;image=${node.icon};spacingLeft=0`;
  } else if (node.nodeType === "umlActor") {
    style = `shape=umlActor;spacingLeft=0`;
  } else {
    style = `image=${node.icon}`;
  }

  graph.getModel().setStyle(vertex, style);
};

const addToolbarItem = (graph, toolbar, prototype, image) => {
  // Function that is executed when the image is dropped on
  // the graph. The cell argument points to the cell under
  // the mousepointer if there is one.
  const funct = function (graph, evt, cell, x, y) {
    // graph.stopEditing(false);

    const vertex = graph.getModel().cloneCell(prototype);
    vertex.geometry.x = x;
    vertex.geometry.y = y;

    graph.addCell(vertex);
    graph.setSelectionCell(vertex);
  };

  // Creates the image which is used as the drag icon (preview)
  const img = toolbar.addMode(null, image, function (evt, cell) {
    const pt = this.graph.getPointForEvent(evt);
    funct(graph, evt, cell, pt.x, pt.y);
  });

  // Disables dragging if element is disabled. This is a workaround
  // for wrong event order in IE. Following is a dummy listener that
  // is invoked as the last listener in IE.
  mxEvent.addListener(img, "mousedown", function (evt) {
    // do nothing
  });

  // This listener is always called first before any other listener
  // in all browsers.
  mxEvent.addListener(img, "mousedown", function (evt) {
    if (img.enabled == false) {
      mxEvent.consume(evt);
    }
  });

  mxUtils.makeDraggable(img, graph, funct);

  return img;
};
