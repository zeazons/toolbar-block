import React from "react";
import Tooltip from "./tooltip";

import ToolbarButton from "./toolbarButton";

const ToolbarRightView = React.forwardRef(
  ({ id, height, onToolButtonClick } = props, ref) => (
    <div
      className="actionbar"
      style={{ height: `${height}px` }}
      id={id || new Date().getTime().toString()}
      ref={ref}
    >
      <div className="btn btn-group">
        {/* <ActionBarButton
          onClick={() => {
            onShowPhotoHandler(editor);
          }}
        >
          <i className="fa fa-camera" aria-hidden="true" />
        </ActionBarButton> */}

        <ToolbarButton
          onClick={(event) => {
            onToolButtonClick(event, "openFlowGuideline");
          }}
        >
          <Tooltip title="Open Guideline">
            <i className="fas fa-border-none" />
          </Tooltip>
        </ToolbarButton>
        {/* <ActionBarButton
          onClick={() => {
            onPrintHandler(editor);
          }}
        >
          <i className="fas fa-print" />
        </ActionBarButton> */}
      </div>

      <div className="spacer"> </div>

      <div className="btn btn-group">
        <ToolbarButton
          onClick={(event) => {
            onToolButtonClick(event, "zoomOutFlow");
          }}
        >
          <Tooltip title="Zoom Out">
            <i className="fas fa-search-minus" />
          </Tooltip>
        </ToolbarButton>
        <ToolbarButton
          onClick={(event) => {
            onToolButtonClick(event, "zoomInFlow");
          }}
        >
          <Tooltip title="Zoom In">
            <i className="fas fa-search-plus" />
          </Tooltip>
        </ToolbarButton>
        <ToolbarButton
          onClick={(event) => {
            onToolButtonClick(event, "zoomActualSize");
          }}
        >
          <Tooltip title="Zoom Actual Size">
            <i className="fas fa-compress" />
          </Tooltip>
        </ToolbarButton>
        <ToolbarButton
          onClick={(event) => {
            onToolButtonClick(event, "zoomFitSize");
          }}
        >
          <Tooltip title="Zoom Fit Size">
            <i className="fas fa-expand" />
          </Tooltip>
        </ToolbarButton>
      </div>
    </div>
  )
);

export default ToolbarRightView;
