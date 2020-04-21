import React from "react";
import Tooltip from "./tooltip";

import ToolbarButton from "./toolbarButton";
import ToolbarCircleButton from "./ToolbarCircleButton";

const ToolbarLeftView = React.forwardRef(({ id, height } = props, ref) => (
  <div
    className="actionbar-left"
    style={{ height: `${height}px` }}
    id={id || new Date().getTime().toString()}
    ref={ref}
  >
    <div className="btn">
      <ToolbarCircleButton size="small">
        <Tooltip title="Read Flow" placement="bottom">
          <i className="fas fa-folder-open" />
        </Tooltip>
      </ToolbarCircleButton>
      <ToolbarCircleButton size="medium">
        <Tooltip title="Edit Flow">
          <i className="fas fa-edit" />
        </Tooltip>
      </ToolbarCircleButton>
      <ToolbarCircleButton size="medium">
        <Tooltip title="Save Flow">
          <i className="fas fa-save" />
        </Tooltip>
      </ToolbarCircleButton>
    </div>
    {/* <div className="spacer"> </div> */}
    <div className="btn btn-group">
      <ToolbarButton>
        <Tooltip title="Discard Flow">
          <i className="fas fa-history" />
        </Tooltip>
      </ToolbarButton>
      <ToolbarButton>
        <Tooltip title="Close Flow">
          <i className="fas fa-times-circle" />
        </Tooltip>
      </ToolbarButton>
    </div>

    {/* <div className="spacer"> </div> */}

    <div className="btn btn-group">
      <ToolbarButton>
        <Tooltip title="Undo Flow">
          <i className="fas fa-undo-alt" />
        </Tooltip>
      </ToolbarButton>
      <ToolbarButton>
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
));

export default ToolbarLeftView;
