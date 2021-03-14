import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        className={classes.title}
      >
        Dashboard
      </Typography>
    </AppBar>
  );
};

export default Navbar;
