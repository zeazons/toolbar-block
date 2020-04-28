import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderNone,
  faSearchMinus,
  faSearchPlus,
  faCompress,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";

import Tooltip from "./tooltip";

import ToolbarButton from "./toolbarButton";

const ToolbarRightView = React.forwardRef(({ id, height } = props, ref) => (
  <div
    className="actionbar-right"
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

      <Tooltip title="Open Guideline">
        <ToolbarButton>
          <FontAwesomeIcon icon={faBorderNone} />
        </ToolbarButton>
      </Tooltip>
      {/* <ActionBarButton
          onClick={() => {
            onPrintHandler(editor);
          }}
        >
          <i className="fas fa-print" />
        </ActionBarButton> */}
    </div>

    {/* <div className="spacer"> </div> */}

    <div className="btn btn-group">
      <Tooltip title="Zoom Out">
        <ToolbarButton>
          <FontAwesomeIcon icon={faSearchMinus} />
        </ToolbarButton>
      </Tooltip>
      <Tooltip title="Zoom In">
        <ToolbarButton>
          <FontAwesomeIcon icon={faSearchPlus} />
        </ToolbarButton>
      </Tooltip>
      <Tooltip title="Zoom Actual Size">
        <ToolbarButton>
          <FontAwesomeIcon icon={faCompress} />
        </ToolbarButton>
      </Tooltip>
      <Tooltip title="Zoom Fit Size">
        <ToolbarButton>
          <FontAwesomeIcon icon={faExpand} />
        </ToolbarButton>
      </Tooltip>
    </div>
  </div>
));

export default ToolbarRightView;
