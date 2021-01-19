import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Beth Ellen",
    fontSize: "1.5em",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 28,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 40,
    },
  },
}));

export default useStyles;
