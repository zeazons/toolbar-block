import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faEdit,
  faSave,
  faTimesCircle,
  faHistory,
  faUndoAlt,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";

import Tooltip from "./tooltip";

import ToolbarButton from "./toolbarButton";
import ToolbarCircleButton from "./toolbarCircleButton";

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
          <FontAwesomeIcon icon={faFolderOpen} />
        </Tooltip>
      </ToolbarCircleButton>
      <ToolbarCircleButton size="medium">
        <Tooltip title="Edit Flow">
          <FontAwesomeIcon icon={faEdit} />
        </Tooltip>
      </ToolbarCircleButton>
      <ToolbarCircleButton size="medium">
        <Tooltip title="Save Flow">
          <FontAwesomeIcon icon={faSave} />
        </Tooltip>
      </ToolbarCircleButton>
    </div>
    {/* <div className="spacer"> </div> */}
    <div className="btn btn-group">
      <ToolbarButton>
        <Tooltip title="Discard Flow">
          <FontAwesomeIcon icon={faHistory} />
        </Tooltip>
      </ToolbarButton>
      <ToolbarButton>
        <Tooltip title="Close Flow">
          <FontAwesomeIcon icon={faTimesCircle} />
        </Tooltip>
      </ToolbarButton>
    </div>

    {/* <div className="spacer"> </div> */}

    <div className="btn btn-group">
      <ToolbarButton>
        <Tooltip title="Undo Flow">
          <FontAwesomeIcon icon={faUndoAlt} />
        </Tooltip>
      </ToolbarButton>
      <ToolbarButton>
        <Tooltip title="Redo Flow">
          <FontAwesomeIcon icon={faRedoAlt} />
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
