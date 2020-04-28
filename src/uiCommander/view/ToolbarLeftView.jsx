import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faEdit,
  faSave,
  faCheckCircle,
  faTimesCircle,
  faHistory,
  faUndoAlt,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";

import Tooltip from "../components/tooltip";

import ToolbarButton from "../components/toolbarButton";
import ToolbarCircleButton from "../components/toolbarCircleButton";

const ToolbarLeftView = React.forwardRef(({ id, height } = props, ref) => (
  <div
    className="actionbar-left"
    style={{ height: `${height}px` }}
    id={id || new Date().getTime().toString()}
    ref={ref}
  >
    <div className="btn">
      <Tooltip title="Read Flow" placement="bottom">
        <ToolbarCircleButton size="small">
          <FontAwesomeIcon icon={faFolderOpen} />
        </ToolbarCircleButton>
      </Tooltip>
      <Tooltip title="Edit Flow">
        <ToolbarCircleButton size="medium">
          <FontAwesomeIcon icon={faEdit} />
        </ToolbarCircleButton>
      </Tooltip>
      <Tooltip title="Save Flow">
        <ToolbarCircleButton size="medium">
          <FontAwesomeIcon icon={faSave} />
        </ToolbarCircleButton>
      </Tooltip>
    </div>
    {/* <div className="spacer"> </div> */}
    <div className="btn btn-group">
      <Tooltip title="Commit Flow">
        <ToolbarButton>
          <FontAwesomeIcon icon={faCheckCircle} />
        </ToolbarButton>
      </Tooltip>
      <Tooltip title="Discard Flow">
        <ToolbarButton>
          <FontAwesomeIcon icon={faHistory} />
        </ToolbarButton>
      </Tooltip>
      <Tooltip title="Close Flow">
        <ToolbarButton>
          <FontAwesomeIcon icon={faTimesCircle} />
        </ToolbarButton>
      </Tooltip>
    </div>

    {/* <div className="spacer"> </div> */}

    <div className="btn btn-group">
      <Tooltip title="Undo Flow">
        <ToolbarButton>
          <FontAwesomeIcon icon={faUndoAlt} />
        </ToolbarButton>
      </Tooltip>
      <Tooltip title="Redo Flow">
        <ToolbarButton>
          <FontAwesomeIcon icon={faRedoAlt} />
        </ToolbarButton>
      </Tooltip>
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
