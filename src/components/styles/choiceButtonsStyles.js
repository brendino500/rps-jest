import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  images: {
    height: 200,
    width: "8em",
    [theme.breakpoints.between("xs", "sm")]: {
      width: 100,
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: 200,
    },
  },
  buttons: {
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: "2em",
    },
  },
  resetText: {
    fontFamily: "Roboto Slab",
    letterSpacing: 4,
    fontWeight: "bold",
    fontSize: 25,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 18,
    },
  },
  resetButton: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: "2em",
    },
  },
}));

export default useStyles;
