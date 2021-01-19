import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  scoreText: {
    fontFamily: "Roboto Slab",
    fontSize: 30,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 18,
      marginTop: "2em",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 34,
    },
  },
  scoreGrid: {
    display: "flex",
    justify: "space around",
    alignItems: "center",
  },
  results: {
    marginTop: "-5em",
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: "-2em",
    },
  },
  roundResults: {
    textAlign: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: "2em",
    },
  },
  winnerResults: {
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Roboto Slab",
    margin: "0.55em 0",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 18,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 28,
    },
  },
}));

export default useStyles;
