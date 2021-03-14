import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  card: {
    border: "3px solid",
    borderRadius: "4px"
  }
}));

export const typeStyles = (bgColor, borderColor) => makeStyles((theme) => ({
  typeTemplate:{
    backgroundColor: bgColor,
    borderColor: borderColor
  }
}));

