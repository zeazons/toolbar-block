import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const SSQButtonStyle = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    backgroundColor: "#FFF",
    borderColor: "#404040",

    "&:hover": {
      backgroundColor: "rgba(90,90,90,.5)",
      borderColor: "rgba(90,90,90,.5)",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgba(90,90,90,.5)",
      borderColor: "rgba(90,90,90,.5)"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(90,90,90,.5)"
    }
  }
})(Button);

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function SSQButtonIconPrimaryOutlined(props) {
  const {
    children,
    icon,
    size,
    placement,
    disabled,
    noSpecing,
    type,
    fullWidth,
    onClick
  } = props;
  const classes = useStyles();

  return (
    <SSQButtonStyle
      size={size || "medium"}
      disabled={disabled || false}
      onClick={onClick}
      variant="outlined"
      startIcon={icon}
      className={noSpecing ? "" : classes.button}
      type={type || "button"}
      fullWidth={fullWidth || false}
    >
      {children}
    </SSQButtonStyle>
  );
}
