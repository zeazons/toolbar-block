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

      <ToolbarButton>
        <Tooltip title="Open Guideline">
          <FontAwesomeIcon icon={faBorderNone} />
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

    {/* <div className="spacer"> </div> */}

    <div className="btn btn-group">
      <ToolbarButton>
        <Tooltip title="Zoom Out">
          <FontAwesomeIcon icon={faSearchMinus} />
        </Tooltip>
      </ToolbarButton>
      <ToolbarButton>
        <Tooltip title="Zoom In">
          <FontAwesomeIcon icon={faSearchPlus} />
        </Tooltip>
      </ToolbarButton>
      <ToolbarButton>
        <Tooltip title="Zoom Actual Size">
          <FontAwesomeIcon icon={faCompress} />
        </Tooltip>
      </ToolbarButton>
      <ToolbarButton>
        <Tooltip title="Zoom Fit Size">
          <FontAwesomeIcon icon={faExpand} />
        </Tooltip>
      </ToolbarButton>
    </div>
  </div>
));

export default ToolbarRightView;
