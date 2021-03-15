import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10px 25px",
    position: "relative",
    height: "65vh",
  },
  navButton: {
    borderRadius: "25px",
    zIndex: 9,
    top: "50%",
    backgroundColor: "gray",
    float: "left"
  },
  nextButton: {
    left: "100%"
  },
  prevButton: {
    left: "-5%"
  }
}));

export default useStyles;
