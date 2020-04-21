import React from "react";
import Draggable from "react-draggable";

import {
  Button,
  Grid,
  Paper,
  DialogTitle as MuiDialogTitle,
  IconButton,
  Typography
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import "./style.css";

const Modal = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { title, children } = props;

  return (
    <div>
      <IconButton aria-label="close" onClick={handleClickOpen}>
        <KeyboardIcon />
      </IconButton>

      {open ? (
        <Draggable handle=".handle" position={null} scale={1}>
          <div>
            <div className="handle">
              <Grid container justify="space-between" alignItems="center">
                <Grid item xs={true}>
                  <Typography variant="subtitle1">{title}</Typography>
                </Grid>
                <Grid item xs="auto">
                  <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Grid>
            </div>

            <div className="content-draggable">{children}</div>
          </div>
        </Draggable>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Modal;
