import React from "react";
import Tooltip from "./tooltip";

import ToolbarButton from "./ToolbarButton";
import ToolbarCircleButton from "./ToolbarCircleButton";

const ToolbarLeftView = React.forwardRef(
  ({ id, height, onToolButtonClick } = props, ref) => (
    <div
      className="actionbar"
      style={{ height: `${height}px` }}
      id={id || new Date().getTime().toString()}
      ref={ref}
    >
      <div className="btn">
        <ToolbarCircleButton
          size="small"
          onClick={(event) => {
            onToolButtonClick(event, "readFlow");
          }}
        >
          <Tooltip title="Read Flow" placement="bottom">
            <i className="fas fa-folder-open fa-sm" />
          </Tooltip>
        </ToolbarCircleButton>
        <ToolbarCircleButton
          size="medium"
          onClick={(event) => {
            onToolButtonClick(event, "editFlow");
          }}
        >
          <Tooltip title="Edit Flow">
            <i className="fas fa-edit" />
          </Tooltip>
        </ToolbarCircleButton>
        <ToolbarCircleButton
          size="medium"
          onClick={(event) => {
            onToolButtonClick(event, "saveFlow");
          }}
        >
          <Tooltip title="Save Flow">
            <i className="fas fa-save" />
          </Tooltip>
        </ToolbarCircleButton>
      </div>
      <div className="spacer"> </div>
      <div className="btn btn-group">
        <ToolbarButton
          onClick={(event) => {
            onToolButtonClick(event, "discardFlow");
          }}
        >
          <Tooltip title="Discard Flow">
            <i className="fas fa-history" />
          </Tooltip>
        </ToolbarButton>
        <ToolbarButton
          onClick={(event) => {
            onToolButtonClick(event, "closeFlow");
          }}
        >
          <Tooltip title="Close Flow">
            <i className="fas fa-times-circle" />
          </Tooltip>
        </ToolbarButton>
      </div>

      <div className="spacer"> </div>

      <div className="btn btn-group">
        <ToolbarButton
          onClick={(event) => {
            onToolButtonClick(event, "undoFlow");
          }}
        >
          <Tooltip title="Undo Flow">
            <i className="fas fa-undo-alt" />
          </Tooltip>
        </ToolbarButton>
        <ToolbarButton
          onClick={(event) => {
            onToolButtonClick(event, "redoFlow");
          }}
        >
          <Tooltip title="Redo Flow">
            <i className="fas fa-redo-alt" />
          </Tooltip>
        </ToolbarButton>
      </div>

      {/* <div className="spacer"> </div>

      <div className="btn-group" role="group" aria-label="flow">
        <ActionBarButton
          onClick={() => {
            onCutHandler(editor);
          }}
        >
          <i className="fas fa-cut" />
        </ActionBarButton>
        <ActionBarButton
          onClick={() => {
            onCopyHandler(editor);
          }}
        >
          <i className="fas fa-copy" />
        </ActionBarButton>
        <ActionBarButton
          onClick={() => {
            onPasteHandler(editor);
          }}
        >
          <i className="fas fa-paste" />
        </ActionBarButton>
        <ActionBarButton
          onClick={() => {
            onDeleteHandler(editor);
          }}
        >
          <i className="fas fa-trash" />
        </ActionBarButton>
      </div> */}
    </div>
  )
);

export default ToolbarLeftView;
